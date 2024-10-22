import { Hono } from "hono";
import { prismaConnect } from "../config/prisma";
import { verify } from "hono/jwt";
import {
  CreateBlogInputSchema,
  UpdateBlogInputSchema,
} from "@aradhya042/common-medium";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middleware
blogRouter.use("/*", async (c, next) => {
  try {
    const authToken = c.req.header("authorization")?.split(" ")[1] || "";
    const user = await verify(authToken, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id as string);
      await next();
    }
  } catch (e) {
    c.status(403);
    return c.json({
      success: false,
      message: "You are not logged In",
    });
  }
});

// Routes
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = CreateBlogInputSchema.safeParse(body);

  //zod validation
  if (!success) {
    c.status(411);
    return c.json({
      success: false,
      message: "Input Validation Failed",
    });
  }

  const prisma = prismaConnect(c.env.DATABASE_URL);
  const authorId = c.get("userId");
  const createdBlog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorId: parseInt(authorId),
    },
  });

  return c.json({
    success: true,
    data: createdBlog,
    message: "New Blog Created!",
  });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = prismaConnect(c.env.DATABASE_URL);

  const { success } = UpdateBlogInputSchema.safeParse(body);

  //zod validation
  if (!success) {
    c.status(411);
    return c.json({
      success: false,
      message: "Input Validation Failed",
    });
  }

  const updatedBlog = await prisma.blog.update({
    where: {
      id: body.id,
    },

    data: {
      title: body.title,
      content: body.content,
      published: body.published,
    },
  });

  return c.json({
    success: true,
    data: updatedBlog,
    message: "Blog Updated!",
  });
});

blogRouter.get("/bulk", async (c) => {
  const prisma = prismaConnect(c.env.DATABASE_URL);

  try {
    const allBlogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
 
    return c.json({
      success: true,
      data: allBlogs,
      message: "All Blogs Fetched Successfully",
    });
  } catch (e) {
    c.status(500);
    return c.json({
      success: false,
      message: "Error while fetching the Blogs",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const blogId = parseInt(c.req.param("id"));
  const prisma = prismaConnect(c.env.DATABASE_URL);

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },

      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (blog) {
      return c.json({
        success: true,
        data: blog,
        message: "Blog Fetched Successfully",
      });
    } else {
      c.status(404);
      return c.json({
        success: false,
        message: "Blog Not Found",
      });
    }
  } catch (e) {
    c.status(500);
    return c.json({
      success: false,
      message: "Error while fetching the Blog post",
    });
  }
});

export default blogRouter;

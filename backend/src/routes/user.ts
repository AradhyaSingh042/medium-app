import { Hono } from "hono";
import { prismaConnect } from "../config/prisma";
import { sign } from "hono/jwt";
import {
  signupInputSchema,
  signinInputSchema,
} from "@aradhya042/common-medium";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = prismaConnect(c.env.DATABASE_URL);

  try {
    const body = await c.req.json();
    const { success } = signupInputSchema.safeParse(body);

    //zod validation
    if (!success) {
      c.status(411);
      return c.json({
        success: false,
        message: "Input Validation Failed",
      });
    }

    // Add user entry in the Database
    const createdUser = await prisma.user.create({
      data: {
        name: body.name || "",
        email: body.email,
        password: body.password,
      },
    });

    // create a jwt token
    const jwtToken = await sign(
      {
        id: createdUser.id,
        email: createdUser.email,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      success: true,
      data: jwtToken,
      message: "Signup Completed!",
    });
  } catch (e) {
    c.status(411);
    return c.json({
      success: false,
      message: "Signup Invalidated",
    });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = prismaConnect(c.env.DATABASE_URL);
  try {
    const body = await c.req.json();
    const { success } = signinInputSchema.safeParse(body);

    //zod validation
    if (!success) {
      c.status(411);
      return c.json({
        success: false,
        message: "Input Validation Failed",
      });
    }

    // Check if the credentials are valid and the user really exists
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    // if credentials are invalid then send a error response
    if (!user) {
      c.status(403);
      return c.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // create a jwt token
    const jwtToken = await sign(
      {
        id: user.id,
        email: user.email,
      },
      c.env.JWT_SECRET
    );

    return c.json({
      success: true,
      data: jwtToken,
      message: "Signin Completed!",
    });
  } catch (e) {
    c.status(403);
    return c.json({
      success: false,
      message: "Signin Invalidated",
    });
  }
});

export default userRouter;

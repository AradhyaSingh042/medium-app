import { z } from "zod";

export const CreateBlogInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
});

export const UpdateBlogInputSchema = z.object({
  id: z.number(),
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});

// zod inference
export type CreateBlogInput = z.infer<typeof CreateBlogInputSchema>;
export type UpdateBlogInput = z.infer<typeof UpdateBlogInputSchema>;

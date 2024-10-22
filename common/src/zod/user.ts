import { z } from "zod";

export const signupInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// zod inference
export type SignupInput = z.infer<typeof signupInputSchema>;
export type SigninInput = z.infer<typeof signinInputSchema>;


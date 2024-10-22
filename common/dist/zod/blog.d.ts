import { z } from "zod";
export declare const CreateBlogInputSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published?: boolean | undefined;
}, {
    title: string;
    content: string;
    published?: boolean | undefined;
}>;
export declare const UpdateBlogInputSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}>;
export type CreateBlogInput = z.infer<typeof CreateBlogInputSchema>;
export type UpdateBlogInput = z.infer<typeof UpdateBlogInputSchema>;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogInputSchema = exports.CreateBlogInputSchema = void 0;
const zod_1 = require("zod");
exports.CreateBlogInputSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean().optional(),
});
exports.UpdateBlogInputSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional(),
});

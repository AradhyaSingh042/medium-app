"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInputSchema = exports.signupInputSchema = void 0;
const zod_1 = require("zod");
exports.signupInputSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional(),
});
exports.signinInputSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});

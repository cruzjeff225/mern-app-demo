import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    email: z
    .string({
        required_error: "Emial is required",
    })
    .email ({
        message: "Invalid email",
    }),
    pass: z
    .string ({
        required_error: "Password is required",
    })
    .min(6, {
        message: "Pas,sword must be a least 6 characters",
    })
});


export const loginSchema = z.object({
    email: z
    .string({
        required_error: "Email is required",
    })
    .email ({
        message: "Invalid email",
    }),
    pass: z
    .string ({
        required_error: "Password is required",
    })
    .min(6, {
        message: "Pssword must be a least 6 characters"
    })
})
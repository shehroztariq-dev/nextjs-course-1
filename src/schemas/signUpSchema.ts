import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(16, "Username must be not more than 16 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Username must be atleast 6 characters" }),
});

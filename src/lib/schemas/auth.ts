import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string({ invalid_type_error: "Please enter a username." })
      .min(1, "Username cannot be empty."), // Validare pentru string gol
    email: z
      .string({ invalid_type_error: "Please enter an email." })
      .min(1, "Email cannot be empty.")
      .email("Please enter a valid email."),
    // Validare pentru string gol
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.") // Lungime minimă
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.") // Cel puțin o literă mare
      .regex(/[0-9]/, "Password must contain at least one number.") // Cel puțin o cifră
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character."
      ), // Cel puțin un simbol special
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please enter a valid password" }),
});

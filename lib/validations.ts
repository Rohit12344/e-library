import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  email: z.email("Invalid email address"),
  universityId: z.coerce
    .number()
    .min(1, "University ID must be a positive number"),
  universityCard: z.string().nonempty("University card number is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

import { z } from "zod";

const emailSchema = z.email("Invalid email address format");

export const patientSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    ),
  email: z
    .string()
    .toLowerCase()
    .max(100, "Email is too long")
    .pipe(emailSchema),
  phone: z
    .string()
    .refine((phone) => /^\+[1-9]\d{1,14}$/.test(phone), "Invalid phone number"),
});

export type PatientFormValues = z.infer<typeof patientSchema>;

import { z } from "zod";

const emailSchema = z.email("Invalid email address format");

export const formSchema = z.object({
  name: z.string().nonempty().min(2, "Full name must be at least 2 characters"),
  email: z.string().toLowerCase().pipe(emailSchema),
  phonenumber: z
    .string()
    .refine((phone) => /^\+[1-9]\d{1,14}$/.test(phone), "Invalid phone number"),
});

export type FormValues = z.infer<typeof formSchema>;

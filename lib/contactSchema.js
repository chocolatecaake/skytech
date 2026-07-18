import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),

  email: z.email("Please enter a valid email"),

  phone: z.string().min(8, "Please enter a valid mobile number"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});

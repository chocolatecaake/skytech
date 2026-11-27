import { z } from "zod";

// Letters in any script (Arabic, Hindi, etc.), spaces, apostrophes, dots, hyphens.
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]*$/u;
// Digits with optional leading +, spaces, dashes, dots or brackets.
const PHONE_RE = /^\+?[\d\s().-]+$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name is too long")
    .regex(NAME_RE, "Name can only contain letters"),

  email: z
    .string()
    .trim()
    .max(254, "Email is too long")
    .email("Please enter a valid email"),

  phone: z
    .string()
    .trim()
    .regex(PHONE_RE, "Please enter a valid mobile number")
    // ponytail: digit-count check only (E.164 is 8–15); add libphonenumber if per-country rules matter
    .refine((v) => {
      const digits = v.replace(/\D/g, "").length;
      return digits >= 8 && digits <= 15;
    }, "Please enter a valid mobile number"),

  company: z.string().trim().max(100, "Company name is too long").optional(),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

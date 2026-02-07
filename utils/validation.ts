import { z } from 'zod';

/**
 * Zod schema for contact form validation
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces'),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-+()]{10,15}$/.test(val),
      'Please enter a valid phone number'
    ),

  email: z
    .string()
    .optional()
    .refine(
      (val) => !val || z.string().email().safeParse(val).success,
      'Please enter a valid email address'
    ),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validate contact form data
 * Returns an object with success status and errors if any
 */
export const validateContactForm = (data: unknown): {
  success: boolean;
  data?: ContactFormData;
  errors?: Record<string, string>;
} => {
  const result = contactFormSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  result.error.issues.forEach((issue) => {
    const path = issue.path[0] as string;
    errors[path] = issue.message;
  });

  return { success: false, errors };
};

/**
 * Phone number formatter for India
 * Formats: 7228885060 -> +91 72288 85060
 */
export const formatIndianPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }

  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
};

/**
 * Sanitize input to prevent XSS
 * Basic sanitization - in production use DOMPurify
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .trim();
};

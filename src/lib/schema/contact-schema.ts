import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .min(6, { message: "Email must be at least 6 characters." })
    .email("Invalid email."),
  message: z
    .string()
    .min(1, { message: "Message must be at least 1 character." })
    .min(6, { message: "Message must be at least 6 characters." }),
});

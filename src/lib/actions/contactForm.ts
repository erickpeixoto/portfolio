"use server";

import { z } from "zod";
import { Resend } from "resend";

import { PortfolioNotificationEmail } from "@/emails/contact-menu-form";
import { ContactSchema } from "@/lib/schema/contact-schema";

type ContactFormInput = z.infer<typeof ContactSchema>;
const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function sendContactFormEmail(data: ContactFormInput) {
  const result = ContactSchema.safeParse(data);
  if (result.success) {
    const { name, email, message } = result.data;

    try {
      const data = await resend.emails.send({
        from: "erick@erickpeixoto.tech",
        to: ["erickepeixoto@gmail.com"],
        subject: "Contact form submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: PortfolioNotificationEmail({ name, email, message }),
      });

      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

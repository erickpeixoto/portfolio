"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactFormEmail } from "@/lib/actions/contactForm";
import { ContactSchema } from "@/lib/schema/contact-schema";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";

type ContactFormInput = z.infer<typeof ContactSchema>;

const contactDetails = [
  { icon: Phone, label: "+55 (62) 98472-9965", href: "tel:+5562984729965" },
  {
    icon: Mail,
    label: "erickepeixoto@gmail.com",
    href: "mailto:erickepeixoto@gmail.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    href: "https://wa.me/5562984729965",
    external: true,
  },
];

export default function ContactForm({ wide = false }: { wide?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({ resolver: zodResolver(ContactSchema) });

  const submitForm: SubmitHandler<ContactFormInput> = async (data) => {
    const response = await sendContactFormEmail(data);
    if (response?.success) {
      toast.success("Message sent successfully");
      reset();
    } else {
      toast.error("Failed to send message");
    }
  };

  return (
    <div
      className={
        wide ? "w-full grid gap-10 md:grid-cols-[5fr_7fr] md:gap-20" : "w-full"
      }
    >
      <div>
        <div className="mb-6">
          <p className="font-mono text-xs text-[--text-muted] uppercase tracking-[0.3em] mb-2">
            Get in touch
          </p>
          <h2
            className={`font-bricolage font-bold dark:text-[--text-primary] text-gray-900 ${wide ? "text-4xl md:text-5xl" : "text-3xl"}`}
          >
            Let&apos;s build something.
          </h2>
          <p
            className={`dark:text-[--text-secondary] text-gray-500 ${wide ? "text-base mt-4 max-w-sm" : "text-sm mt-2"}`}
          >
            Open to senior and lead roles, contract or full time, and to
            consulting on AI products.
          </p>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-2 mb-6">
          {contactDetails.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2.5 text-sm dark:text-[--text-secondary] text-gray-600 hover:text-identity transition-colors"
            >
              <Icon size={14} className="text-[--text-muted]" />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-3">
        <div className={wide ? "grid gap-3 sm:grid-cols-2" : "contents"}>
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50 text-sm dark:text-[--text-primary] text-gray-900 placeholder:text-[--text-muted] focus:outline-none focus:border-identity transition-colors"
            />
            {errors.name && (
              <p className="text-xs text-identity mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50 text-sm dark:text-[--text-primary] text-gray-900 placeholder:text-[--text-muted] focus:outline-none focus:border-identity transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-identity mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <textarea
            placeholder="Message"
            rows={wide ? 6 : 4}
            {...register("message")}
            className="w-full px-4 py-3 rounded-xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50 text-sm dark:text-[--text-primary] text-gray-900 placeholder:text-[--text-muted] focus:outline-none focus:border-identity transition-colors resize-none"
          />
          {errors.message && (
            <p className="text-xs text-identity mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-identity text-white font-semibold text-sm hover:bg-identity/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send size={14} />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

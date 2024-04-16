"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { MdEmail, MdMessage, MdPhone } from "react-icons/md";
import { Separator } from "@/app/components/ui/separator";

import { z } from "zod";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactFormEmail } from "@/lib/actions/contactForm";
import { ContactSchema } from "@/lib/schema/contact-schema";

type ContactFormInput = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(ContactSchema),
  });

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
    <div className="w-full">
      <div className="md:w-[600px] w-full">
        <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
        <Separator className="mb-5 md:w-2/3 w-full" />
        <div className="mb-2 flex items-center">
          <MdPhone className="text-lg mr-2" />
          <a href="tel:+5562984729965" className="hover:underline">
            +55 (62) 98472-9965
          </a>
        </div>
        <div className="mb-4 flex items-center">
          <MdEmail className="text-lg mr-2" />
          <a href="mailto:erickepeixoto@gmail.com" className="hover:underline">
            erickepeixoto@gmail.com
          </a>
        </div>
        <div className="mb-4 flex items-center">
          <MdMessage className="text-lg mr-2" />
          <a
            href="https://wa.me/5562984729965"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Message on WhatsApp
          </a>
        </div>
        <Separator className="mb-5" />
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-4"
        >
          <Input
            type="text"
            label="Name"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-identity">{errors.name.message}</p>
          )}
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-identity">{errors.email.message}</p>
          )}
          <Textarea
            type="message"
            label="Message"
            placeholder="Drop me a message here"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-identity">{errors.message.message}</p>
          )}
          <Button
            variant="shadow"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Send
            {isSubmitting && "ing..."}
          </Button>
        </form>
      </div>
    </div>
  );
}

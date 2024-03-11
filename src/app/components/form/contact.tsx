import { Button, Input, Textarea } from "@nextui-org/react";
import { MdEmail, MdMessage, MdPhone } from "react-icons/md";
import { Separator } from "@/app/components/ui/separator";

export default function ContactForm() {
  return (
    <div className="w-[600px]">
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <Separator className="mb-5" />
      <div className="mb-2 flex items-center">
        <MdPhone className="text-lg mr-2" />
        <a href="tel:+5562984729965" className="hover:underline">
          +55 (62) 98472-9965
        </a>
      </div>
      <div className="mb-4 flex items-center">
        <MdEmail className="text-lg mr-2" />
        <a href="mailto:erick@erickepeixoto.com" className="hover:underline">
          erick@erickepeixoto.com
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
      <form action="" className="flex flex-col gap-4">
        <Input type="email" label="Email" placeholder="Enter your email" />
        <Textarea
          type="message"
          label="Message"
          placeholder="Drop me a message here"
        />
        <Button variant="shadow" color="primary">
          Send
        </Button>
      </form>
    </div>
  );
}

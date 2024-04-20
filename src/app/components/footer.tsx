import ContactForm from "@/app/components/form/contact";
import { Testimonials } from "@/app/components/testimonialsSlider";

export default function Footer() {
  return (
    <footer className="md:flex flex-col items-center justify-center w-full border-t dark:border-gray-800 md:p-20">
      <div className="w-full md:flex flex-row justify-between md:p-0 p-5">
        <Testimonials />
        <ContactForm />
      </div>
    </footer>
  );
}

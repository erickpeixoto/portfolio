import ContactForm from "@/app/components/form/contact";
import { Testimonials } from "@/app/components/testimonialsSlider";

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <Testimonials />

      <div
        id="contact"
        className="border-t border-[--surface-border] px-6 md:px-20 py-20 md:py-28"
      >
        <ContactForm wide />
      </div>

      {/* Copyright */}
      <div className="border-t border-[--surface-border] px-6 md:px-20 py-4 flex items-center justify-center">
        <p className="font-mono text-[11px] text-[--text-muted] uppercase tracking-widest">
          © {new Date().getFullYear()} Erick Eduardo · erickpeixoto.tech
        </p>
      </div>
    </footer>
  );
}

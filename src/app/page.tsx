import Hero from "@/app/components/hero";
import { Skills } from "@/app/components/skills";
import Footer from "@/app/components/footer";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Footer />
    </>
  );
}

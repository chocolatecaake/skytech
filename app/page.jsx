import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="section">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <section className="bg-primary">
        <FAQ />
      </section>
      <CTASection
        img="/assets/construction.webp"
        title="Ready to build something amazing Together ?"
        subtitle="Get a quotation from our Experienced Engineers"
        button={<Button variant="CTA" text="Get In Touch" />}
      />
    </div>
  );
}

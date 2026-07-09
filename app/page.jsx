import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FAQ from "@/components/sections/FAQ";
import { Testimonials } from "@/components/cards/Testimonials";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";
import Title from "@/components/common/Title";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="section">
      <Hero />
      <Stats />
      <About />
      <section>
        <Testimonials />
      </section>
      <section className="bg-primary text-white">
        <Title header="FAQ" align="left" />
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

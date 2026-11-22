import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Companies from "@/components/sections/Companies";
import { Testimonials } from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";
import { seo } from "@/constants/SEO";

export const metadata = seo.home;

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
      <Companies/>
      <CTASection
        img="/assets/construction.webp"
        title="Ready to build something amazing together?"
        subtitle="Get a quotation from our experienced engineers"
        button={<Button variant="CTA" text="Get In Touch" href="/contact" />}
      />
    </div>
  );
}

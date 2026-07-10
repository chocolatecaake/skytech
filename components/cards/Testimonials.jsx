import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star, Quote } from "lucide-react";
import Title from "../common/Title";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";

const clients = ["adnoc", "cnooc", "damac", "petrofac", "taqa"];

const TestimonialCard = ({ name, role, stars, content }) => {
  return (
    <div className="relative w-88 pt-5">
      {/* Floating quote */}
      <Quote
        className="absolute top-0 right-6 z-10 h-15 w-15 fill-accent stroke-accent"
        strokeWidth={1.5}
      />

      <figure
        className={cn(
          "flex h-full flex-col rounded-default border border-accent bg-lightaccent shadow-blue hover:border-primary",
        )}
      >
        <div className="flex h-full flex-col justify-between p-8">
          {/* Stars */}
          <div className="flex gap-1" aria-label={`${stars} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-6 w-6",
                  i < stars
                    ? "fill-yellow stroke-yellow"
                    : "fill-foreground/15 stroke-transparent",
                )}
              />
            ))}
          </div>

          {/* testimonial */}
          <p className="my-6 flex-1 text-foreground leading-relaxed">
            {content}
          </p>

          {/* Name */}
          <div className="flex flex-col">
            <span className="body-large text-accent">{name}</span>
            <span className="small">{role}</span>
          </div>
        </div>
      </figure>
    </div>
  );
};

export function Testimonials() {
  return (
    <section>
      <Title header="Hear from our trusted clients" align="left" size="h2" />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]  mb-[4vw]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="[--duration:30s] bg-background"
        >
          {clients.map((client) => (
            <Image
              key={client}
              src={`/assets/clients/${client}.webp`}
              alt={`${client} logo`}
              width={180}
              height={80}
              className="object-contain mx-8"
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}

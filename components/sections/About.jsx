"use client";

import Title from "@/components/common/Title";
import Image from "next/image";

import { Quote } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="flex flex-col xl:flex-row xl:items-stretch gap-default">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex-1 flex justify-center xl:justify-start"
        >
          <div
            className={cn(
              "absolute",
              "-left-24",
              "top-1/2",
              "-translate-y-1/2",
              "w-1/2",
              "h-[500]",
              "bg-primary",
              "rounded-lg",
              "hidden",
              "xl:block",
            )}
          />

          {/* Accent background */}
          <Image
            src="/assets/ceo.webp"
            alt="SkyTech Team"
            width={600}
            height={800}
            className="relative z-10 h-full w-auto rounded-default object-cover shadow-default border-3 border-primary xl:border-background"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col flex-2"
        >
          <Quote
            className="h-15 w-15 rotate-180 fill-accent stroke-accent"
            strokeWidth={1.5}
          />
          <div className="flex flex-col space-y-8 bg-background">
            <Title header="What we stand for" />
            <p>
              With over two decades of experience, we combine engineering
              expertise, certified processes, and skilled execution to deliver
              reliable results across complex projects in the UAE.
            </p>
            <p>
              With over two decades of experience, we combine engineering
              expertise, certified processes, and skilled execution to deliver
              reliable results across complex projects in the UAE.
            </p>
            <div className="font-sign">- Skytech Team</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

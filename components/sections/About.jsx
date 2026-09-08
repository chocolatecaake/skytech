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
          viewport={{ once: true, amount: 0.3 }}
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
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col flex-2"
        >
          <Quote
            className="h-15 w-15 rotate-180 fill-accent stroke-accent"
            strokeWidth={1.5}
          />
          <div className="flex flex-col space-y-default bg-background">
            <Title header="What we stand for" />
            <p>
              At Skytech General Contracting LLC, our journey has been built on
              a simple principle: deliver engineering excellence without
              compromise. From our roots in GRE/GRP piping and MEP contracting,
              we have grown into a trusted partner for some of the region's most
              demanding oil, gas, and infrastructure projects.
            </p>
            <p>
              Every pipe we lay and every system we install carries our
              commitment to quality, safety, and long-term reliability. As we
              look ahead, we remain focused on innovation, sustainability, and
              building lasting relationships with the clients and communities we
              serve.
            </p>
            <div className="font-sign">- Skytech Team</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

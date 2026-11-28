"use client";

import Title from "@/components/common/Title";
import { Quote } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

const About = () => {
  return (
    <section className="overflow-x-hidden">
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
            Skytech General Contracting LLC started out in GRE/GRP piping and
            MEP contracting. Today our crews work on some of the region's most
            demanding oil, gas and infrastructure projects.
            We want every pipe we lay to be installed safely and to last, so
            our clients never have to come back to it. As we grow, we want to
            keep sustainability, safety and long-term client relationships part
            of how we work.
          </p>
          <div className="font-sign">- K.K. Haris, CEO</div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

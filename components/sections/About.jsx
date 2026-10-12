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
            At Skytech General Contracting LLC, our journey has been built on a
            simple principle: deliver engineering excellence without compromise.
            From our roots in GRE/GRP piping and MEP contracting, we have grown
            into a trusted partner for some of the region's most demanding oil,
            gas, and infrastructure projects.
          </p>
          <p>
            Every pipe we lay and every system we install carries our commitment
            to quality, safety, and long-term reliability. As we look ahead, we
            remain focused on innovation, sustainability, and building lasting
            relationships with the clients and communities we serve.
          </p>
          <div className="font-sign">- CEO, Skytech</div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

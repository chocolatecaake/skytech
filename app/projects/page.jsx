"use client";

import Title from "@/components/common/Title";
import ProjectCard from "@/components/cards/ProjectCard";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";

import { projects } from "@/constants/projects";
import { cardVariants } from "@/constants/variants";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <section>
        <Title pretitle="Our Projects" header="see our work" align="center" />
        <span className="bg-background block max-w-5xl mx-auto body-large text-left md:text-center">
          Our extensive experience and reputation for quality, reliability and
          integrity embodies our commitment to excellence. We strive to build
          strong relationships with our clients and depend not only on our
          in-house capabilities but also our well-established network of
          affiliated partners, business associates, customers and suppliers.
        </span>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={idx}
              >
                <ProjectCard
                  key={idx}
                  Progress={project.progress}
                  Img={project.img}
                  title={project.title}
                  loc={project.loc}
                  Client={project.Client}
                  Value={project.Value}
                  ProjType={project.ProjType}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        img="/assets/construction2.webp"
        title="start a project with us"
        subtitle="Get a quotation from our Experienced Engineers"
        button={<Button variant="CTA" text="Get a Quote" href="/contact" />}
      />
    </>
  );
};

export default page;

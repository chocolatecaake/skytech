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
        <div>
          <div className="grid grid-cols-1 h-full gap-8 sm:grid-cols-2 xl:grid-cols-3">
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
        button={<Button variant="CTA" text="Get a Quote" />}
      />
    </>
  );
};

export default page;

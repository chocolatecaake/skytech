"use client";

import Title from "../common/Title";
import Button from "../common/Button";
import ProjectCard from "../cards/ProjectCard";

import { motion } from "framer-motion";
import { cardVariants } from "@/constants/variants";
import { projects } from "@/constants/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <Title pretitle="Our Projects" header="See our work" align="center" />

      <div className="flex flex-col gap-default">
        <div className="flex justify-end">
          <Button text="See All Projects" variant="primary" href="/projects" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-start">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <ProjectCard
                key={index}
                progress={project.progress}
                img={project.img}
                title={project.title}
                loc={project.loc}
                client={project.client}
                contractor={project.contractor}
                projType={project.projType}
                pipeType={project.pipeType}
                inchDia={project.inchDia}
                scope={project.scope}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

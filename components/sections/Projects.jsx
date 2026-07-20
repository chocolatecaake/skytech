"use client";

import Title from "../common/Title";
import Button from "../common/Button";
import ProjectCard from "../cards/ProjectCard";

import { motion } from "framer-motion";
import { cardVariants } from "@/constants/variants";
import { projects } from "@/constants/projects";

const Projects = () => {
  return (
    <section>
      <Title pretitle="Our Projects" header="See our work" align="center" />

      <div className="flex flex-col gap-10">
        <div className="flex justify-end">
          <Button text="See All Projects" variant="primary" />
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 items-start">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
            >
              <ProjectCard
                key={index}
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
  );
};

export default Projects;

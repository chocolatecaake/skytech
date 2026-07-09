"use client";

import ServiceCard from "../cards/ServiceCard";
import Title from "../common/Title";
import { services } from "@/constants/services";
import { motion } from "framer-motion";

const Services = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-primary">
      <Title
        pretitle="our services"
        header="Services we provide"
        align="right"
        variant="light"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-9">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
          >
            <ServiceCard
              idx={String(index + 1).padStart(2, "0")}
              title={service.title}
              desc={service.desc}
              icon={<service.icon className="w-16 h-16" />}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

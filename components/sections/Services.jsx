"use client";

import ServiceCard from "../cards/ServiceCard";
import Title from "../common/Title";
import Link from "next/link";

import { services } from "@/constants/services";
import { motion } from "framer-motion";
import { cardVariants } from "@/constants/variants";

const Services = () => {
  return (
    <section className="bg-primary">
      <Title
        pretitle="our services"
        header="Services we provide"
        align="right"
        variant="light"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
          >
            <Link href="/services">
              <ServiceCard
                idx={String(index + 1).padStart(2, "0")}
                title={service.title}
                desc={service.desc}
                icon={<service.icon className="w-16 h-16" />}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

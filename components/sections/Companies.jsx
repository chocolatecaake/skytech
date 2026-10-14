"use client";

import Title from "@/components/common/Title";
import { Quote } from "lucide-react";
import { cardVariants } from "@/constants/variants";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

const Companies = () => {
  const companies = [
    {
      name: "Fiber Glass",
      url: "https://www.mfggulf.com/",
      logo: "/assets/companies/mfGulf-logo.webp",
      color: "bg-white",
    },
    {
      name: "Middle East Pipes",
      url: "https://middleeastpipes.com/",
      logo: "/assets/companies/MiddleEastPipeslogo.webp",
      color: "bg-white",
    },
  ];

  return (
<section>
  <Title header="More From Us" align="left" size="h2" />

  {/* Company Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] lg:w-[70%] gap-content mx-auto justify-items-center">
  {companies.map((company, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="w-full"
    >
      <a
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full aspect-[2/1]"
      >
        <div
          className={`
            ${company.color}
            w-full h-full
            border border-tertiary/10
            rounded-default
            shadow-default
            flex items-center justify-center
            p-5 sm:p-6
            transition-all duration-300
            group-hover:-translate-y-2
            group-hover:shadow-lg
          `}
        >
          {/* Logo */}
          <div className="flex w-full h-full items-center justify-center">
            <Image
              src={company.logo}
              width={200}
              height={60}
              alt={`${company.name} logo`}
              className="max-w-[85%] max-h-[70%] w-auto h-auto object-contain"
            />
          </div>
        </div>
      </a>
    </motion.div>
  ))}
</div>
</section>
  );
};

export default Companies;

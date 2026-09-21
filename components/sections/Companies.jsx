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
      color: "#ffffff",
    },
    {
      name: "Fiber Glass",
      url: "https://www.mfggulf.com/",
      logo: "/assets/logo.webp",
      color: "bg-primary",
    },
    {
      name: "Fiber Glass",
      url: "https://www.mfggulf.com/",
      logo: "/assets/logo.webp",
      color: "bg-primary",
    },
    {
      name: "Fiber Glass",
      url: "https://www.mfggulf.com/",
      logo: "/assets/logo.webp",
      color: "bg-primary",
    },
  ];

  return (
   <section>
      <Title header="More From Us" align="left" size="h2" />
        {/* Company Cards */}
        <div className="flex justify-center gap-content">
          {companies.map((company, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square"
            >
            <div
            style={{ backgroundColor: company.color }}
            className=" bg-primary border border-tertiary/10 rounded-default shadow-default flex flex-row items-center justify-center gap-4 p-content transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
            
            {/* Logo */}
            <div className="relative w-[200px] h-[80px] flex items-center justify-center">
          <Image
            src={company.logo}
            width={200}
            height={60}
            alt="skytech logo"
            loading="eager"
            className="w-[200px] h-auto"
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

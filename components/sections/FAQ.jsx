"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Title from "../common/Title";
import { faqItems } from "@/constants/faq";

const faqVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3,
    },
  }),
};

const FAQItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-1 rounded-default cursor-pointer hover:border-accent ${isOpen ? "border-accent shadow-blue" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      <div className="glass">
        <div className="flex p-5 items-center justify-between gap-2">
          <span className={`body-large ${isOpen ? "text-accent" : ""}`}>
            {title}
          </span>

          <button className={`cursor-pointer ${isOpen ? "text-accent" : ""}`}>
            {isOpen ? (
              <FaChevronUp className="h-4 w-4" />
            ) : (
              <FaChevronDown className="h-4 w-4 hover:text-accent" />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 p-5 pt-0" : "max-h-0 opacity-0 p-0"
          }`}
        >
          <p className="flex items-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <Title header="FAQ" align="left" variant="light" />
      <div className="container mx-auto">
        <ul className="w-full flex flex-col gap-default">
          {faqItems.map((item, index) => (
            <motion.li
              key={index}
              variants={faqVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <FAQItem title={item.title} description={item.description} />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FAQ;

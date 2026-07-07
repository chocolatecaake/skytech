"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

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
    <div className="glass">
      <div className="flex p-5 items-center justify-between">
        <h4 className={`body-large ${isOpen ? "text-yellow" : ""}`}>{title}</h4>

        <button
          className={`bg-accent p-2 rounded-default cursor-pointer hover:bg-yellow ${
            isOpen ? "bg-yellow" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <RiSubtractFill className="text-primary" />
          ) : (
            <RiAddFill className="text-primary" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[200px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <p className="flex items-center">{description}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="container mx-auto">
      <ul className="w-full flex flex-col space-y-6">
        {faqItems.map((item, index) => (
          <motion.li
            key={index}
            variants={faqVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={index}
          >
            <FAQItem title={item.title} description={item.description} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

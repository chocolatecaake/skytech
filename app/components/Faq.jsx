"use client";

import { motion } from "framer-motion";
import FaqItem from "./FaqItem";

// import { fadeIn } from "@/public/assets/assets/variants";

const faqItems = [
  {
    title: "Question 1 is here",
    description: "Answer is writtten here",
  },
  {
    title: "Question 3 is here",
    description: "Answer is writtten here",
  },

  {
    title: "Question 4 is here",
    description: "Answer is writtten here",
  },

  {
    title: "Question 5 is here",
    description: "Answer is writtten here",
  },

  {
    title: "Question 5 is here",
    description: "Answer is writtten here",
  },
];

const faqVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      ></motion.div>
      <ul className="w-full flex flex-col space-y-6">
        {faqItems.map((item, index) => {
          return (
            <motion.li
              key={index}
              variants={faqVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
            >
              <FaqItem title={item.title} description={item.description} />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;

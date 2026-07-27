"use client";

import Title from "@/components/common/Title";
import DetailCard from "@/components/cards/DetailCard";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";

import { services } from "@/constants/services";
import { cardVariants } from "@/constants/variants";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <section>
        <Title
          pretitle="Our Services"
          header="see what we can do for you"
          align="center"
        />
        <span className="bg-background block max-w-5xl mx-auto body-large text-center">
          Skytech is committed to delivering outstanding service solutions of
          the highest international quality standards and strong professional
          values.
        </span>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={idx}
              >
                <DetailCard
                  key={idx}
                  id={String(idx + 1).padStart(2, "0")}
                  img={service.img}
                  title={service.title}
                  desc={service.details}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        img="/assets/construction.webp"
        title="Need help choosing a Service ?"
        subtitle="Talk to our experienced consultants to find the right solution for your project"
        button={<Button variant="CTA" text="Contact Us" href="/contact" />}
      />
    </>
  );
};

export default page;

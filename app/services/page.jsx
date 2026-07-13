"use client";

import Title from "@/components/common/Title";
import ServiceDetailCard from "@/components/cards/ServiceDetailCard";
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
          pretitle="our services"
          header="see what we can do for you"
          align="center"
        />
        <div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={idx}
              >
                <ServiceDetailCard
                  key={idx}
                  id={String(idx + 1).padStart(2, "0")}
                  Img={service.img}
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
        subtitle="Get a quotation from our Experienced Engineers"
        button={<Button variant="CTA" text="Get A quote" />}
      />
    </>
  );
};

export default page;

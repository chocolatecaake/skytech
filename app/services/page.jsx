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
        <span className="body-large text-center">
          SKYTECH aims, to achieve customer satisfaction through superior
          services and commitment, without any compromise on international
          quality standards
        </span>
        <div>
          <div className="grid grid-cols-1 h-full gap-7 sm:grid-cols-2 xl:grid-cols-3">
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
        button={<Button variant="CTA" text="Get a Quote" />}
      />
    </>
  );
};

export default page;

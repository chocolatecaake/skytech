"use client";

import Title from "@/components/common/Title";
import CTASection from "@/components/common/CTASection";
import Image from "next/image";
import Button from "@/components/common/Button";
import CertificationCard from "@/components/cards/CertificationCard";

import Certificate from "@/public/assets/certifications/Certificate.webp";
import iso from "@/public/assets/about/iso.webp";
import adnoc from "@/public/assets/about/adnoc.webp";
import icv from "@/public/assets/about/icv.webp";

import { cardVariants } from "@/constants/variants";
import { motion } from "framer-motion";

const page = () => {
  const qualityCerts = [
    {
      logo: "/assets/certifications/icv.webp",
      title: "ICV 9000: Details",
      subtitle: "quality management system",
      desc: "Certification provided by International Organisation for Standardisation for SkyTechs Exceptional Quality Processes",
    },
    {
      logo: "/assets/certifications/iso.webp",
      title: "ISO 9000: Details",
      subtitle: "quality management system",
      desc: "Certification provided by International Organisation for Standardisation for SkyTechs Exceptional Quality Processes",
    },
    {
      logo: "/assets/certifications/adnoc.webp",
      title: "Adnoc: Details",
      subtitle: "quality management system",
      desc: "Certification provided by International Organisation  for Standardisation for SkyTechs Exceptional Quality Processes",
    },
  ];

  return (
    <>
      <section>
        <Title
          pretitle="Our Certifications"
          header="see our certifications"
          align="center"
        />
        <span className="body-large bg-background text-center">
          SKYTECH aims, to achieve customer satisfaction through superior
          services and commitment, without any compromise on international
          quality standards
        </span>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-default">
            {qualityCerts.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
                className="card bg-white items-center justify-center border-1 border-tertiary/10"
              >
                <div className="relative w-32 h-32">
                  <Image
                    src={cert.logo}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* <Button text="ICV 9000: Details" variant="badge" /> */}
                <span className="body-large text-secondary">{cert.title}</span>
                <span className="text-center">{cert.desc} </span>
              </motion.div>
            ))}
          </div>
        </div>

        <Title header="Verification Documents" align="left" size="h2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-default">
          <CertificationCard
            badge={iso}
            title="ISO Certificate: ISO 9000"
            img={Certificate}
            CerficationNo="000001"
            ObtainOn="9 June 2026"
            ValidUntil="9 June 2026"
          />
          <CertificationCard
            badge={adnoc}
            title="ISO Certificate: ISO 9000"
            img={Certificate}
            CerficationNo="000001"
            ObtainOn="9 June 2026"
            ValidUntil="9 June 2026"
          />
          <CertificationCard
            badge={icv}
            title="ISO Certificate: ISO 9000"
            img={Certificate}
            CerficationNo="000001"
            ObtainOn="9 June 2026"
            ValidUntil="9 June 2026"
          />
        </div>
      </section>
      <CTASection
        img="/assets/construction.webp"
        title="Want to learn more about skytech ?"
        subtitle="Get a quotation from our Experienced Engineers"
        button={<Button variant="CTA" text="Download our Brochure" />}
      />
    </>
  );
};

export default page;

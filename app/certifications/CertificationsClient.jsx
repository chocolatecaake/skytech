"use client";

import Title from "@/components/common/Title";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";
import CertificationCard from "@/components/cards/CertificationCard";
import Image from "next/image";

import { verificationsDocs } from "@/constants/certifications";
import { cardVariants } from "@/constants/variants";
import { motion } from "framer-motion";

const page = () => {
  const qualityCerts = [
    {
      logo: "/assets/certifications/icv.webp",
      title: "ICV Certified",
      // subtitle: "quality management system",
      // desc: "Certification provided by International Organisation for Standardisation for Skytechs Exceptional Quality Processes",
    },
    {
      logo: "/assets/certifications/iso.webp",
      title: "ISO Certified",
      // subtitle: "quality management system",
      // desc: "Certification provided by International Organisation for Standardisation for Skytechs Exceptional Quality Processes",
    },
    {
      logo: "/assets/certifications/adnoc.webp",
      title: "ADNOC-Approved Contractor",
      // subtitle: "quality management system",
      // desc: "Skytech is an ADNOC Approved Contractor",
    },
  ];

  return (
    <>
      <section>
        <Title
          pretitle="Our Qualifications"
          header="ADNOC, ICV & ISO Certifications"
          align="center"
          as="h1"
        />
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="bg-background block max-w-5xl mx-auto body-large text-center">
            We are ADNOC approved, ICV certified and certified to ISO 9001, ISO
            14001 and ISO 45001. Each certificate is listed below with its
            number and expiry date.
          </span>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {qualityCerts.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="card bg-white items-center justify-center border-1 border-tertiary/10"
            >
              <div className="relative w-32 h-32">
                <Image
                  src={cert.logo}
                  alt={cert.title}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <p className="    flex items-center gap-2 w-fit h-fit px-5 py-2.5 rounded-default font-semibold transition-all duration-300 shadow-default bg-lightaccent text-darkblue shadow-none cursor-default">
                {cert.title}
              </p>

              <span className="body-large text-secondary"></span>
            </motion.div>
          ))}
        </div>
        <Title header="Verification Documents" align="left" size="h2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
          {verificationsDocs.map((doc, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              <CertificationCard
                key={idx}
                badge={doc.icon}
                title={doc.title}
                img={doc.src}
                CerficationNo={doc.certNo}
                ObtainOn={doc.issuedDate}
                ValidUntil={doc.expiryDate}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <CTASection
        img="/assets/construction.webp"
        title="Want to learn more about Skytech?"
        subtitle="Get a quotation from our experienced engineers"
        button={
          <Button
            variant="CTA"
            text="Download our brochure"
            href="/assets/Skytech%20Company%20Brochure.pdf"
            download="Skytech Company Brochure.pdf"
          />
        }
      />
    </>
  );
};

export default page;

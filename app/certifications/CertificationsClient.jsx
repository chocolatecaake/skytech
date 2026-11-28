"use client";

import Title from "@/components/common/Title";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

import { cardVariants } from "@/constants/variants";
import { qualityCerts } from "@/constants/certifications";
import { motion } from "framer-motion";

const page = () => {
  const [openCert, setOpenCert] = useState(null);
  const [slide, setSlide] = useState(0);

  return (
    <>
      <section>
        <Title
          pretitle="Our Qualifications"
          header="
          Certified Standards & Credentials"
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
            14001 and ISO 45001. Click a certification below to view the
            certificate.
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
            >
              <button
                type="button"
                onClick={() => {
                  setSlide(0);
                  setOpenCert(cert);
                }}
                className="card bg-white items-center justify-center border-1 border-tertiary/10 h-full w-full group cursor-pointer"
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
                <span className="flex items-center gap-2 w-fit h-fit px-5 py-2.5 rounded-default font-semibold transition-all duration-300 shadow-default bg-primary text-white group-hover:bg-accent">
                  {cert.title}
                </span>
                <span className="text-sm text-tertiary">View certificate</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {openCert &&
        createPortal(
          <div
            data-modal
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/80"
              onClick={() => setOpenCert(null)}
            />
            <div className="relative h-[90vh] w-[90vw] max-w-5xl">
              <button
                type="button"
                onClick={() => setOpenCert(null)}
                aria-label="Close"
                className="absolute -top-2 -right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg cursor-pointer hover:bg-accent"
              >
                ✕
              </button>
              {/* one full-height snap slide per image; multi-cert types (ISO) scroll inside the modal */}
              <div
                onScroll={(e) =>
                  setSlide(
                    Math.round(
                      e.currentTarget.scrollTop / e.currentTarget.clientHeight,
                    ),
                  )
                }
                className="h-full w-full overflow-y-auto snap-y snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {openCert.images.map((src) => (
                  <div
                    key={src}
                    className="h-full snap-start flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={openCert.title}
                      className="max-h-full max-w-full w-auto object-contain rounded-default shadow-lg"
                    />
                  </div>
                ))}
              </div>
              {openCert.images.length > 1 && (
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white pointer-events-none">
                  {slide + 1} / {openCert.images.length} scroll down for more
                </span>
              )}
            </div>
          </div>,
          document.body,
        )}
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

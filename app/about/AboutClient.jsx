"use client";
import Title from "@/components/common/Title";
import About from "@/public/assets/About.webp";
import icv from "@/public/assets/about/icv.webp";
import adnoc from "@/public/assets/about/adnoc.webp";
import iso from "@/public/assets/about/iso.webp";
import Button from "@/components/common/Button";
import Image from "next/image";
import Statistics from "./Statistics.jsx";
import Link from "next/link";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

const AboutClient = () => {
  return (
    <>
      <section className="overflow-x-hidden">
        <div className="flex flex-col xl:flex-row items-center xl:gap-20 gap-5">
          {/* Left Content */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-2"
          >
            <div className="flex flex-col space-y-default">
              <Title
                pretitle="About Us"
                header="ADNOC-Approved Piping Contractor in Abu Dhabi"
                align="left"
                as="h1"
              />

              <p>
                Skytech General Contracting LLC is an Abu Dhabi-based piping
                contractor delivering cost-effective, professional services for
                over 15 years, with clients including ADNOC, DAMAC and Petrofac.
                As an ADNOC-approved, ICV-certified and ISO-certified team, we
                specialize in GRE and GRP pipe installation, HDPE piping
                systems, and in-situ GRP lamination and lining for new and
                rehabilitation projects. With 40+ projects completed across the
                UAE, we deliver proven expertise at competitive prices.
              </p>

              <p>
                We believe that through efficient, timely and economically
                viable execution, and commitment to international quality
                standards, we will be able to provide stellar service and
                achieve customer satisfaction.
              </p>

              <Link href="/certifications">
                <div className="flex items-center gap-small">
                  <div className="relative w-12 h-12">
                    <Image
                      src={icv}
                      alt="icv logo"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>

                  <div className="relative w-12 h-12">
                    <Image
                      src={iso}
                      alt="iso logo"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>

                  <div className="relative w-12 h-12">
                    <Image
                      src={adnoc}
                      alt="adnoc logo"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>

              <Button
                text="See Our Projects"
                variant="primary"
                href="/projects"
              />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-end"
          >
            <Image
              src={About}
              alt="About Us"
              className="w-full aspect-[3/4] object-cover rounded-default shadow-default"
            />
          </motion.div>
        </div>
      </section>
      <Statistics />
      <div className="px-4 sm:px-8 xl:px-section py-10 overflow-hidden">
        <div className="relative flex flex-col lg:flex-row justify-center items-stretch gap-0 xl:gap-content">
          {/* Vision */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full max-w-xl py-4 sm:py-10"
          >
            <FaQuoteLeft className="absolute text-accent h-14 w-14 sm:h-20 sm:w-20 -top-2 left-2 sm:left-5" />

            <div className="flex flex-col h-full bg-primary text-center p-6 sm:p-10 lg:p-12 rounded-default space-y-small">
              <span className="h4 text-yellow">Our Vision</span>

              <span className="text-left text-white">
                To be a leading provider of piping and MEP contarcting service
                in the UAE, Know for our commitment to quality safety and
                sustainability, and to be recognized as a trusted partner by our
                clients, employees, and the communities we serve.
              </span>
            </div>
          </motion.div>

          {/* Mission */}

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full max-w-xl py-4 sm:py-10"
          >
            <FaQuoteRight className="absolute text-accent h-14 w-14 sm:h-20 sm:w-20 -bottom-2 right-2 sm:right-5" />

            <div className="flex flex-col h-full bg-primary text-center p-6 sm:p-10 lg:p-12 rounded-default space-y-small">
              <span className="h4 text-yellow-500">Our Mission</span>

              <span className="text-left text-white">
                To give our clients GRP, thermoplastic and steel piping systems
                they never have to worry about: installed safely, right the
                first time, and built to ADNOC and ISO standards.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutClient;

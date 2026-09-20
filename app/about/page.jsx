"use client";

import Title from "@/components/common/Title";
import About from "@/public/assets/About.webp";
import icv from "@/public/assets/about/icv.webp";
import adnoc from "@/public/assets/about/adnoc.webp";
import iso from "@/public/assets/about/iso.webp";
import Button from "@/components/common/Button";
import Image from "next/image";
import Statistics from "./Statistics.jsx";
import Link from "next/link.js";

import { MdVerified } from "react-icons/md";
import { RiUser2Fill } from "react-icons/ri";
import { RiTreeFill } from "react-icons/ri";
import { MdAddLocationAlt } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

const page = () => {
  const skytechValues = [
    {
      icon: <MdVerified className="h-8 w-8 text-secondary" />,
      text: "Highest Quality of international standards",
    },
    {
      icon: <RiUser2Fill className="h-8 w-8 text-secondary" />,
      text: "Certified engineers and skilled technicians",
    },
    {
      icon: <RiTreeFill className="h-8 w-8 text-secondary" />,
      text: "Focus on Sustainability, health and safety",
    },
    {
      icon: <MdAddLocationAlt className="h-8 w-8 text-secondary" />,
      text: "Proven track record of success across the UAE",
    },
  ];

  return (
    <>
      <section className="overflow-x-hidden">
        <div className="flex flex-col xl:flex-row items-center xl:gap-none gap-5">
          {/* Left Content */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <div className="flex flex-col space-y-default bg-background">
              <Title
                pretitle="About Us"
                header="Serving Customers Through Innovative Excellence"
                align="left"
              />

              <p>
                SKYTECH is an innovative company providing cutting edge, cost
                effective solutions in the supply and installation of Fiberglass,
                Thermoplastic, CS, and SS Systems.
              </p>

              <p>
                We believe that through efficient, timely and economically viable
                execution, and commitment to international quality standards, we
                will be able to provide stellar service and achieve customer
                satisfaction.
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
              className="w-auto h-auto max-h-[450px] object-cover rounded-default shadow-default"
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
                To be the region's most trusted GRE/GRP piping and MEP
                contracting partner, recognized for engineering excellence,
                reliability, and innovation in every project we deliver.
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
                To deliver safe, high-quality, and cost-effective piping and MEP
                solutions through skilled expertise, rigorous quality standards,
                and a genuine commitment to our clients' success — while
                upholding the highest standards of safety and environmental
                responsibility.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;

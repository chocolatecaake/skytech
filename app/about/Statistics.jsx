"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import construction from "@/public/assets/construction.webp";
import CountUp from "react-countup";
import { Fragment } from "react";
import { MdVerified } from "react-icons/md";
import { RiUser2Fill } from "react-icons/ri";
import { RiTreeFill } from "react-icons/ri";
import { MdAddLocationAlt } from "react-icons/md";

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

const Statistics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <Image src={construction} alt="about" fill className="object-cover" />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      <div ref={ref} className="container relative mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-6 lg:gap-10 text-white">
          {skytechValues.map((stat, index) => (
            <div key={index} className="contents">
              {/* Stat */}
              <div className="flex flex-col items-center flex-1 space-y-small">
                <div className="bg-red-100 p-2 rounded-full">{stat.icon}</div>

                <div className="body-large capitalize text-center leading-tight">
                  {stat.text}
                </div>
              </div>

              {/* Separator */}
              {index !== skytechValues.length - 1 && (
                <div className="md:block w-2 h-2 rounded-full bg-yellow flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

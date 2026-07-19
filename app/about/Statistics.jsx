"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import construction from "@/public/assets/construction.webp";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 200,
    endcountText: "+",
    text: "Project Completion",
    desc: "SKYTECH is an innovative company providing cutting edge, cost effective solutions in the supply and installation of Fiberglass.",
  },
  {
    endCountNum: 20,
    endcountText: "+",
    text: "Years of Experience",
    desc: "SKYTECH is an innovative company providing cutting edge, cost effective solutions in the supply and installation of Fiberglass.",
  },
  {
    endCountNum: 150,
    endcountText: "+",
    text: "Number of Employees",
    desc: "SKYTECH is an innovative company providing cutting edge, cost effective solutions in the supply and installation of Fiberglass.",
  },
];

const Statistics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <section className="relative overflow-hidden">
        {/* Background Image */}
      <Image
        src={construction}
        alt="about"
        fill
        className="object-cover"
      />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      <div ref={ref} className="container mx-auto">
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          {statsData.map((stat, index) => (
            <div key={index} className="contents">
              {/* Stat */}
              <div className="flex flex-col items-center flex-1 space-y-4">
                <div className="hero text-accent">
                  {inView && (
                    <CountUp
                      start={1}
                      end={stat.endCountNum}
                      delay={0.5}
                      duration={3}
                      className="hero"
                    />
                  )}
                  {stat.endcountText}
                </div>

                {/* Line */}
                <div className="h-1 w-100 bg-white" />
                <div className="h3 text-center !font-bold leading-tight text-center">
                  {stat.text}
                </div>
                <div className="body-large text-center  leading-tight text-center">
                  {stat.desc}
                </div>
              </div>

              {/* Separator */}
              {index !== statsData.length - 1 && (
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

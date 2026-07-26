"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import construction from "@/public/assets/construction.webp";
import CountUp from "react-countup";
import { Fragment } from "react";

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
      <Image src={construction} alt="about" fill className="object-cover" />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      <div ref={ref} className="container relative mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-6 lg:gap-10 text-white">
          {statsData.map((stat, index) => (
            <Fragment key={index}>
              <div className="flex flex-1 flex-col items-center text-center space-y-4">
                <div className="h1 text-accent">
                  {inView && (
                    <CountUp
                      start={1}
                      end={stat.endCountNum}
                      delay={0.5}
                      duration={3}
                      className="h1"
                    />
                  )}
                  {stat.endcountText}
                </div>

                {/* Line */}
                <div className="h-1 w-full max-w-[200px] bg-white" />

                <div className="h4 !font-bold">{stat.text}</div>

                <p className="body-large max-w-sm">{stat.desc}</p>
              </div>

              {index < statsData.length - 1 && (
                <div className="hidden md:block w-2 h-2 rounded-full bg-yellow flex-shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

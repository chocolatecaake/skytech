"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 20,
    endcountText: "+",
    text: "Years Experience",
  },
  {
    endCountNum: 10,
    endcountText: "+",
    text: "Successful Projects",
  },
  {
    endCountNum: 3,
    endcountText: "+",
    text: "Quality Certifications",
  },
  {
    endCountNum: 99,
    endcountText: "%",
    text: "Customer Satisfaction",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <section className="bg-primary">
      <div ref={ref} className="container mx-auto">
        <div
          className="
          flex 
          flex-col 
          md:flex-row 
          justify-between 
          items-center 
          gap-8
          text-white
        "
        >
          {statsData.map((stat, index) => (
            <div key={index} className="contents">
              {/* Stat */}
              <div className="flex flex-col items-center flex-1 space-y-4">
                <div className="h3 text-accent">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.endCountNum}
                      delay={0.5}
                      duration={3}
                      className="h3"
                    />
                  )}
                  {stat.endcountText}
                </div>

                <div className="h4 text-center font-medium! leading-tight">
                  {stat.text}
                </div>
              </div>

              {/* Separator */}
              {index !== statsData.length - 1 && (
                <div
                  className="
                  md:block
                  w-2
                  h-2
                  rounded-full
                  bg-yellow
                  flex-shrink-0
                "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

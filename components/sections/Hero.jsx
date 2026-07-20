"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/constants/variants";

import Button from "@/components/common/Button";

import { cn } from "@/lib/utils";

const heroImages = [
  "/assets/hero.webp",
  "/assets/construction.webp",
  "/assets/construction2.webp",
];

const certImages = [
  "/assets/iso.webp",
  "/assets/icv.webp",
  "/assets/adnoc.webp",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen -mt-20 overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          animate={{
            opacity: currentImage === index ? 1 : 0,
          }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col">
        {/* Center Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-5xl text-white space-y-8">
            <div className="space-y-6">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.0 }}
                className="hero mt-18"
              >
                Engineering Reliable Pipeline Infrastructure
                <span className="hero text-yellow"> Across The UAE</span>
              </motion.div>

              <motion.h4
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.0 }}
                className="max-w-3xl"
              >
                Delivering High-Performance Infrastructure Projects Across The
                UAE For Over 20 Years.
              </motion.h4>
            </div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.0 }}
              className="flex gap-4"
            >
              <Button text="See Our Projects" variant="tertiary" />
              <Button text="Get In Touch" variant="secondary" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Certifications */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.0 }}
          className="flex gap-4"
        >
          {certImages.map((certImage, index) => (
            <div
              key={index}
              className="glass p-4 flex items-center justify-center backdrop-blur-lg"
            >
              <Image
                src={certImage}
                alt="Certification"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination */}
      <div
        className={cn(
          "absolute",
          "bottom-6",
          "left-1/2",
          "-translate-x-1/2",
          "z-20",
          "flex",
          "flex-row",
          "gap-4",
          "hidden",
          "lg:flex",
          "lg:bottom-auto",
          "lg:left-auto",
          "lg:right-10",
          "lg:top-1/2",
          "lg:translate-x-0",
          "lg:-translate-y-1/2",
          "lg:flex-col",
        )}
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full border-2 transition-all duration-500 cursor-pointer ${
              currentImage === index
                ? "bg-yellow border-yellow scale-125"
                : "border-yellow"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

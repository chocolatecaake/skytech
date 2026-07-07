"use client";
import Image from "next/image";
import NavMobile from "./NavMobile";
import Button from "./Button";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "SERVICES",
    path: "/services",
  },
  {
    name: "PROJECTS",
    path: "/projects",
  },
  {
    name: "BLOGS",
    path: "/blogs",
  },
  {
    name: "CERTIFICATIONS",
    path: "/certifications",
  },
  {
    name: "GALLERY",
    path: "/gallery",
  },
  {
    name: "Tester",
    path: "/tester",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full sticky top-0 p-2 text-white transition-all duration-200 z-1
         ${
           scrolled
             ? "bg-primary shadow-lg border-white "
             : "bg-transparent backdrop-blur-md"
         }`}
    >
      <div className="min-h-[64px] flex justify-between items-center container mx-auto px-4 xl:px-0">
        <Link href="/">
          <Image
            src="/assets/logo.webp"
            width={156}
            height={40}
            alt="skytech logo"
          />
        </Link>

        <nav
          className={`hidden xl:block xl:flex items-center gap-12
           ${scrolled ? "bg-transparent" : "bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white p-4"}`}
        >
          <ul className="flex gap-12">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white font-semibold hover:text-accent"
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden xl:block">
          <Button text="Request a quote" variant="CTA" />
        </div>
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

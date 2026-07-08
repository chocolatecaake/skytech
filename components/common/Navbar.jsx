"use client";
import Image from "next/image";
import NavMobile from "./NavMobile";
import Button from "./Button";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/constants/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full sticky top-0 p-2 text-white uppercase transition-all duration-200 z-50
        ${
          isHomePage
            ? scrolled
              ? "bg-primary shadow-lg border-white"
              : "bg-transparent backdrop-blur-md"
            : "bg-primary shadow-lg"
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
           ${isHomePage ? (scrolled ? "bg-transparent" : "backdrop-blur-md rounded-xl shadow-lg border border-white p-4") : "bg-transparent"}`}
        >
          <ul className="flex gap-12">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`font-semibold transition-colors ${
                    pathname === link.path
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
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

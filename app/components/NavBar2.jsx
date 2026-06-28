"use client";
import Link from 'next/link';
import Button from './Button';
import {useState, useEffect} from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full p-2 text-white transition-all duration-200
      ${scrolled
        ? "bg-[#0b1c2c] shadow-lg"
        : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center  w-full">
        <Link href="/" className="text-xl font-bold">
          LOGO
        </Link>
        <div className={`flex space-x-8 p-4
            ${scrolled ? "bg-transparent" : "bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white"}`}>
          <Link href="/" className=" flex hover:text-accent font-bold active:text-accent">
            ABOUT
          </Link>
          <Link href="/" className="hover:text-accent font-bold active:text-accent">
            SERVICES
          </Link>
          <Link href="/" className="hover:text-accent font-bold active:text-accent">
            PROJECTS
          </Link>
          <Link href="/" className="hover:text-accent font-bold active:text-accent">
            BLOGS
          </Link>
          <Link href="/" className="hover:text-accent font-bold active:text-accent">
            CERTIFICATIONS
          </Link>
          <Link href="/" className="hover:text-accent font-bold active:text-accent">
            GALLERY
          </Link>          
        </div>
        <Button text="Request A Quote" variant="CTA" />
      </div>
    </nav>
  );
}
"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Button from "./Button";

import Image from "next/image";

import { RiMenu3Fill } from "react-icons/ri";

import { useState } from "react";

import { links } from "@/constants/navigation";
import { usePathname } from "next/navigation";

import Link from "next/link";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white cursor-pointer flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
        <div>
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Link href="/">
              <Image
                src="/assets/logo.webp"
                width={156}
                height={40}
                alt="skytech logo"
                className="h-auto"
                loading="eager"
              />
            </Link>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-10 p-8 justify-center text-left">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`font-semibold transition-colors uppercase ${
                    pathname === link.path
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  <Link href={link.path} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <div onClick={() => setIsOpen(false)}>
              <Button text="Request a quote" variant="CTA" href="/contact" />
            </div>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;

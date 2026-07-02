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

const links = [
  {
    name: "ABOUT",
    path: "home",
  },
  {
    name: "SERVICES",
    path: "about",
  },
  {
    name: "PROJECTS",
    path: "services",
  },
  {
    name: "BLOGS",
    path: "projects",
  },
  {
    name: "CERTIFICATIONS",
    path: "contact",
  },
  {
    name: "GALLERY",
    path: "contact",
  },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Image
              src="/assets/logo.webp"
              width={156}
              height={40}
              alt="skytech logo"
            />
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-10 p-8 justify-center text-left">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase cursor-pointer hover:text-accent"
                >
                  <span> {link.name}</span>
                  {/* <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                  </ScrollLink> */}
                </li>
              );
            })}
            <Button text="Request a quote" variant="CTA" />
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;

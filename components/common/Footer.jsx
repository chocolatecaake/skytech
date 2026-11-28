import Link from "next/link";
import Image from "next/image";

import { FaPhone } from "react-icons/fa6";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { services } from "@/constants/services";
import { links } from "@/constants/navigation";
import { FaLinkedin } from "react-icons/fa6";
import MapEmbed from "./MapEmbed";

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className="flex flex-col xl:flex-row justify-between p-10 xl:p-12 gap-content">
        <div className="flex flex-col text-white space-y-small">
          <Image
            src="/assets/logo.webp"
            width={250}
            height={10}
            alt="skytech logo"
            loading="eager"
            className="w-[250px] h-auto "
          />
            <span className="flex items-center shrink-0">
              <FaLocationDot className="body-large inline mr-small text-yellow-300 shrink-0" />
              <div>
                <p>Al Bunyan Building, 1st Floor, Office No. 163, ICAD 2, Al Mahdar
              Street, Abu Dhabi, UAE, P.O. Box 132415</p>
              </div>
            </span>

          <MapEmbed />
        </div>
        <div className="flex flex-col text-white space-y-default text-base whitespace-nowrap">
          <h4 className="text-accent whitespace-nowrap">Quick Contact</h4>
          <div className="flex flex-col space-y-small">
            <span className="flex items-center">
              <FaPhone className="body-large inline mr-small text-yellow-300" />
              <div>
                <p>+971 50 259 7150, </p>
                <p>+971 55 646 4942</p>
              </div>
            </span>
            <span>
              <AiFillPrinter className="body-large inline mr-small text-yellow-300" />
              +971 2 553 4307 (Fax)
            </span>
            <span>
              <IoMdMail className="body-large inline mr-small text-yellow-300" />
              info@skytechuae.com
            </span>
            <span className="hover:text-yellow">
              <Link
                href="https://www.linkedin.com/company/sky-tech-general-contracting/people/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="body-large inline mr-small text-yellow-300" />
                Skytech
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-white space-y-default">
          <h4 className="text-accent">Services</h4>
          {services.map((service, idx) => (
            <Link
              key={idx}
              target="_blank"
              href={`/services?open=${service.slug}#${service.slug}`}
              className="hover:text-yellow"
              rel="noopener"
            >
              <span>{service.title}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col text-white space-y-default">
          <h4 className="text-accent whitespace-nowrap">Quick Links</h4>
          <div className="flex flex-col space-y-small">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                target="_blank"
                rel="noopener"
                className=" hover:text-yellow"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center py-5 xl:text-right">
        <span className="text-white text-sm">
          © 2026 Skytech General Contracting LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";

import { FaPhone } from "react-icons/fa6";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { services } from "@/constants/services";
import { links } from "@/constants/navigation";
import { FaLinkedin } from "react-icons/fa6";

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
          <span className="body-large">P.O. Box 132415</span>
          <span className="body-large">
            <FaLocationDot className="body-large inline mr-small text-yellow-300" />
            86CR13 Sector: - Abu Dhabi Industrial City - ICAD II - Abu Dhabi
          </span>
          <div className="rounded-default overflow-hidden border border-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.768870481484!2d54.4651078!3d24.284802199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3fffce2dbb61%3A0xd28a7c596c35a5c1!2sStar%20Brand%20Business%20Center!5e0!3m2!1sen!2sae!4v1792513765104!5m2!1sen!2sae"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
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
            <span>
              <Link
                href="https://www.linkedin.com/company/sky-tech-general-contracting/people/"
                target="_blank"
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
      href={`/services#${service.slug}`}
      className="hover:text-yellow"
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

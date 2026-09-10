import Link from "next/link";
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
      <div className="flex flex-col md:flex-row justify-between p-12 sm:p-24 sm:pb-1 gap-content">
        <div className="flex flex-col text-white space-y-small lg:min-w-50">
          <h4>Skytech General Contracting L.L.C</h4>
          <span className="body-large">P.O. Box 132415</span>
          <span className="body-large">
            <FaLocationDot className="inline mr-small text-yellow-300" />
            Abu Dhabi, UAE
          </span>
          <div className="rounded-default overflow-hidden border border-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232565.41897088237!2d54.39381209067177!3d24.387054128669117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1782635877707!5m2!1sen!2sae"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col text-white space-y-default text-base lg:min-w-55">
          <h4 className="text-accent lg:min-w-50">Quick Contact</h4>
          <div className="flex flex-col space-y-small">
            <span className="flex body-large items-center">
              <FaPhone className="inline mr-small text-yellow-300" />
              <div>
                <p>+971 50 259 7150,</p>
                <p>+971 55 646 4942</p>
              </div>
            </span>
            <span>
              <AiFillPrinter className="inline mr-small text-yellow-300" />
              +971 2 553 4307 (Fax)
            </span>
            <span>
              <IoMdMail className="inline mr-small text-yellow-300" />
              info@skytechuae.com
            </span>
            <span>
              <Link
                href="https://www.linkedin.com/company/sky-tech-general-contracting/people/"
                target="_blank"
              >
                <FaLinkedin className="inline mr-small text-yellow-300" />
                Skytech
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-white space-y-default">
          <h4 className="text-accent lg:min-w-50">Services</h4>
          <Link href="/services">
            <div className="flex flex-col space-y-small">
              {services.map((service, idx) => (
                <span key={idx} className="hover:text-yellow">
                  {service.title}
                </span>
              ))}
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-white space-y-default">
          <h4 className="text-accent lg:min-w-50">Quick Links</h4>
          <div className="flex flex-col space-y-small">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                className="body-large capitalize hover:text-yellow"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-24 pb-6 items-center">
        <h1 className="footer-font tracking-widest bg-gradient-to-t from-[#77aeff]/0 via-[#547ab3]/75 to-[#486699]/100 bg-clip-text text-transparent">
          SKYTECH
        </h1>
        <span className="text-white text-sm">
          © 2026 SkyTech General Contracting LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

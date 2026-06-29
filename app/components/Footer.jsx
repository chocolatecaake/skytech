import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className = "flex flex-col md:flex-row justify-between p-24 pb-12 gap-8">
        <div className="flex flex-col text-white space-y-4">
          <h4>Skytech General Contracting L.L.C</h4>
          <span className="body-large">P.O. Box 132415</span>
          <span className="body-large">
            <FaLocationDot className="inline mr-2 text-yellow-300" />
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
        <div className="flex flex-col text-white space-y-6">
          <h4 className="text-accent">Quick Contact</h4>
          <div className="flex flex-col space-y-4">
            <span className="body-large items-center">
              <FaPhone className="inline mr-2 text-yellow-300" />
              +971 50 259 7150
            </span>
            <span className="body-large">
              <AiFillPrinter className="inline mr-2 text-yellow-300" />
              +971 50 259 7150 (Fax)
            </span>
            <span className="body-large">
              <IoMdMail className="inline mr-2 text-yellow-300" />
              sales@skytechuae.com
            </span>
          </div>
        </div>
        <div className="flex flex-col text-white space-y-6">
          <h4 className="text-accent">Services</h4>
          <div className="flex flex-col space-y-4 body-large">
            <span>Service</span>
            <span>Service</span>
            <span>Service</span>
            <span>Service</span>
          </div>
        </div>
        <div className="flex flex-col text-white space-y-6">
          <h4 className="text-accent">Quick Links</h4>
          <div className="flex flex-col space-y-4 body-large">
            <Link href="/">About</Link>
            <Link href="/">Project</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">Brochures</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className = "flex justify-between px-24 pb-6 items-center">
        <h1 className="text-8xl tracking-widest font-black bg-gradient-to-t from-[#77aeff] via-[#547ab3] to-[#486699] bg-clip-text text-transparent">
          SKYTECH
        </h1> 
        <span className = "text-gray-400 text-sm">© 2026 SkyTech General Contracting LLC. All rights reserved.</span>
      </div> 
    </footer>
  );
}

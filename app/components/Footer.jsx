"use client";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { AiFillPrinter } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer className = "bg-[#0b1c2c] w-full mt-5 flex row justify-between p-10 px-30">
            <div className = "text-white space-y-3">
                <h4>Skytech General Contracting L.L.C</h4>
                <h4>P.O. Box 132415</h4>
                <h4><FaLocationDot className="inline mr-2 text-yellow-300"/>Abu Dhabi, UAE</h4>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/10 backdrop-blur-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232565.41897088237!2d54.39381209067177!3d24.387054128669117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1782635877707!5m2!1sen!2sae" 
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"></iframe>
                </div>
            </div>
            <div className = "text-white space-y-10">
                <h3 className = "text-accent">Quick Contact</h3>
                <span className="body-large items-center"><FaPhone className="inline mr-2 text-yellow-300" />+971 50 259 7150 <br/> </span>
                <span className="body-large"><AiFillPrinter className="inline mr-2 text-yellow-300"/>+971 50 259 7150 (Fax) <br/> </span>
                <span className="body-large"><IoMdMail className="inline mr-2 text-yellow-300"/>sales@skytechuae.com</span>
            </div> 
            <div className = "text-white space-y-10">
                <h3 className = "text-accent">Services</h3>
                <span className="body-large">Service<br/> </span>
                <span className="body-large">Service <br/> </span>
                <span className="body-large">Service <br/> </span>
                <span className="body-large">Service</span>
            </div>
            <div className = "text-white space-y-10">
                <h3 className = "text-accent">Quick Links</h3>
                <Link href="/" className="body-large">About<br/> </Link>
                <Link href="/" className="body-large">Project <br/> </Link>
                <Link href="/" className="body-large">Blogs <br/> </Link>
                <Link href="/" className="body-large">Brochures<br/></Link>
                <Link href="/" className="body-large">Contact Us</Link>
            </div>   
        </footer>
    )
}
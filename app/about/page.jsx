import Title from "@/components/common/Title";
import About from "@/public/assets/About.webp";
import icv from "@/public/assets/about/icv.webp";
import adnoc from "@/public/assets/about/adnoc.webp";
import iso from "@/public/assets/about/iso.webp";
import Button from "@/components/common/Button";
import Image from "next/image";
import Statistics from "./Statistics.jsx";

import { MdOutlineVerified } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { LuFlower2 } from "react-icons/lu";
import { MdAddLocationAlt } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-5">
            <Title
              pretitle="About Us"
              header="Serving Customers Through Innovative Excellence"
              align="left"
            />

            <p className="mt-6 text-gray-600 leading-8">
              SKYTECH is an innovative company providing cutting edge, cost
              effective solutions in the supply and installation of Fiberglass,
              Thermoplastic, CS, and SS Systems. We believe that through
              efficient, timely and economically viable execution, and
              commitment to international quality standards, we will be able to
              provide stellar service and achieve customer satisfaction.
            </p>
            <div className=" relative flex flex-row items-center gap-5">
              <div>
                <Image src={icv} alt="About Us" className="w-auto h-auto" />
              </div>
              <div>
                <Image src={iso} alt="About Us" className="w-auto h-auto" />
              </div>
              <div>
                <Image src={adnoc} alt="About Us" className="w-auto h-auto" />
              </div>
            </div>
            <Button text="See Our Projects" variant="primary" />
          </div>
          <div className="shrink-0">
            <Image src={About} alt="About Us" className="w-auto h-auto" />
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row w-full bg-lightaccent items-center p-5 gap-5">
        <div className="flex flex-col items-center gap-4">
          <MdOutlineVerified className="h-[80] w-[80] text-red-600 bg-red-100 rounded-full p-5" />
          <h4 className="text-center">
            Highest Quality of international standards
          </h4>
        </div>
        <FaCircle />
        <div className="flex flex-col items-center gap-4">
          <CgProfile className="h-[80] w-[80] text-red-600 bg-red-100 rounded-full p-5" />
          <h4 className="text-center">
            Certified engineers and skilled technicians
          </h4>
        </div>
        <FaCircle />
        <div className="flex flex-col items-center gap-4">
          <LuFlower2 className="h-[80] w-[80] text-red-600 bg-red-100 rounded-full p-5" />
          <h4 className="text-center">
            Focus on Sustainability, health and safety
          </h4>
        </div>
        <FaCircle />
        <div className="flex flex-col items-center gap-4">
          <MdAddLocationAlt className="h-[80] w-[80] text-red-600 bg-red-100 rounded-full p-5" />
          <h4 className="text-center">
            Proven track record of success across the UAE
          </h4>
        </div>
      </div>
      <Statistics />
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-20 p-10">
        <FaQuoteLeft className="absolute text-accent h-[100px] w-[100px] top-1 " />
        <FaQuoteRight className="absolute text-accent h-[100px] w-[100px] bottom-1 right-10" />
        <div className="flex flex-col bg-primary text-center p-20 rounded-[15] gap-5">
          <span className="h3 text-yellow">Our Vision</span>
          <span className="body-large text-white">
            SKYTECH aims, to achieve customer satisfaction through superior
            services and commitment, without any compromise on international
            quality standards.{" "}
          </span>
        </div>
        <div className="flex flex-col bg-primary text-center p-20 rounded-[15] gap-5">
          <span className="h3 text-yellow-500">Our Mission</span>
          <span className="body-large text-white ">
            SKYTECH aims, to achieve customer satisfaction through superior
            services and commitment, without any compromise on international
            quality standards.{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default page;

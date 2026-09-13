import Image from "next/image";

import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import ServiceCard from "@/components/cards/ServiceCard";
import DetailCard from "@/components/cards/DetailCard";
import ProjectCard from "@/components/cards/ProjectCard";
import CertificationCard from "@/components/cards/CertificationCard";
import WhatsAppButton from "@/components/common/Whatsapp";

import { FaWhatsapp } from "react-icons/fa";

import { Testimonials } from "@/components/sections/Testimonials";
import CTASection from "@/components/common/CTASection";

import Faq from "@/components/sections/FAQ";

import Certificate from "@/public/assets/certifications/Certificate.webp";
import iso from "@/public/assets/about/iso.webp";

export default function Tester() {
  return (
    <div>
      <main>
        <section className="typography">
          <span className="hero">Hero font</span>
          <h1>h1 header 1</h1>
          <h2>h2 header 2</h2>
          <h3>h3 header 3</h3>
          <h4>h4 header 4</h4>
          <span className="spaced">h4 spaced header 4</span>
          <span className="body-large">Body Large</span>
          <p>Body</p>
          <span className="small">small</span>
        </section>
        <section className="theme">
          <div className="w-20 h-20 bg-primary"></div>
          <div className="w-20 h-20 bg-secondary"></div>
          <div className="w-20 h-20 bg-accent"></div>
          <div className="w-20 h-20 bg-yellow"></div>
          <div className="w-20 h-20 bg-tertiary"></div>
          <div className="w-20 h-20 bg-lightaccent"></div>
          <div className="w-20 h-20 bg-darkred"></div>
        </section>
        <section>
          <Title pretitle="About Us" header="who we are" align="left" />
          <Title pretitle="About Us" header="who we are" align="center" />
          <Title pretitle="About Us" header="who we are" align="right" />
        </section>
        <section>
          <Button text="CTA" variant="CTA" />
          <Button text="Primary" variant="primary" />
          <Button text="Secondary" variant="secondary" />
          <Button text="Badge" variant="badge" />
        </section>
        <section className="bg-primary">
          <Button text="Tertiary" variant="tertiary" />
          <Button
            variant="glassBadge"
            icon={<Image src={"/next.svg"} alt="" width={20} height={20} />}
            text="Glass badge"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              idx="01"
              title="Title Card"
              desc="Card Description Text Will be Wttiten here"
              icon={<Image src={"/next.svg"} alt="" width={88} height={88} />}
            />
            <ServiceCard
              idx="01"
              title="Title Card"
              desc="Card Description Text Will be Wttiten here"
              icon={<Image src={"/next.svg"} alt="" width={88} height={88} />}
            />
            <ServiceCard
              idx="01"
              title="Title Card"
              desc="In-situ lamination of chemical storage tanks and benching lamination."
              icon={<Image src={"/next.svg"} alt="" width={88} height={88} />}
            />
            <ServiceCard
              idx="01"
              title="Title Card"
              desc="Card Description Text Will be Wttiten here"
              icon={<Image src={"/next.svg"} alt="" width={88} height={88} />}
            />
          </div>
          {/* <AccordionSection /> */}
          {/* <WhatsAppButton
            phoneNumber="+971501234567"
            message="Hi! I'd like to request a quote."
          >
            <FaWhatsapp size={40} className="text-white" />
          </WhatsAppButton> */}
        </section>
        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-10">
          <ProjectCard
            Progress="Completed"
            Img="/next.svg"
            title="Akoya by Damac"
            loc="DXB"
            Client="ABC Properties"
            Value="AED 45 Million"
            ProjType="GRP Pipeline Installation"
          />
          <ProjectCard
            Progress="Completed"
            Img="/next.svg"
            title="Akoya by Damac"
            loc="DXB"
            Client="ABC Properties"
            Value="AED 45 Million"
            ProjType="GRP Pipeline Installation"
          />
          <ProjectCard
            Progress="Completed"
            Img="/next.svg"
            title="Akoya by Damac"
            loc="DXB"
            Client="ABC Properties"
            Value="AED 45 Million"
            ProjType="GRP Pipeline Installation"
          />
        </div>
        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-10">
          <DetailCard
            id="1"
            Img="/next.svg"
            title="Chemical Storage Tank Lining"
            desc="In-situ lamination of chemical storage tanks and benching lamination. In-situ lamination of chemical In-situ lamination of chemical storage tanks and benching lamination. In-situ lamination of chemical ..."
          />
          <DetailCard
            id="2"
            Img="/next.svg"
            title="Akoya by Damac"
            desc="In-situ lamination of chemical storage tanks and benching lamination. In-situ lamination of chemical In-situ lamination of chemical storage tanks and benching lamination. In-situ lamination of chemical ..."
          />
          <DetailCard
            id="3"
            Img="/next.svg"
            title="Akoya by Damac"
            desc="In-situ lamination of chemical storage tanks and benching lamination. In-situ lamination of chemical In-situ lamination of chemical storage tanks and benching lamination. In-situ lamination of chemical ..."
          />
        </div>
        <div className="flex flex-col justify-center md:flex-row items-center gap-6 my-10">
          <CertificationCard
            badge={iso}
            title="ISO Certificate: ISO 9000"
            img={Certificate}
            CerficationNo="000001"
            ObtainOn="9 June 2026"
            ValidUntil="9 June 2026"
          />
        </div>
        <section>
          <Testimonials />
        </section>
        <CTASection
          img="/assets/construction.webp"
          title="CTA Section title"
          subtitle="this is the subtitle for the cta section"
          button={<Button variant="tertiary" text="Click here" />}
        />
        <CTASection
          img="/assets/construction.webp"
          title="CTA Section title"
          subtitle="this is the subtitle for the cta section"
          button={<Button variant="CTA" text="Click here" />}
        />
        <section className="bg-primary text-white">
          <Title header="FAQ" align="left" />
          <Faq />
        </section>
      </main>
    </div>
  );
}

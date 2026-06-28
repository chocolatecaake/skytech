import Image from "next/image";

import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Button from "./components/Button";
import ServiceCard from "./components/ServiceCard";
import NavBar from "./components/NavBar2";
import Footer from "./components/Footer";
import AccordionSection from "./components/Accordin";

export default function Home() {
  return (
    <div className = "bg-accent">
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
          <Title pretitle="about us" header="who we are" align="left" />
          <Title pretitle="about us" header="who we are" align="center" />
          <Title pretitle="about us" header="who we are" align="right" />
        </section>
        <section>
          <Button text="CTA" variant="CTA" />
          <Button text="Primary" variant="primary" />
          <Button text="Secondary" variant="secondary" />
          <Button text="Badge" variant="badge" />
        </section>
        <section className="bg-primary flex">
          <Button text="Tertiary" variant="tertiary" />
          <Button
            variant="glassBadge"
            icon={<Image src={"/next.svg"} alt="" width={20} height={20} />}
            text="Glass badge"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
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
          <AccordionSection />
        </section>
        <Footer/>
      </main>
    </div>
  );
}

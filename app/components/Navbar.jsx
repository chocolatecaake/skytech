import Image from "next/image";
// import NavMobile from "./NavMobile";
import Button from "./Button";

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
const Navbar = () => {
  return (
    <header className="bg-primary py-2 shadow-xl sticky top-0">
      <div className="flex justify-between items-center container mx-auto">
        <Image
          src="/assets/logo.png"
          width={156}
          height={40}
          alt="skytech logo"
        />

        <nav className="hidden xl:flex items-center gap-12">
          <ul className="flex gap-12 text-white">
            {links.map((link, index) => {
              return (
                <li key={index} className="text-white font-semibold">
                  {link.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <Button text="Request a quote" variant="CTA" />
        {/* <div className="xl:hidden">
          <NavMobile />
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;

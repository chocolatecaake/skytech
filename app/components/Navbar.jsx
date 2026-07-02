import Image from "next/image";
import NavMobile from "./NavMobile";
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
    <header className="bg-primary shadow-xl z-1 border-b-1 border-white sticky top-0">
      <div className="min-h-[64px] flex justify-between items-center container mx-auto px-4 xl:px-0">
        <Image
          src="/assets/logo.webp"
          width={156}
          height={40}
          alt="skytech logo"
        />

        <nav className="hidden xl:block xl:flex items-center gap-12">
          <ul className="flex gap-12">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white font-semibold hover:text-accent"
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden xl:block">
          <Button text="Request a quote" variant="CTA" />
        </div>
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

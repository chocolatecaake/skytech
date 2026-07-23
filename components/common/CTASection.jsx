import Image from "next/image";

const CTASection = ({ img, title, subtitle, button, path }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>{" "}
      <div className="relative space-y-default flex flex-col items-center text-center">
        <div className="space-y-small flex flex-col items-center">
          <h3 className="text-yellow">{title}</h3>
          <span className="body-large capitalize text-white">{subtitle}</span>
        </div>
        {button}
      </div>
    </section>
  );
};

export default CTASection;

import { cn } from "@/lib/utils";

const ServiceCard = ({ idx, title, desc, icon }) => {
  return (
    <div className="flex flex-col w-full h-full space-y-3 transition duration-500 hover:scale-105">
      <h3 className="text-yellow text-right">{idx}</h3>
      <div
        className={cn(
          "p-10",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "w-full",
          "h-full",
          "mx-auto",
          "text-center",
          "sm:p-13",
          "space-y-8",
          "glass",
        )}
      >
        <div className="text-accent">{icon}</div>
        <div className="space-y-2">
          <h4 className="text-accent">{title}</h4>
          <span className="body-large">{desc}.</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

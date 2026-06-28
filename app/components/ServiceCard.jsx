const ServiceCard = ({ idx, title, desc, icon }) => {
  return (
    <div className="flex flex-col w-full space-y-3">
      <h2 className="text-yellow text-right">{idx}</h2>
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-full
        mx-auto
        text-center
        px-14 py-20
        space-y-8
        glass"
      >
        <div className="bg-accent">{icon}</div>
        <div className="space-y-2">
          <h4 className="text-accent">{title}</h4>
          <span className="body-large">{desc}.</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

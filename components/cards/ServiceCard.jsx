const ServiceCard = ({ idx, title, desc, icon }) => {
  return (
    <div className="flex flex-col w-full h-full space-y-2">
      <h3 className="text-yellow text-right">{idx}</h3>
      <div className="card !p-10 glass !text-center items-center justify-center">
        <div className="text-accent">{icon}</div>
        <h4 className="text-accent">{title}</h4>
        <span className="!text-lg text-white">{desc}.</span>
      </div>
    </div>
  );
};

export default ServiceCard;

"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const ServiceDetailCard = ({ id, Img, title, desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full rounded-default bg-white p-3 flex flex-col space-y-4">
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-default aspect-[410/380] bg-accent">
        <img src={Img} alt={title} className="h-full w-full object-cover" />

        {/* Number Badge */}
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <div className="flex rounded-full! h-9 w-9 items-center justify-center rounded-full border font-bold text-white backdrop-blur-md glass shadow-default sm:h-14 sm:w-14">
            {id}
          </div>
        </div>
      </div>

      {/* Title */}
      <h4>{title}</h4>

      {/* Description */}
      <div className="flex flex-col">
        <p
          className={`small transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {desc}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex w-fit self-end items-center gap-2 font-semibold transition-colors hover:text-accent"
        >
          {/* <span>{isExpanded ? "See Less" : "See More"}</span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />} */}
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailCard;

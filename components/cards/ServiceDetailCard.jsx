"use client";
import { useState } from "react";
import {FaChevronDown, FaChevronUp } from "react-icons/fa6";

const ServiceDetailCard = ({id, Img, title, desc}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className= "bg-white w-[410px] min-h-[545px] rounded-2xl flex flex-col p-3 gap-3 items-center">
        <div className="relative h-[380px] overflow-hidden rounded-xl bg-accent flex items-center justify-center w-full">
            <img
                src={Img}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className ="absolute right-4 top-4 rounded-full text-sm font-semibold text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lightaccent/30 backdrop-blur-md border border-white/20 shadow-md text-white">
                    <span className="font-bold">{id}</span>
                </div>
            </div>
        </div>
        <div className = "flex self-start">
            <h4>
                {title}
            </h4>   
        </div>
<div className="flex flex-col self-start">
  <p
    className={`small transition-all duration-300 ${
      isExpanded ? "" : "line-clamp-3"
    }`}
  >
    {desc}
  </p>

  <div
    onClick={() => setIsExpanded(!isExpanded)}
    className="mt-2 flex self-end cursor-pointer items-center gap-2 font-semibold hover:text-accent transition-colors"
  >
    <span>{isExpanded ? "See Less" : "See More"}</span>
    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
  </div>
</div>     

    </div>
  );
};

export default ServiceDetailCard;
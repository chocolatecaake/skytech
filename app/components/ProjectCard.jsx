"use client";
import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { FaLocationDot, FaUserTie, FaMoneyBillWave, FaChevronDown, FaChevronUp } from "react-icons/fa6";

const ProjectCard = ({Progress, Img, title, loc, Client, Value, ProjType}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
  <div className={`bg-white w-[410px] rounded-2xl flex flex-col p-3 gap-3 items-center
  ${
    isExpanded ? "h-[610px]" : "h-[545px]"
  }`}>
    <div className="relative h-[380px] overflow-hidden rounded-xl bg-accent flex items-center justify-center w-full">
      <img
        src={Img}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className ="absolute left-4 top-4 rounded-full text-sm font-semibold text-white">
      <Button
          variant="glassBadge"
          icon={<FaCheckCircle />}
          text={Progress}
      />
      </div>
      <div className ="absolute p-2 bottom-0 rounded-full text-sm font-semibold text-white flex flex-row justify-between w-full">
      <p className = "body-large">
        {title}
      </p>   
      <p className="flex items-center">
      <FaLocationDot className="mr-2 text-yellow-300" />
      {loc}
      </p>
      </div>
    </div>
    <div>
      <Button text={ProjType} variant="badge" className="w-full" />
    </div> 
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="flex self-start cursor-pointer items-center gap-2 text-[#486699] font-semibold hover:text-[#36527d] transition-colors"
    >
      <span>{isExpanded ? "Hide Details" : "View Details"}</span>
      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}

    </div>
    <div
      className={`overflow-hidden transition-all duration-500 w-full ${
        isExpanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
  <div className="border-t pt-4 flex flex-col self-start">
    <div className="flex items-center gap-3">
        <p className="text-xs text-gray-500 ">Client: </p>
        <p className="font-medium">{Client}</p>
    </div>

    <div className="flex items-center gap-3">
        <p className="text-xs text-gray-500">Project Value: </p>
        <p className="font-medium">{Value}</p>
    </div>
  </div>
</div>
  </div>
  );
};

export default ProjectCard;
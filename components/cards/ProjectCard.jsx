"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import { FaCheckCircle } from "react-icons/fa";
import { FaLocationDot, FaChevronDown, FaChevronUp } from "react-icons/fa6";

const ProjectCard = ({
  Progress,
  Img,
  title,
  loc,
  Client,
  Value,
  ProjType,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card bg-white">
      {/* Image */}
      <div className="card-img">
        <Image
          src={Img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Status */}
        <div className="absolute left-3 top-3">
          <Button
            variant="glassBadge"
            icon={<FaCheckCircle />}
            text={Progress}
          />
        </div>

        {/* Bottom Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex justify-between">
          <h4 className="text-lg font-semibold text-white md:text-xl">
            {title}
          </h4>

          <div className="mt-2 flex items-center gap-2 text-sm text-white">
            <FaLocationDot className="text-yellow shrink-0" />
            <span className="truncate">{loc}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-default">
        <Button text={ProjType} variant="badge" />

        {/* Expand Button */}
        {/* <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 self-start font-semibold transition-colors hover:text-accent"
        >
          {isExpanded ? "Hide Details" : "View Details"}

          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
 */}
        {/* Details */}
        {/* <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-60 opacity-100" : "max-h-60 opacity-100"
          }`}
        > */}
        <div className="overflow-hidden transition-all duration-500 max-h-60 opacity-100">
          <div className="border-t border-tertiary/50">
            <div className="flex flex-col gap-2 mt-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500">Client</span>
              <span className="font-medium text-gray-900">{Client}</span>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500">Project Value</span>
              <span className="font-medium text-gray-900">{Value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

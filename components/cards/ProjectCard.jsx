"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import { FaCheckCircle } from "react-icons/fa";
import { FaLocationDot, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { GiTeePipe } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";

const ProjectCard = ({
  progress,
  img,
  title,
  loc,
  client,
  contractor,
  projType,
  pipeType,
  inchDia,
  scope
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card bg-white">
      {/* Image */}
      <div className="card-img">
        <Image
          src={img}
          alt={title}
          fill
          priority
          sizes="100%"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Status */}
        <div className="absolute left-3 top-3">
          <Button
            variant="glassBadge"
            icon={<FaCheckCircle />}
            text={progress}
          />
        </div>

        {/* Bottom Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col">
          <div className="mt-2 flex items-center gap-2 text-sm text-white">
            <FaLocationDot className="text-yellow shrink-0" />
            <span className="truncate">{loc}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-default">
        {/* Project Type */}
        <Button text={projType} variant="badge" />

        {/* Title */}
        <span className="body-large !font-semibold">
          {title}
        </span>
          <div className="border-t border-tertiary/50 pt-4">
            
            {/* Client */}
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">
                Client:{" "}
                <span className="text-gray-900">
                  {client}
                </span>
              </span>
            </div>

            {/* Contractor */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-gray-500">
                Contractor:{" "}
                <span className="text-gray-900">
                  {contractor}
                </span>
              </span>
            </div>

          </div>
        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 self-end font-semibold transition-colors hover:text-accent text-darkblue"
        >
          {isExpanded ? "Hide Details" : "View Details"}

          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {/* Expandable */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
        <div className="border-t border-tertiary/50 pt-4">
            {/* Pipe Type */}
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">
                Pipe Type:{" "}
                <span className="text-gray-900">
                  {pipeType}
                </span>
              </span>
            </div>

            {/* Inch Diameter */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-gray-500">
                Inch Dia:{" "}
                <span className="text-gray-900">
                  {inchDia}
                </span>
              </span>
            </div>

            {/* Scope of work */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-gray-500">
                Scope Of Work:{" "}
              <span className="text-gray-900">
                {scope}
              </span> 
              </span>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const DetailCard = ({
  variant = "service",
  id,
  slug,
  img,
  title,
  desc,
  author,
  date,
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
          className="h-full w-full object-cover"
        />

        {variant === "service" && (
          <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
            <div className="flex rounded-full! h-9 w-9 items-center justify-center rounded-full border font-bold text-white backdrop-blur-md glass shadow-default sm:h-14 sm:w-14">
              {id}
            </div>
          </div>
        )}
      </div>
      {variant === "blog" && (
        <div className="flex items-center gap-2 text-tertiary">
          <span className="capitalize">{author}</span>
          <span className="text-yellow">•</span>
          <span>{date}</span>
        </div>
      )}
      {/* Title */}
      <span className="body-large !font-semibold md">{title}</span>

      {/* <h4>{title}</h4> */}

      {/* Description */}
      <div className="flex flex-col space-y-small">
        <p
          className={`text-tertiary  ${variant === "blog" ? "line-clamp-3" : ""}`}
        >
          {desc}.
        </p>

        <div className="mt-auto flex justify-end">
          {variant === "blog" && (
            <Link
              href={`/blogs/${slug}`}
              className="font-semibold text-darkblue hover:underline underline-offset-4"
            >
              Read More <span className="body-large">→</span>
            </Link>
          )}
        </div>
        {/* <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex w-fit self-end items-center gap-2 font-semibold transition-colors hover:text-accent"
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />} 
        </button> */}
      </div>
    </div>
  );
};

export default DetailCard;

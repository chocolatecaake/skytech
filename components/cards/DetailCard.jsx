"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

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

  const card = (
    <div className="card bg-white">
      {/* Image */}
      <div className="card-img">
        <Image
          src={img}
          alt={title}
          fill
          sizes="100%"
          className="object-cover object-cover"
        />

        {variant === "service" && (
          <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full! border font-bold text-white backdrop-blur-md glass shadow-default sm:h-14 sm:w-14">
              {id}
            </div>
          </div>
        )}
      </div>

      {/* Blog Metadata */}
      {variant === "blog" && (
        <div className="flex items-center gap-2 text-tertiary">
          <span className="capitalize">{author}</span>
          <span className="text-yellow">•</span>
          <span>{date}</span>
        </div>
      )}

      {/* Title */}
      <span className="body-large !font-semibold">{title}</span>

     {/* Description */}
      <div className="flex flex-col space-y-small">
        <p
          className={`text-tertiary ${
            variant === "service"
              ? isExpanded
                ? ""
                : "line-clamp-2"
              : "line-clamp-3"
          }`}
        >
          {desc}.
        </p>

        {/* Service View Details */}
        {variant === "service" && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 self-end font-semibold text-darkblue transition-colors hover:text-accent"
          >
            {isExpanded ? "Hide Details" : "View Details"}

            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        )}
          {/* Read More */}
        {variant === "blog" && (
          <div className="mt-auto flex justify-end">
            <span className="font-semibold text-darkblue">
              Read More <span className="body-large">→</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  // Make the entire card clickable for blogs
  if (variant === "blog") {
    return (
      <Link
        href={`/blogs/${slug}`}
        className="block h-full transition-transform duration-300 hover:-translate-y-1"
      >
        {card}
      </Link>
    );
  }

  return card;
};

export default DetailCard;
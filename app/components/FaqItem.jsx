"use client";
import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass">
      <div className="flex p-5 items-center justify-between">
        <h4 className={`body-large ${isOpen ? "text-yellow" : ""}`}>{title}</h4>
        <button
          className={`bg-accent p-2 rounded-default cursor-pointer hover:bg-yellow ${isOpen ? "bg-yellow" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill className="text-primary" />
          ) : (
            <RiAddFill className="text-primary" />
          )}
        </button>
      </div>
      <div
        className={`${isOpen ? "max-h-[200px] opacity-100 p-5 transition-all duration-500 ease-in-out" : "max-h-0 opacity-0 p-0 transition-all duration-500 ease-in-out overflow-hidden"}`}
      >
        <p className="flex items-center">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;

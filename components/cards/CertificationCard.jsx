"use client";

import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";
import { createPortal } from "react-dom";

const CertificationCard = ({
  badge,
  title,
  img,
  CerficationNo,
  ObtainOn,
  ValidUntil,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const modal = isOpen && (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-10 h-[90vh] w-[90vw] max-w-5xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg cursor-pointer hover:bg-accent"
        >
          ✕
        </button>

        {/* Certificate */}
          <Image
            src={img}
            alt={title}
            fill
            priority
            className="object-contain rounded-default"
            sizes="90vw"
          />
      </div>
    </div>
  );

  return (
    <>
      {/* Certificate Card */}
      <div className="card bg-white border border-tertiary/10 ">
        {/* Header */}
        <div className="flex gap-small justify-between items-center">
          <div className="relative w-12 h-12">
            <Image
            src={badge} 
            alt={title} 
            fill 
            sizes="100%" 
            className="object-contain"
            />
          </div>

          <p className="body-large !font-semibold">{title}</p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-default md:flex-row">
          {/* Certificate Image */}
          <div className="w-full md:flex-1">
            <Image
              src={img}
              alt={title}
              width={1000}
              height={1414}
              className="rounded-default object-contain shadow-default"
            />
          </div>

          {/* Details */}
          <div className="w-full md:flex-1 flex flex-col space-y-small">
            <div className="flex justify-between md:flex-col">
              <p className="text-tertiary">Certificate No</p>
              <p className="!text-lg">{CerficationNo}</p>
            </div>

            <div className="flex justify-between md:flex-col">
              <p className="text-tertiary">Registered On</p>
              <p className="!text-lg">{ObtainOn}</p>
            </div>

            <div className="flex justify-between md:flex-col">
              <p className="text-tertiary">Valid Until</p>
              <p className="!text-lg">{ValidUntil}</p>
            </div>

            <div className="flex justify-end md:justify-start">
              <Button
                text="View"
                variant="primary"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Render modal directly into <body> */}
      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </>
  );
};

export default CertificationCard;

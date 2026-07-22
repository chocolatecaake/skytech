"use client";
import Image from "next/image";
import Button from "../common/Button";
import { useState } from "react";

const CertificationCard = ({
  badge,
  title,
  img,
  CerficationNo,
  ObtainOn,
  ValidUntil,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-default space-y-4 p-4 border-1 border-tertiary/10 shadow-default">
      {/* Header */}
      <div className="flex gap-3 justify-between items-center">
        <div className="relative w-12 h-12">
          <Image src={badge} alt={title} fill className="object-contain" />
        </div>
        <p className="body-large !font-bold">{title}</p>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Certificate Image */}
        <div className="w-full md:flex-1">
          <Image
            src={img}
            alt={title}
            className="w-full rounded-default object-contain shadow-default"
          />
        </div>

        {/* Details */}
        <div className="w-full md:flex-1 flex flex-col space-y-4">
          <div className="flex justify-between md:flex-col">
            <p className="text-tertiary">Certificate No</p>
            <p className="body-large">{CerficationNo}</p>
          </div>

          <div className="flex justify-between md:flex-col">
            <p className="text-tertiary">Obtained On</p>
            <p className="body-large">{ObtainOn}</p>
          </div>

          <div className="flex justify-between md:flex-col">
            <p className="text-tertiary">Valid Until</p>
            <p className="body-large">{ValidUntil}</p>
          </div>

          <Button
            text="View"
            variant="primary"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative h-[90vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg"
            >
              ✕
            </button>

            <Image
              src={img}
              alt={title}
              fill
              className="object-contain rounded-default"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;

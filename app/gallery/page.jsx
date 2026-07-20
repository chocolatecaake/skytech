"use client";

import { useState } from "react";
import Title from "@/components/common/Title";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { galleryImages } from "@/constants/gallery";

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 6;

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;

  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + imagesPerPage,
  );

  return (
    <section>
      <Title
        pretitle="Gallery"
        header="See us through the years"
        align="center"
      />

      {/* Gallery Grid */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {currentImages.map((image, index) => (
          <div className="relative aspect-[4/3] overflow-hidden rounded-default shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={cn(
                "h-10 w-10 rounded-full border hover:bg-accent cursor-pointer",
                currentPage === index + 1
                  ? "bg-primary text-white "
                  : "bg-white",
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default GalleryPage;

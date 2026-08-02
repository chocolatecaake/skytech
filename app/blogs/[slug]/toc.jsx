"use client";

import { useEffect, useState } from "react";

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(
    sections[0]?.id
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:block w-[350px] mt-20">
      <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">
          Table of Contents
        </h3>

        <ul className="space-y-3 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`transition-colors ${
                  activeSection === section.id
                    ? "text-red-600 font-semibold"
                    : "text-gray-600 hover:text-red-600"
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TableOfContents;
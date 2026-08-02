import { blogs } from "@/constants/blogs";
import TableOfContents from "./toc.jsx";
import Title from "@/components/common/Title";

import { FaUser, FaCalendarAlt } from "react-icons/fa";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-100 xl:px-100">
    <span className="hero inline-block border-b-4 border-red-600 pb-1">
      {blog.title}
    </span>

    <div className="w-full flex flex-col items-center">

        <div className="w-full max-w-[600px] mt-5">

          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-auto rounded-lg"
          />


          {/* Author + Date */}
          <div className="flex flex-wrap justify-start gap-4 mt-3 text-xs sm:text-sm text-gray-500 uppercase">

            <span className="flex items-center gap-2">
              <FaUser className="text-gray-400" />
              {blog.author}
            </span>

            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              {blog.date}
            </span>

          </div>

        </div>


      <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
      {/* Blog Content */}
      <div>

      {blog.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mb-10 scroll-mt-20"
        >
          <span className="h2 font-bold border-l-4 border-red-600 pl-3 mb-4">
            {section.title}
          </span>

          <p className="body-large text-gray-700">
            {section.content}
          </p>
        </section>
      ))}

      </div>

      <TableOfContents sections={blog.sections} />

    </div>

    </div>
    </div>
  );
}
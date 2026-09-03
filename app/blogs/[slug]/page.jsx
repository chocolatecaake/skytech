"use client";

import { blogs } from "@/constants/blogs";
import TableOfContents from "./toc.jsx";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className="py-10 px-4 sm:px-8">

      {/* Page container */}
      <div className="max-w-7xl mx-auto">

        {/* Blog Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero inline-block border-b-4 border-red-600 pb-1">
            {blog.title}
          </span>
        </motion.div>


        {/* Hero Image + Metadata */}
        <motion.div
          className="w-full flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div className="w-[85%] sm:w-[65%] lg:w-[45%] xl:w-[40%] max-w-[650px]">

            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-auto rounded-lg"
            />

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
        </motion.div>


        {/* Content + TOC */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-12">


          {/* Table of Contents */}
          <motion.aside
            className="order-1 lg:order-2 w-full min-w-0 lg:sticky lg:top-24 lg:self-start mt-5 lg:mt-16"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <TableOfContents sections={blog.sections} />
          </motion.aside>


          {/* Blog Content */}
          <article className="order-2 lg:order-1 min-w-0">

            {blog.sections.map((section, index) => (

              <motion.section
                key={section.id}
                id={section.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
              >

                <h2 className="h2 font-bold border-l-4 border-red-600 pl-3">
                  {section.title}
                </h2>

                <p className="body-large text-gray-700 leading-8 max-w-3xl">
                  {section.content}
                </p>

              </motion.section>

            ))}

          </article>

        </div>

      </div>

    </main>
  );
}
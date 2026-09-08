"use client";

import { blogs } from "@/constants/blogs";
import TableOfContents from "./toc.jsx";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
   <section>
  <main className="max-w-6xl mx-auto">

    {/* Blog Header */}
    <motion.header
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="hero font-bold leading-tight inline-block border-b-4 border-red-600 pb-1">
        {blog.title}
      </h1>
    </motion.header>

    {/* Hero Image */}
<motion.div
  className="max-w-4xl mx-auto mt-6"
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <img
    src={blog.img}
    alt={blog.title}
    className="w-full max-h-[450px] object-cover rounded-xl"
  />

  {/* Author + Date */}
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm text-gray-500">
    <span className="flex items-center gap-2">
      <FaUser className="text-gray-400" />
      {blog.author}
    </span>

    <div className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0" />

    <span className="flex items-center gap-2">
      <FaCalendarAlt className="text-gray-400" />
      {blog.date}
    </span>
  </div>
</motion.div>
    {/* Blog Content */}
    <article className="max-w-4xl mx-auto mt-10">
  {blog.sections.map((section, index) => (
    <motion.div
      key={section.id}
      id={section.id}
      className="mb-20"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <h2 className="h2 font-bold border-l-4 border-red-600 pl-3 mb-4">
        {section.title}
      </h2>

      <p className="body-large text-gray-700 leading-7">
        {section.content}
      </p>
    </motion.div>
  ))}
</article>

  </main>
</section>
  );
}
import { blogs } from "@/constants/blogs";
import TableOfContents from "./toc.jsx";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  return (
    <main className="py-10 px-4 sm:px-8">

      {/* Page container */}
      <div className="max-w-7xl mx-auto">

        {/* Blog Title */}
        <span className="hero inline-block border-b-4 border-red-600 pb-1">
          {blog.title}
        </span>

        {/* Hero Image + Metadata */}
<div className="w-full flex justify-center mt-8">
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
</div>

 {/* Content + TOC */}
<div className="w-full mt-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-12">

  {/* Table of Contents */}
  <aside className="order-1 lg:order-2 w-full min-w-0 lg:sticky lg:top-24 lg:self-start lg:mt-16">
    <TableOfContents sections={blog.sections} />
  </aside>

  {/* Blog Content */}
  <article className="order-2 lg:order-1 min-w-0">

    {blog.sections.map((section) => (
      <section
        key={section.id}
        id={section.id}
        className="mb-14 scroll-mt-24"
      >
        <h2 className="h2 font-bold border-l-4 border-red-600 pl-3 mb-5">
          {section.title}
        </h2>

        <p className="body-large text-gray-700 leading-8 max-w-3xl">
          {section.content}
        </p>
      </section>
    ))}

  </article>

</div>

      </div>

    </main>
  );
}
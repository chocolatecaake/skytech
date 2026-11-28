"use client";

import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import TableOfContents from "./toc";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/common/Button";

// ponytail: tiny block renderer for rich posts; old posts still use plain `content`
function Block({ block }) {
  const text = "body-large text-gray-700 leading-7 bg-background";
  switch (block.type) {
    case "h3":
      return (
        <h3 className="h4 font-bold mt-8 mb-2 bg-background">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className={`${text} list-disc pl-6 mb-4 space-y-1`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto mb-6">
          <table className="w-full min-w-[600px] border-collapse text-sm text-gray-700 bg-background">
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`border border-gray-300 p-3 align-top ${c === 0 ? "font-semibold" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "link":
      return (
        <p className={`${text} mb-4`}>
          <Link
            target="_blank"
            rel="noopener"
            href={block.href}
            className="text-red-600 font-semibold hover:underline"
          >
            {block.text} →
          </Link>
        </p>
      );
    default:
      return <p className={`${text} mb-4`}>{block.text}</p>;
  }
}

export default function BlogContent({ blog }) {
  return (
    <>
      <section>
        <main className="max-w-6xl mx-auto w-full min-w-0">
          <div className="mb-6 sticky top-24 z-10 pointer-events-none">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/blogs"
              className="pointer-events-auto inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors bg-background px-3 py-1.5 rounded-full shadow-sm"
            >
              <FaArrowLeft /> Back to Blogs
            </Link>
          </div>

          {/* Blog Header */}
          <motion.header
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero font-bold leading-tight inline-block border-b-4 border-red-600 pb-1 bg-background">
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
              className="w-full aspect-video object-cover rounded-xl"
            />

            {/* Author + Date */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-2 bg-background">
                <FaUser className="text-gray-400" />
                {blog.author}
              </span>

              <div className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0" />

              <span className="flex items-center gap-2 bg-background">
                <FaCalendarAlt className="text-gray-400" />
                {blog.date}
              </span>
            </div>
          </motion.div>
          {/* Blog Content */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <TableOfContents sections={blog.sections} />
            </aside>

            <article className="min-w-0">
              {blog.sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="mb-20 scroll-mt-32"
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
                  <h2 className="h2 font-bold border-l-4 border-red-600 pl-3 mb-4 bg-background">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="body-large text-gray-700 leading-7 bg-background">
                      {section.content}
                    </p>
                  )}

                  {section.blocks?.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </motion.div>
              ))}
            </article>
          </div>
        </main>
      </section>
      <CTASection
        img="/assets/construction.webp"
        title="Want to learn more about Skytech?"
        subtitle="Get a quotation from our experienced engineers"
        button={
          <Button
            variant="CTA"
            text="Download our brochure"
            href="/assets/Skytech%20Company%20Brochure.pdf"
            download="Skytech Company Brochure.pdf"
          />
        }
      />
    </>
  );
}

import { notFound } from "next/navigation";
import { visibleBlogs, SITE_URL } from "@/constants/blogs";
import BlogContent from "./BlogContent";

const findBlog = (slug) => visibleBlogs.find((b) => b.slug === slug);

// "22 Nov 2026" -> "2026-11-22", parsed as UTC so the day doesn't shift
const isoDate = (d) => (d ? new Date(`${d} UTC`).toISOString().slice(0, 10) : undefined);

export function generateStaticParams() {
  return visibleBlogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const blog = findBlog((await params).slug);
  if (!blog) return {};
  const url = `/blogs/${blog.slug}`;
  return {
    title: blog.title,
    description: blog.desc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.desc,
      images: [blog.img],
      publishedTime: isoDate(blog.date),
    },
    twitter: { card: "summary_large_image", title: blog.title, description: blog.desc, images: [blog.img] },
  };
}

// FAQ section convention: each h3 is a question, the plain text block right after it is the answer
function faqSchema(blog) {
  const blocks = blog.sections.find((s) => s.id === "faq")?.blocks ?? [];
  const mainEntity = blocks.flatMap((b, i) =>
    b.type === "h3" && blocks[i + 1]?.text && !blocks[i + 1].type
      ? [{ "@type": "Question", name: b.text, acceptedAnswer: { "@type": "Answer", text: blocks[i + 1].text } }]
      : []
  );
  return mainEntity.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity } : null;
}

export default async function BlogPage({ params }) {
  const blog = findBlog((await params).slug);
  if (!blog) notFound();

  const org = { "@type": "Organization", name: "Skytech UAE", url: SITE_URL };
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.desc,
    image: `${SITE_URL}${blog.img}`,
    datePublished: isoDate(blog.date),
    author: org,
    publisher: org,
    mainEntityOfPage: `${SITE_URL}/blogs/${blog.slug}`,
  };
  const schemas = [article, faqSchema(blog)].filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
      />
      <BlogContent blog={blog} />
    </>
  );
}

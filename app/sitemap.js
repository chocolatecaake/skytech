import { blogs, SITE_URL } from "@/constants/blogs";

const pages = ["", "/about", "/services", "/projects", "/certifications", "/gallery", "/contact", "/blogs"];

export default function sitemap() {
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
    // drafts never go in the sitemap, even in dev
    ...blogs
      .filter((b) => !b.draft)
      .map((b) => ({ url: `${SITE_URL}/blogs/${b.slug}`, lastModified: new Date(`${b.date} UTC`) })),
  ];
}

import { seo } from "@/constants/SEO";

// list page is a client component, so its metadata lives here
export const metadata = seo.blogs;

export default function BlogsLayout({ children }) {
  return children;
}

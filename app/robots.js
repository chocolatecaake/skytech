import { SITE_URL } from "@/constants/blogs";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}

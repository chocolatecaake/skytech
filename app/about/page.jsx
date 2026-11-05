import AboutClient from "./AboutClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.about;

export default function AboutPage() {
  return <AboutClient />;
}

import ServicesClient from "./ServicesClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.services;

export default function Page() {
  return <ServicesClient />;
}

import ContactClient from "./ContactClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.contact;

export default function Page() {
  return <ContactClient />;
}

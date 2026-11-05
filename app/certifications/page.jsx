import CertificationsClient from "./CertificationsClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.certifications;

export default function Page() {
  return <CertificationsClient />;
}

import GalleryClient from "./GalleryClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.gallery;

export default function Page() {
  return <GalleryClient />;
}

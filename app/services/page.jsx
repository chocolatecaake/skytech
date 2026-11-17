import ServicesClient from "./ServicesClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.services;

// ?open=<slug> picks the service to show expanded; #<slug> does the scrolling
export default async function Page({ searchParams }) {
  const { open } = await searchParams;
  // key: remount on a new ?open so only that service is expanded
  return <ServicesClient key={open} open={open} />;
}

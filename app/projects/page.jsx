import ProjectsClient from "./ProjectsClient";
import { seo } from "@/constants/SEO";

export const metadata = seo.projects;

export default function Page() {
  return <ProjectsClient />;
}

import { notFound } from "next/navigation";
import ProjectArticle from "@/components/sections/ProjectArticle";
import { articleSlugs, getProjectArticle, projectArticleMetadata } from "@/libs/project-articles";

export const dynamicParams = false;
export function generateStaticParams() { return articleSlugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }) { return projectArticleMetadata((await params).slug, "fr"); }
export default async function ProjectStory({ params }) {
  const article = getProjectArticle((await params).slug, "fr");
  if (!article) notFound();
  return <ProjectArticle article={article} locale="fr" />;
}

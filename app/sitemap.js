import { site } from "@/libs/seo";
import { articlePath, articleSlugs, getProjectArticle } from "@/libs/project-articles";

export default function sitemap() {
  const homepageEntries = ["/", "/fr"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: site.updatedAt,
    images: [`${site.url}/photo.jpg`],
    alternates: { languages: { en: `${site.url}/`, fr: `${site.url}/fr` } },
  }));
  return [...homepageEntries, ...articleSlugs.flatMap((slug) => ["en", "fr"].map((locale) => ({
    url: `${site.url}${articlePath(slug, locale)}`,
    lastModified: site.updatedAt,
    images: [`${site.url}${getProjectArticle(slug, locale).hero.src}`],
    alternates: { languages: { en: `${site.url}${articlePath(slug)}`, fr: `${site.url}${articlePath(slug, "fr")}` } },
  })))];
}

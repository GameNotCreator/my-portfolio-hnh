import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import ImageGallery from "@/components/elements/Images/ImageGallery";
import { articlePath, articleSlugs, getProjectArticle } from "@/libs/project-articles";
import { site } from "@/libs/seo";
import styles from "./ProjectArticle.module.css";

export default function ProjectArticle({ article, locale }) {
  const fr = locale === "fr";
  const home = fr ? "/fr" : "/";
  const { project } = article;
  const text = (en, french) => fr ? french : en;
  const related = articleSlugs.filter((slug) => slug !== article.slug && slug !== "a-bot").slice(0, 2).map((slug) => getProjectArticle(slug, locale));
  const image = typeof article.hero.src === "string" ? article.hero.src : article.hero.src.src;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${article.title}: ${article.subtitle}`,
    description: article.description,
    inLanguage: locale,
    mainEntityOfPage: `${site.url}${articlePath(article.slug, locale)}`,
    image: `${site.url}${image}`,
    author: { "@type": "Person", name: site.name, url: `${site.url}/` },
    dateModified: site.updatedAt,
  };
  return <main id="main-content" className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <article>
      <header className={styles.header}>
        <Link className={styles.back} href={`${home}#projects`}><ArrowLeft size={16} aria-hidden="true" />{text("Back to projects", "Retour aux projets")}</Link>
        <div className={styles.kicker}>
          {project.highlight && <span className={styles.selection}><Star size={13} fill="currentColor" aria-hidden="true" />{text("My selection", "Ma sélection")}</span>}
          <span>{article.eyebrow}</span>
        </div>
        <h1>{article.title}</h1>
        <p className={styles.subtitle}>{article.subtitle}</p>
        <div className={styles.byline}><span>Hedi Fourati</span><span>{article.period}</span><span>{article.readingTime}</span></div>
        <div className={styles.actions}>
          <a className="button button-primary" href="#the-story">{text("Read the story", "Lire le récit")}<ArrowRight size={16} aria-hidden="true" /></a>
          {project.previewType === "website" && <a className="button button-secondary" href={project.link} target="_blank" rel="noopener noreferrer">{text("Visit website", "Voir le site")}<ArrowUpRight size={16} aria-hidden="true" /></a>}
          {project.appStoreLink && <a className="button button-secondary" href={project.appStoreLink} target="_blank" rel="noopener noreferrer">App Store (iOS)<ArrowUpRight size={16} aria-hidden="true" /></a>}
        </div>
      </header>
      <figure className={styles.cover}>
        <div><Image src={article.hero.src} alt={article.hero.alt} width={1440} height={900} sizes="(min-width: 1152px) 1120px, calc(100vw - 32px)" priority /></div>
        <figcaption>{article.hero.caption}</figcaption>
      </figure>
      <dl className={styles.facts}>{article.facts.map(({ value, label, href }) => <div key={label}><dt>{label}</dt><dd>{href ? <a href={href.startsWith("#") ? `${home}${href}` : href}>{value}</a> : value}</dd></div>)}</dl>
      <div className={styles.readingLayout} id="the-story">
        <aside className={styles.sidebar}>
          <nav aria-label={text("In this story", "Dans ce récit")}>
            <p>{text("In this story", "Dans ce récit")}</p>
            <ol>
              <li><a href="#beginning">{text("The beginning", "Le point de départ")}</a></li>
              {article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
              <li><a href="#takeaway">{text("What stayed with me", "Ce que j’en retiens")}</a></li>
              {article.evidence && <li><a href="#recognition">{text("The prize & documents", "Le prix et les documents")}</a></li>}
            </ol>
          </nav>
          <p className={styles.roleLabel}>{text("My role", "Mon rôle")}</p><p className={styles.role}>{project.role}</p>
        </aside>
        <div className={styles.prose}>
          <section id="beginning" className={styles.introduction} aria-label={text("The beginning", "Le point de départ")}>{article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          {article.whySelected && <aside className={styles.why}><p className={styles.eyebrow}><Star size={13} fill="currentColor" aria-hidden="true" />{text("Why I chose this project", "Pourquoi ce projet compte pour moi")}</p><p>{article.whySelected}</p></aside>}
          {article.sections.map((section, index) => <section key={section.id} id={section.id} className={styles.chapter}>
            <p className={styles.chapterNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.photos?.length > 0 && <ImageGallery galleries={{ [article.title]: section.photos }} showCategoryTitles={false} showCaptions className={styles.gallery} imageSizes="(min-width: 1000px) 340px, (min-width: 600px) 42vw, calc(100vw - 32px)" />}
          </section>)}
          <section id="takeaway" className={styles.takeaway}><p className={styles.eyebrow}>{text("Looking back", "Avec du recul")}</p><h2>{article.takeaway.title}</h2>{article.takeaway.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
          {article.evidence && <section id="recognition" className={styles.evidence}>
            <p className={styles.eyebrow}>{text("The prize & documents", "Le prix et les documents")}</p>
            <h2>{article.evidence.title}</h2><p>{article.evidence.description}</p>
            <ImageGallery galleries={{ [article.title]: article.evidence.photos }} showCategoryTitles={false} showCaptions className={styles.gallery} imageSizes="(min-width: 1000px) 340px, (min-width: 600px) 42vw, calc(100vw - 32px)" />
            <div className={styles.documentLinks}>{article.evidence.links.map(({ href, label }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div>
            {article.slug === "gustave-motors" && <figure className={styles.quote}>
              <blockquote><p>{text("“Hedi demonstrates true leadership qualities, planning, mobilizing, and motivating his peers.”", "« Hedi y démontre de véritables qualités de leader en planifiant, en mobilisant et en motivant ses camarades. »")}</p></blockquote>
              <figcaption><strong>Alexandre Picaud</strong><span>{text("Assistant Principal, Lycée Gustave Flaubert", "Proviseur adjoint, Lycée Gustave Flaubert")}</span><a href={`${home}#references`}>{text("Read the recommendation", "Lire la recommandation")}<ArrowUpRight size={14} aria-hidden="true" /></a></figcaption>
            </figure>}
          </section>}
          <footer className={styles.articleFooter}>
            <p>{text("Have a question about this project?", "Une question sur ce projet ?")}</p><a href="mailto:hedi.fourati@epfl.ch">hedi.fourati@epfl.ch<ArrowUpRight size={16} aria-hidden="true" /></a>
            <Link href={`${home}#projects`}><ArrowLeft size={15} aria-hidden="true" />{text("Back to all projects", "Retour à tous les projets")}</Link>
          </footer>
        </div>
      </div>
    </article>
    <section className={styles.related} aria-labelledby="more-stories"><p className={styles.eyebrow}>{text("Keep exploring", "Continuer la lecture")}</p><h2 id="more-stories">{text("Other projects, other lessons.", "D’autres projets, d’autres apprentissages.")}</h2><div>{related.map((story) => <Link key={story.slug} href={articlePath(story.slug, locale)}><span><strong>{story.title}</strong><span>{story.subtitle}</span></span><ArrowRight size={20} aria-hidden="true" /></Link>)}</div></section>
  </main>;
}

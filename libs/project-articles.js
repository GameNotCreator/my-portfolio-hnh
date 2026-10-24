import tunisianpass from "@/libs/articles/tunisianpass";
import welockin from "@/libs/articles/welockin";
import { projectsData } from "@/libs/data";
import { localizeRecord, translate } from "@/libs/i18n";
import { site } from "@/libs/seo";

export const articleSlugs = ["tunisianpass", "welockin", "gustave-motors", "a-bot"];
export const articlePath = (slug, locale = "en") => `${locale === "fr" ? "/fr" : ""}/projects/${slug}`;

const engineering = {
  "gustave-motors": {
    en: {
      title: "Gustave Motors",
      subtitle: "The solar-electric car that started our engineering club.",
      description: "How we built a solar-electric car, founded a school engineering club and won the Projet X 2023 inter-zone high-school prize.",
      eyebrow: "Engineering · A personal favourite",
      period: "2022–2023",
      readingTime: "5 min read",
      intro: ["In early 2022, a few friends and I decided we wanted to build a solar-electric car. We had an idea, plenty to learn, and no engineering club yet. We went to the school administration, asked for permission to start one, and began recruiting.", "Around twenty students joined us in that first year. With a Tunisian mechatronics engineer and our technology teacher beside us, we gained access to the school’s technology lab. That gave us somewhere to turn our research into something we could actually build."],
      whySelected: "This is the project I’m most attached to. It asked me to take responsibility for people, money and decisions while learning how to build a car. I remember the trust our mentors placed in us as clearly as the first time the vehicle moved.",
      takeaway: { title: "The people behind the car", paragraphs: ["Some nights, we stayed in the school workshop until four in the morning. Before the competition, even getting the car ready for transport became a project of its own. Those moments taught me how much coordination sits behind a finished prototype.", "I made many of the decisions, but I could make them because people listened, challenged our ideas and shared their skills. I’m grateful to our team, our technology teacher Cédric Campo and our engineering mentor Seif Eddine El Jery. The prize belongs to the work we did together."] },
    },
    fr: {
      title: "Gustave Motors",
      subtitle: "La voiture électrique solaire à l’origine de notre club ingénieur.",
      description: "Comment nous avons construit une voiture électrique solaire, créé le club ingénieur du lycée et remporté le prix lycéen inter-zone de Projet X 2023.",
      eyebrow: "Ingénierie · Mon projet préféré",
      period: "2022–2023",
      readingTime: "5 min de lecture",
      intro: ["Début 2022, avec quelques amis, nous avons décidé de construire une voiture électrique solaire. Nous avions une idée, beaucoup à apprendre, et pas encore de club ingénieur. Nous sommes allés voir l’administration du lycée pour demander l’autorisation d’en créer un, puis nous avons commencé à recruter.", "Une vingtaine d’élèves nous ont rejoints cette première année. Avec l’aide d’un ingénieur tunisien en mécatronique et de notre professeur de technologie, nous avons eu accès au laboratoire du lycée. Nous avions enfin un endroit où transformer nos recherches en quelque chose de concret."],
      whySelected: "C’est le projet auquel je suis le plus attaché. Il m’a demandé de prendre des responsabilités humaines, financières et techniques tout en apprenant à construire une voiture. Je me souviens autant de la confiance de nos encadrants que de la première fois où le véhicule a roulé.",
      takeaway: { title: "Les personnes derrière la voiture", paragraphs: ["Certains soirs, nous sommes restés au laboratoire jusqu’à quatre heures du matin. Avant le concours, préparer le transport de la voiture est devenu un projet à part entière. Ces moments m’ont appris tout ce que la coordination représente derrière un prototype terminé.", "J’ai pris beaucoup de décisions, mais j’ai pu le faire parce que des personnes nous écoutaient, questionnaient nos idées et partageaient leurs compétences. Je suis reconnaissant envers notre équipe, notre professeur de technologie Cédric Campo et notre ingénieur formateur Seif Eddine El Jery. Ce prix récompense le travail que nous avons fait ensemble."] },
    },
  },
  "a-bot": {
    en: {
      title: "A-BOT",
      subtitle: "A small desk companion, built around a long working day.",
      description: "The story of A-BOT, our student robotics prototype exploring study habits and well-being, awarded the Projet X 2024 high-school prize.",
      eyebrow: "Engineering · Student robotics",
      period: "2023–2024",
      readingTime: "3 min read",
      intro: ["After Gustave Motors, we had to decide what our engineering club would build next. I had spent a demanding year balancing school, chess competitions, websites and long days working on the car. I kept coming back to the same concern: we could work hard without noticing how tired we were becoming.", "We wanted to explore a quieter project: a small companion that could stay on a student’s desk, notice aspects of their working environment and encourage better study habits. A-BOT grew from that idea."],
      whySelected: null,
      takeaway: { title: "What I took from A-BOT", paragraphs: ["A-BOT gave us a way to bring robotics, interaction design and our own experience as students into the same project. Coordinating the team still meant managing the budget, purchasing and practical decisions alongside our mentors.", "It also made us discuss what a companion should be allowed to observe and when it should intervene. Those questions stayed with me beyond the prototype. We received the Projet X 2024 high-school prize on 21 May 2024."] },
    },
    fr: {
      title: "A-BOT",
      subtitle: "Un petit compagnon de bureau, pensé à partir de nos journées de travail.",
      description: "L’histoire d’A-BOT, notre prototype étudiant de robot compagnon autour du travail et du bien-être, récompensé par le prix lycéen de Projet X 2024.",
      eyebrow: "Ingénierie · Robotique étudiante",
      period: "2023–2024",
      readingTime: "3 min de lecture",
      intro: ["Après Gustave Motors, il fallait décider du prochain projet du club ingénieur. Je venais de passer une année intense entre les cours, les compétitions d’échecs, les sites web et les longues journées sur la voiture. Une question revenait : nous pouvions travailler beaucoup sans remarquer à quel point nous étions fatigués.", "Nous voulions explorer un projet plus discret : un petit compagnon posé sur le bureau d’un étudiant, capable d’observer certains aspects de son environnement de travail et d’encourager de meilleures habitudes. A-BOT est né de cette idée."],
      whySelected: null,
      takeaway: { title: "Ce que je retiens d’A-BOT", paragraphs: ["A-BOT nous a permis de réunir la robotique, le design d’interaction et notre propre expérience d’élèves. Coordonner l’équipe signifiait toujours gérer le budget, les achats et les décisions concrètes avec nos encadrants.", "Le projet nous a aussi amenés à discuter de ce qu’un compagnon peut observer et du moment où il devrait intervenir. Ces questions m’ont accompagné au-delà du prototype. Nous avons reçu le prix lycéen de Projet X 2024 le 21 mai 2024."] },
    },
  },
};

function localizedPhoto(photo, locale) {
  const result = localizeRecord(photo, locale);
  return locale === "fr" ? { ...result, alt: photo.altFr || result.alt, caption: photo.captionFr || result.caption } : result;
}

export function getProjectArticle(slug, locale = "en") {
  if (!articleSlugs.includes(slug)) return null;
  const rawProject = projectsData.find((project) => project.id === slug);
  const project = localizeRecord(rawProject, locale);
  const source = slug === "tunisianpass" ? tunisianpass.locales[locale] : slug === "welockin" ? welockin.locales[locale] : engineering[slug][locale];
  const article = { ...source, slug, project, hero: { src: project.imageUrl, alt: project.imageAlt, caption: locale === "fr" ? `${project.title} · ${project.previewType === "website" ? "Aperçu du site" : project.subtitle || project.year}` : `${project.title} · ${project.previewType === "website" ? "Website preview" : project.subtitle || project.year}` } };
  if (slug === "welockin") {
    article.sections = source.sections.map((section) => ({ ...section,
      photos: section.id === "student-routine" ? [{ src: "/images/Work/welockin-schedule.webp", alt: locale === "fr" ? "Un ordinateur portable affichant le planning hebdomadaire de WeLockIn, sur un bureau près d’une fenêtre" : "A laptop showing WeLockIn’s weekly schedule on a desk by a window", caption: locale === "fr" ? "Le planning WeLockIn, pour organiser ses sessions à l’avance." : "The WeLockIn schedule, for planning work sessions in advance.", fit: "contain" }]
        : section.id === "ongoing-work" ? [{ src: "/images/Work/welockin-development.webp", alt: locale === "fr" ? "Gros plan sur un écran affichant les logs d’exécution de WeLockIn" : "Close-up of a screen showing WeLockIn runtime logs", caption: locale === "fr" ? "Dans les coulisses du développement : les logs d’exécution de WeLockIn." : "Behind the scenes of development: WeLockIn runtime logs.", fit: "contain" }] : [],
    }));
  }
  if (engineering[slug]) {
    const order = slug === "gustave-motors" ? [0, 1, 2, 3, 5] : [0, 1, 2];
    const photoIndexes = slug === "gustave-motors" ? [[], [0, 1], [2, 3], [4], []] : [[0], [1, 2], []];
    article.sections = order.map((index, sectionIndex) => ({ id: `chapter-${index + 1}`, title: project.story[index].label, paragraphs: [project.story[index].description], photos: photoIndexes[sectionIndex].map((photoIndex) => project.gallery[photoIndex]) }));
    article.facts = slug === "gustave-motors" ? project.caseStudy.facts : [
      { value: "2023–2024", label: locale === "fr" ? "Conception et réalisation" : "Design and build" },
      { value: "2022–2025", label: locale === "fr" ? "Président du club" : "Club president" },
      { value: "Projet X 2024", label: locale === "fr" ? "Prix lycéen" : "High-school prize" },
    ];
    article.evidence = {
      title: locale === "fr" ? `Nous avons remporté le prix lycéen${slug === "gustave-motors" ? " inter-zone" : ""}.` : `We won the ${slug === "gustave-motors" ? "inter-zone " : ""}high-school prize.`,
      description: slug === "gustave-motors" ? (locale === "fr" ? "Projet X 2023 · Le trophée et notre équipe sur le podium." : "Projet X 2023 · The trophy and our team on the podium.") : (locale === "fr" ? "Projet X 2024 · 21 mai 2024" : "Projet X 2024 · 21 May 2024"),
      photos: slug === "gustave-motors" ? [rawProject.caseStudy.eventGallery[0], rawProject.caseStudy.eventGallery[6]].map((photo) => localizedPhoto(photo, locale)) : [{ src: "/certificates/projet-x-2024.webp", alt: translate("Projet X 2024 · High-school prize", locale), caption: locale === "fr" ? "Diplôme du prix lycéen · 21 mai 2024" : "High-school prize certificate · 21 May 2024", fit: "contain" }],
      links: [
        { label: locale === "fr" ? (slug === "gustave-motors" ? "Certificat de participation" : "Diplôme du prix") : (slug === "gustave-motors" ? "Participation certificate" : "Award certificate"), href: `/certificates/projet-x-${slug === "gustave-motors" ? "2023" : "2024"}.pdf` },
        { label: translate("Sworn English translation", locale), href: `/certificates/projet-x-${slug === "gustave-motors" ? "2023" : "2024"}-sworn-en.pdf` },
        { label: locale === "fr" ? "L’article du club" : "The club’s article", href: project.link },
      ],
    };
    if (slug === "gustave-motors") article.sections.find((section) => section.id === "chapter-6").photos = rawProject.caseStudy.eventGallery.slice(1, 6).map((photo) => localizedPhoto(photo, locale));
  }
  return article;
}

export function projectArticleMetadata(slug, locale) {
  const article = getProjectArticle(slug, locale);
  if (!article) return {};
  const title = `${article.title}: ${article.subtitle}`;
  const image = typeof article.hero.src === "string" ? article.hero.src : article.hero.src.src;
  return {
    title: { absolute: `${title} | Hedi Fourati` },
    description: article.description,
    alternates: { canonical: articlePath(slug, locale), languages: { en: articlePath(slug), fr: articlePath(slug, "fr"), "x-default": articlePath(slug) } },
    openGraph: { type: "article", url: `${site.url}${articlePath(slug, locale)}`, title, description: article.description, locale: locale === "fr" ? "fr_FR" : "en_US", alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"], authors: [site.name], images: [{ url: image, alt: article.hero.alt }] },
    twitter: { card: "summary_large_image", title, description: article.description, images: [image] },
  };
}

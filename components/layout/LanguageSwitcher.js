"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/libs/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  const englishPath = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
  const frenchPath = `/fr${englishPath === "/" ? "" : englishPath}`;
  const [hash, setHash] = useState("");
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);
  return <div className="language-switcher" role="group" aria-label={t("Language")}>
    <a href={`${englishPath}${hash}`} lang="en" hrefLang="en" aria-label="English" aria-current={locale === "en" ? "page" : undefined}>EN</a>
    <a href={`${frenchPath}${hash}`} lang="fr" hrefLang="fr" aria-label="Français" aria-current={locale === "fr" ? "page" : undefined}>FR</a>
  </div>;
}

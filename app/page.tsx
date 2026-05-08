"use client";

import { useState } from "react";
import { useAnimations } from "./useAnimations";

const content = {
  en: {
    heroTitle: (
      <>
        Roasted <em>close.</em> / Brewed honest. / Drunk slow.
      </>
    ),
    heroLead:
      "This season: a washed Caturra from Huila, Colombia. Clean cup, steady sweetness, roasted in small batches in Mile End.",
    heroCta: "Read this season",
    beanTitle: (
      <>
        The <em>bean</em> we have right now
      </>
    ),
    beanA:
      "Origin: Huila, Colombia. Varietal: Caturra. Altitude: 1,850 m. Drying method: raised beds, slow shade finish. Taste in three words: pear, cocoa, almond.",
    beanB:
      "As filter, it stays clear and structured at 1:16. As espresso, it gains body and soft cocoa, best between 18 g in and 40 g out.",
    roastTitle: (
      <>
        Roast <em>styles</em>
      </>
    ),
    roasts: [
      "Filter — light roast, clean acidity, longer finish. For drinkers who want detail first. Best used within 30 days of roast. Suggested ratio: 1:16.",
      "Espresso — medium roast, rounder body, lower sharpness. For milk drinks or straight shots with balance. Suggested start: 18 g in, 38–42 g out.",
      "Darker single-batch — limited roast, deeper cocoa, lower brightness. For drinkers who want weight without burnt edges. Drink within 45 days.",
    ],
    subscriptionTitle: (
      <>
        The <em>subscription</em>
      </>
    ),
    subscription:
      "A 250 g monthly bag, chosen from the current roast cycle. Member’s notes included: source, roast date, brew starting point, and what changed from last month.",
    subscriptionCta: "Become a member",
    findTitle: (
      <>
        Find <em>us</em>
      </>
    ),
    findA:
      "Nord Roasters works from Mile End, Montréal. Beans are cupped every Wednesday at 10:00. Visitors are welcome when the door is open.",
    findB:
      "5333 Casgrain Avenue, Montréal. Wednesday cupping: 10:00–11:00. Roastery hours: Tue–Fri, 9:00–16:00.",
    footer: "Nord Roasters · 2026 · Tiohtià:ke / Mile End / Montréal",
  },
  fr: {
    heroTitle: (
      <>
        Torréfié <em>près.</em> / Préparé sans tour de force. / Bu lentement.
      </>
    ),
    heroLead:
      "Cette saison : un Caturra lavé de Huila, Colombie. Tasse nette, douceur stable, torréfié en petits lots dans le Mile End.",
    heroCta: "Lire la saison",
    beanTitle: (
      <>
        Le <em>grain</em> que nous avons maintenant
      </>
    ),
    beanA:
      "Origine : Huila, Colombie. Variété : Caturra. Altitude : 1 850 m. Méthode de séchage : lits surélevés, finition lente à l’ombre. Goût en trois mots : poire, cacao, amande.",
    beanB:
      "En filtre, il reste clair et structuré à 1:16. En espresso, il prend du corps et un cacao doux, idéal autour de 18 g en entrée et 40 g en sortie.",
    roastTitle: (
      <>
        Styles de <em>torréfaction</em>
      </>
    ),
    roasts: [
      "Filtre — torréfaction légère, acidité nette, finale plus longue. Pour boire le détail avant tout. Idéal dans les 30 jours suivant la torréfaction. Ratio suggéré : 1:16.",
      "Espresso — torréfaction moyenne, corps plus rond, moins de pointe acide. Pour les boissons avec lait ou les shots équilibrés. Départ suggéré : 18 g en entrée, 38 à 42 g en sortie.",
      "Lot plus foncé — torréfaction limitée, cacao plus profond, moins d’éclat. Pour boire plus de corps sans goût brûlé. À boire dans les 45 jours.",
    ],
    subscriptionTitle: (
      <>
        L’<em>abonnement</em>
      </>
    ),
    subscription:
      "Un sac mensuel de 250 g, choisi selon le cycle de torréfaction en cours. Notes de membre incluses : source, date de torréfaction, point de départ d’infusion et ce qui a changé depuis le mois précédent.",
    subscriptionCta: "Devenir membre",
    findTitle: (
      <>
        Nous <em>trouver</em>
      </>
    ),
    findA:
      "Nord Roasters travaille dans le Mile End, à Montréal. Les grains sont dégustés chaque mercredi à 10 h. Les visites sont possibles quand la porte est ouverte.",
    findB:
      "5333, avenue Casgrain, Montréal. Dégustation du mercredi : 10 h à 11 h. Heures de torréfaction : mardi au vendredi, 9 h à 16 h.",
    footer: "Nord Roasters · 2026 · Tiohtià:ke / Mile End / Montréal",
  },
};

function CupMark() {
  return (
    <svg className="cup-mark" viewBox="0 0 220 220" aria-hidden="true">
      <path d="M54 82h96v46c0 31-20 50-48 50s-48-19-48-50V82Z" />
      <path d="M150 96h17c14 0 24 10 24 23s-10 23-24 23h-17" />
      <path d="M75 55c-8-13 7-20 0-33" />
      <path d="M110 55c-8-13 7-20 0-33" />
      <path d="M145 55c-8-13 7-20 0-33" />
      <path d="M45 184h134" />
    </svg>
  );
}

export default function Page() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = content[lang];

  useAnimations();

  return (
    <main>
      {/* nord-roasters: single-client implementation, warm coffee system. */}
      <div className="language-switch" aria-label="Language toggle">
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
          EN
        </button>
        <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>
          FR
        </button>
      </div>

      <section className="hero">
        <div className="hero-image reveal-image">
          <img src="/assets/hero.jpg" alt="" />
        </div>
        <div className="hero-copy">
          <p className="kicker reveal">Mile End / Montréal</p>
          <h1 className="split-heading">{t.heroTitle}</h1>
          <p className="lead reveal">{t.heroLead}</p>
          <a className="button reveal" href="#season">
            {t.heroCta}
          </a>
        </div>
      </section>

      <section id="season" className="section bean-section">
        <div className="section-number reveal">01</div>
        <div className="section-copy reveal">
          <h2 className="split-heading">{t.beanTitle}</h2>
          <div className="two-column-text">
            <p>{t.beanA}</p>
            <p>{t.beanB}</p>
          </div>
        </div>
      </section>

      <section className="section roast-section">
        <div className="section-number reveal">02</div>
        <div className="section-copy">
          <h2 className="split-heading">{t.roastTitle}</h2>
          <div className="roast-grid">
            {t.roasts.map((roast, index) => (
              <article className="roast-card reveal" key={roast}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{roast}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="membership">
        <div className="membership-visual reveal">
          <CupMark />
        </div>
        <div className="membership-copy reveal">
          <p className="kicker">Monthly / 250 g</p>
          <h2 className="split-heading">{t.subscriptionTitle}</h2>
          <p>{t.subscription}</p>
          <a className="button" href="mailto:hello@nordroasters.example">
            {t.subscriptionCta}
          </a>
        </div>
      </section>

      <section className="section find-section">
        <div className="section-number reveal">03</div>
        <div className="section-copy reveal">
          <h2 className="split-heading">{t.findTitle}</h2>
          <div className="address-block">
            <p>{t.findA}</p>
            <p>{t.findB}</p>
          </div>
        </div>
      </section>

      <footer className="footer reveal">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
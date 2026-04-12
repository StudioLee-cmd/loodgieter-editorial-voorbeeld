/* ===================================================================
   LOODGIETER (AquaFix Voorbeeld) — editorial-bold customization
   =================================================================== */

export const config = {
  name: "AquaFix Voorbeeld",
  tagline: "Uw loodgieter in Amsterdam — snel, vakkundig, betrouwbaar",

  nav: [
    { label: "Over ons", href: "#intro" },
    { label: "Diensten", href: "#features" },
    { label: "Projecten", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    bg: "#0B2A3C",
    backgroundImage: "/images/hero.jpg",
    foregroundImage: "",
    logoImage: "",
    subtitle: "Loodgieter in Amsterdam. Lekkages, CV-ketels, badkamers en riool — 24/7 spoed beschikbaar.",
  },

  intro: {
    text: [
      "Wij lossen elk",
      "waterprobleem op —",
      "van druppelende kraan tot",
      "complete badkamerrenovatie.",
    ],
    accentWords: ["waterprobleem", "druppelende kraan", "badkamerrenovatie"],
    sideImage: "/images/craft.jpg",
  },

  showcase: {
    title: "2.500+",
    subtitle: "Klussen opgelost",
    description:
      "Van spoedlekkages midden in de nacht tot complete leidingwerk-vervangingen. Elke klus met dezelfde zorg en kwaliteit.",
    image: "/images/project1.jpg",
  },

  banner: {
    bg: "#1565A0",
    video: "",
    lines: [
      { text: "Al meer dan", style: "italic" as const },
      { text: "15 jaar", style: "display" as const },
      { text: "uw loodgieter in", style: "italic" as const },
      { text: "Amsterdam", style: "display" as const },
    ],
  },

  columns: {
    title: "Onze diensten",
    items: [
      {
        name: "Lekkage & Spoed",
        color: "#0B2A3C",
        textColor: "#E8F0F6",
        image: "/images/project1.jpg",
        description:
          "24/7 bereikbaar voor spoedlekkages. Wij lokaliseren het lek met thermografie en repareren het dezelfde dag nog.",
        cta: "Meer over lekkage",
        href: "#features",
      },
      {
        name: "CV-ketel & Verwarming",
        color: "#1565A0",
        textColor: "#E8F0F6",
        image: "/images/project2.jpg",
        description:
          "Installatie, onderhoud en storing van alle CV-ketelmerken. Erkend installateur met fabrieksgarantie.",
        cta: "Meer over CV-ketels",
        href: "#features",
      },
      {
        name: "Badkamer & Riool",
        color: "#4EAAD5",
        textColor: "#0B2A3C",
        image: "/images/kitchen.jpg",
        description:
          "Complete badkamerrenovaties en rioolontstoppingen. Van ontwerp tot oplevering — alles uit één hand.",
        cta: "Meer over badkamers",
        href: "#features",
      },
    ],
  },

  visionCards: [
    {
      index: "01",
      title: "24/7 Spoedservice",
      description:
        "Wateroverlast wacht niet tot kantooruren. Wij zijn dag en nacht bereikbaar en staan binnen 45 minuten bij u op de stoep.",
      image: "/images/detail.jpg",
    },
    {
      index: "02",
      title: "Erkend & Gecertificeerd",
      description:
        "Alle monteurs zijn VCA-gecertificeerd en erkend installateur. Wij werken volgens de laatste normen en geven garantie op elk onderdeel.",
      image: "/images/team.jpg",
    },
    {
      index: "03",
      title: "Vaste prijsafspraak",
      description:
        "Geen verrassingen achteraf. U ontvangt vooraf een duidelijke offerte met vaste prijs — ook bij spoedklussen.",
      image: "/images/about.jpg",
    },
    {
      index: "04",
      title: "5 jaar garantie",
      description:
        "Op al ons werk geven wij 5 jaar garantie. Materiaal en arbeid inbegrepen. Vakwerk dat u jarenlang geen zorgen geeft.",
      image: "/images/carousel.jpg",
    },
  ],

  customize: {
    title: "Vrijblijvende offerte voor uw project",
    highlightWord: "offerte",
    video: "",
    label: "Plan een gratis inspectie",
  },

  team: [
    {
      name: "Stefan de Vries",
      role: "Oprichter & Hoofdmonteur",
      bio: "15 jaar ervaring als loodgieter. Persoonlijk betrokken bij elke klus.",
      image: "/images/team-1.png",
    },
    {
      name: "Rick Bakker",
      role: "Specialist CV-ketels",
      bio: "Erkend installateur voor alle grote ketelmerken.",
      image: "/images/team-2.png",
    },
    {
      name: "Dennis Mulder",
      role: "Badkamer & Sanitair",
      bio: "Van tegels tot leidingwerk — complete badkamers uit eigen hand.",
      image: "/images/team-3.png",
    },
    {
      name: "Youssef El Amrani",
      role: "Spoed & Rioolservice",
      bio: "Dag en nacht paraat voor lekkages en verstoppingen.",
      image: "/images/team-4.png",
    },
  ],

  faq: [
    {
      question: "Wat kost een spoedlekkage reparatie?",
      answer:
        "Een standaard lekkagereparatie begint vanaf €150 inclusief voorrijkosten. Bij spoed buiten kantooruren geldt een toeslag. U ontvangt altijd vooraf een prijsindicatie zodat u niet voor verrassingen komt te staan.",
    },
    {
      question: "Hoe snel kunnen jullie er zijn bij een lekkage?",
      answer:
        "Bij spoedlekkages in Amsterdam zijn wij gemiddeld binnen 45 minuten ter plaatse. Wij zijn 24 uur per dag, 7 dagen per week bereikbaar — ook in het weekend en op feestdagen.",
    },
    {
      question: "Installeren jullie ook nieuwe CV-ketels?",
      answer:
        "Ja, wij zijn erkend installateur voor alle grote merken zoals Remeha, Intergas, Nefit en Vaillant. Inclusief aanvraag van subsidie voor energiezuinige modellen en tot 10 jaar fabrieksgarantie.",
    },
    {
      question: "Kunnen jullie een complete badkamer renoveren?",
      answer:
        "Absoluut. Van ontwerp en sloopwerk tot installatie van sanitair, tegels en leidingwerk. Alles wordt door ons eigen team uitgevoerd — geen onderaannemers, één aanspreekpunt.",
    },
    {
      question: "Geven jullie garantie op het werk?",
      answer:
        "Wij geven 5 jaar garantie op al ons werk, inclusief materiaal en arbeid. Bij CV-ketelinstallaties geldt daarnaast de fabrieksgarantie van de ketel zelf (vaak 5 tot 10 jaar).",
    },
  ],

  footer: {
    cta: "Bel direct of plan een afspraak",
    ctaHref: "https://calendly.com/tim-studiolee",
    links: [
      { label: "info@aquafix-voorbeeld.nl", href: "mailto:info@aquafix-voorbeeld.nl" },
      { label: "AquaFix-Voorbeeld.nl", href: "https://www.aquafix-voorbeeld.nl" },
    ],
    credit: "Speciaal gemaakt voor loodgieters door StudioLee.nl",
  },
};

export type SiteConfig = typeof config;

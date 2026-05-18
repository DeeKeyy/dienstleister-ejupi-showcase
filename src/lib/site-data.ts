import pflasterImg from "@/assets/service-pflaster.jpg";
import rasenImg from "@/assets/service-rasen.jpg";
import baumImg from "@/assets/service-baum.jpg";
import winterImg from "@/assets/service-winter.jpg";
import ref1 from "@/assets/ref-1.jpg";
import ref2 from "@/assets/ref-2.jpg";
import ref3 from "@/assets/ref-3.jpg";

export const SERVICES = [
  {
    slug: "landschaftsbau",
    title: "Landschaftsbau & Pflasterarbeiten",
    short: "Wege, Terrassen, Mauern und Einfahrten — präzise verlegt mit langlebigen Materialien.",
    long:
      "Wir gestalten Außenanlagen mit Sinn für Detail. Ob Natursteinterrasse, Pflasterweg, Stützmauer oder komplette Gartenneuanlage — wir planen, beraten und realisieren mit Materialien, die zu Ihrem Haus passen.",
    image: pflasterImg,
    bullets: [
      "Pflaster- und Plattenverlegung",
      "Trockenmauern und Stützmauern",
      "Garten- und Wegeplanung",
      "Erdarbeiten und Drainagen",
    ],
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege & Rasenmähen",
    short: "Regelmäßige Pflege für ein gepflegtes Erscheinungsbild — privat und gewerblich.",
    long:
      "Vom wöchentlichen Rasenmähen über Heckenschnitt bis zur Beetpflege — wir halten Ihren Garten in Form. Auf Wunsch auch als Jahresvertrag mit fixen Terminen.",
    image: rasenImg,
    bullets: [
      "Rasen mähen, vertikutieren, düngen",
      "Heckenschnitt und Formgehölz",
      "Unkraut- und Beetpflege",
      "Saisonale Pflegeverträge",
    ],
  },
  {
    slug: "baumfaellung",
    title: "Baumfällung & Wurzelentfernung",
    short: "Sichere Fällungen und fachgerechte Entfernung — auch in beengten Grundstücken.",
    long:
      "Wir fällen Bäume sicher und sauber, entfernen Wurzelstöcke mit modernem Gerät und entsorgen das Schnittgut. Mit Klettertechnik auch dort, wo kein Kran hinkommt.",
    image: baumImg,
    bullets: [
      "Baumfällung mit Seilklettertechnik",
      "Wurzelstockfräsen",
      "Kronenpflege und Auslichtung",
      "Entsorgung des Schnittguts",
    ],
  },
  {
    slug: "winterdienst",
    title: "Winterdienst & Hausmeisterservice",
    short: "Zuverlässig im Winter, ganzjährig für Ihre Immobilie da.",
    long:
      "Schneeräumung, Streudienst und allgemeiner Hausmeisterservice — pünktlich, zuverlässig und nach Räum- und Streupflicht. Im Sommer wie im Winter.",
    image: winterImg,
    bullets: [
      "Schneeräumung und Streudienst",
      "Treppenhausreinigung",
      "Allgemeine Hausmeistertätigkeiten",
      "24/7 Bereitschaft im Winter",
    ],
  },
] as const;

export const REFERENCES = [
  {
    title: "Terrassengarten mit Trockenmauer",
    location: "Kirchheim unter Teck",
    image: ref1,
    type: "Landschaftsbau",
  },
  {
    title: "Vorgarten mit Pflastereinfahrt",
    location: "Dettingen unter Teck",
    image: ref2,
    type: "Pflasterarbeiten",
  },
  {
    title: "Mediterraner Innenhof",
    location: "Owen",
    image: ref3,
    type: "Gartengestaltung",
  },
] as const;

export const JOBS = [
  {
    title: "Landschaftsgärtner (m/w/d)",
    type: "Vollzeit",
    description:
      "Ausgebildete Fachkraft für Landschaftsbau mit Berufserfahrung. Du arbeitest selbstständig auf Baustellen in der Region.",
  },
  {
    title: "Helfer im Garten- & Landschaftsbau (m/w/d)",
    type: "Vollzeit / Teilzeit",
    description:
      "Quereinsteiger willkommen. Wir bringen dir das Handwerk bei. Wichtig: Anpacken können und Spaß an Arbeit im Freien.",
  },
  {
    title: "Auszubildender Landschaftsgärtner (m/w/d)",
    type: "Ausbildung",
    description:
      "Starte deine Ausbildung in einem familiären Betrieb mit modernen Maschinen und vielseitigen Projekten.",
  },
] as const;

export const CONTACT = {
  phone: "01520 1600 202",
  phoneHref: "tel:+4915201600202",
  email: "ejupiburim@googlemail.com",
  address: {
    street: "Aichelbergstraße 15",
    city: "73230 Kirchheim unter Teck",
  },
};

export const MYHAMMER_URL = "https://www.my-hammer.de/auftragnehmer/dienstleister-ejupi"; // Bitte bei Bedarf durch den echten Link ersetzen!

export const REVIEWS = [
  {
    author: "Kunde aus Deggingen",
    date: "9. April 2026",
    rating: 5,
    service: "Pflegen von Gärten: 100 m²; Rasen mähen, Zaunanbringen",
    text: "Super Service von Anfang bis Ende sehr freundlich und zuverlässig …kann ich nur weiter empfehlen…",
    source: "MyHammer"
  },
  {
    author: "Kunde aus Esslingen",
    date: "13. Oktober 2025",
    rating: 5,
    service: "Spezialmontage",
    text: "Ein 3 Meter langes Logo wurde an unserer Außenfassade in 8 Metern Höhe angebracht – sehr sauber, präzise und schnell gearbeitet. Hervorragendes Preis-Leistungs-Verhältnis!",
    source: "MyHammer"
  },
  {
    author: "Maximo, Weinstadt",
    date: "5. Juli 2025",
    rating: 5,
    service: "Anlage und Gestaltung von Gärten: 60 m²; Garten anlegen, Garten umgraben",
    text: "Herr Ejupi und sein Team sind sehr zuverlässig, schnell und arbeiten sehr sauber. Sie arbeiten zudem sehr präzise und Herr Ejupi hat immer wieder betont, dass er immer alles so macht, wie er es auch bei sich zuhause machen würde. Was das Team in der kurzen Zeit aus unserem Garten gemacht hat ist der Wahnsinn. Alle waren immer sehr nett und der Preis war fair. Ich kann jedem empfehlen sich an Herrn Ejupi zu wenden, denn da ist man definitiv an der richtigen Adresse. Nochmal vielen Dank für alles!",
    source: "MyHammer"
  },
  {
    author: "Sabine, Reutlingen",
    date: "09. April 2025",
    rating: 5,
    service: "Anlage und Gestaltung von Gärten",
    text: "Herr Ejupi hat ganz hervorragend gearbeitet. Er war pünktlich, zuverlässig, hilfsbereit und äußerst höflich. Meinen nächsten Auftrag werde ich mit Sicherheit an Herrn Ejupi vergeben.",
    source: "MyHammer"
  },
  {
    author: "Kunde aus Stuttgart",
    date: "02. April 2025",
    rating: 5,
    service: "Anlegen und Ausbessern von Gartenwegen",
    text: "Herr Ejupi war pünktlich und zuverlässig machte seine Arbeit sehr gut. Vielen Dank",
    source: "MyHammer"
  },
  {
    author: "Ralph, Holzmaden",
    date: "29. März 2025",
    rating: 5,
    service: "Anlegen und Pflegen von Gartenteichen: 80 m Tiefe; Instandhaltung",
    text: "Alles Top",
    source: "MyHammer"
  },
  {
    author: "Thomas, Nürtingen",
    date: "20. November 2024",
    rating: 5,
    service: "Entrümpelung: 45 m²; kleines Ladengeschäft",
    text: "Vielen Dank an Herrn Ejupi. War alles zur vollsten Zufriedenheit. Pünktlich, fleißig, faire Preisfindung. Kann ich nur empfehlen. Gerne wieder.",
    source: "MyHammer"
  },
  {
    author: "Kunde aus Wernau",
    date: "18. November 2024",
    rating: 5,
    service: "Pflasterarbeiten: 20 m²; Pflastern; Garten oder Innenhof",
    text: "Die Arbeit wurde zur vollsten Zufriedenheit erledigt. Gerne wieder.",
    source: "MyHammer"
  }

];


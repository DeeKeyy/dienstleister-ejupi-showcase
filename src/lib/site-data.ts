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

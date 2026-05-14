import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Dienstleister Ejupi" },
      {
        name: "description",
        content:
          "Landschaftsbau, Pflasterarbeiten, Gartenpflege, Baumfällung und Winterdienst in Kirchheim unter Teck und Umgebung.",
      },
      { property: "og:title", content: "Leistungen — Dienstleister Ejupi" },
      {
        property: "og:description",
        content: "Alle Leistungen rund um Garten und Haus aus einer Hand.",
      },
      { property: "og:url", content: "/leistungen" },
    ],
    links: [{ rel: "canonical", href: "/leistungen" }],
  }),
  component: LeistungenPage,
});

function LeistungenPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Leistungen</p>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl text-balance max-w-3xl">
          Alles, was Ihr Häusle braucht.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Vier Kernbereiche, ein Ansprechpartner. Wir betreuen Ihr Grundstück das ganze Jahr über —
          von der Gestaltung über die Pflege bis zum Winterdienst.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto space-y-24">
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-primary tracking-widest">
                0{i + 1} / 0{SERVICES.length}
              </p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl text-balance">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.long}</p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <Check className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold"
              >
                Angebot anfragen <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

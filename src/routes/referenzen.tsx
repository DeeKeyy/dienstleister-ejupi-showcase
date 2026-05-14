import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { REFERENCES } from "@/lib/site-data";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen — Dienstleister Ejupi" },
      {
        name: "description",
        content:
          "Ausgewählte Garten- und Landschaftsbau-Projekte aus Kirchheim unter Teck und Umgebung.",
      },
      { property: "og:title", content: "Referenzen — Dienstleister Ejupi" },
      { property: "og:description", content: "Unsere Projekte aus der Region." },
      { property: "og:url", content: "/referenzen" },
    ],
    links: [{ rel: "canonical", href: "/referenzen" }],
  }),
  component: ReferenzenPage,
});

function ReferenzenPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Referenzen</p>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl text-balance max-w-3xl">
          Projekte, die für sich sprechen.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Ein kleiner Auszug aus unseren Arbeiten in und um Kirchheim unter Teck.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {REFERENCES.map((r, i) => (
            <article
              key={r.title}
              className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`overflow-hidden bg-muted ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{r.type}</p>
                  <h2 className="font-display text-2xl mt-1">{r.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground inline-flex items-center gap-1">
                  <MapPin className="size-3.5" /> {r.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

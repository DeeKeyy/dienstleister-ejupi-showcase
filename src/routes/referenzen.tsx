import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { REFERENCES, MYHAMMER_URL } from "@/lib/site-data";
import { ReviewCarousel } from "@/components/ReviewCarousel";

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
    <div className="overflow-hidden">
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Referenzen
          </div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-4xl text-heading drop-shadow-xl">
            Projekte, die für sich <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400 italic">sprechen.</span>
          </h1>
          <p className="mt-8 text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Ein kleiner Auszug aus unseren Arbeiten in und um Kirchheim unter Teck.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {REFERENCES.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group surface-panel p-3 flex flex-col hover:-translate-y-1 transition-all duration-300 ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden rounded-2xl relative ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-0"
                />
              </div>
              <div className="mt-6 px-6 pb-6 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2 drop-shadow-sm">{r.type}</p>
                  <h2 className="font-display text-2xl sm:text-3xl text-heading group-hover:text-accent transition-colors">{r.title}</h2>
                </div>
                <p className="text-sm text-foreground/70 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">
                  <MapPin className="size-4 text-accent" /> {r.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bewertungen Section */}
      <section className="px-6 pb-32 max-w-7xl mx-auto relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10 rounded-[3rem]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 mb-12 sm:mb-16 text-center sm:text-left"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Bewertungen
            </p>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl text-heading">Das sagen unsere Kunden</h2>
          </div>
          <a
            href={MYHAMMER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent-foreground inline-flex items-center justify-center gap-2 hover:gap-3 transition-all bg-accent hover:bg-accent/90 w-full sm:w-auto px-8 py-4 rounded-2xl shadow-[0_4px_20px_rgba(166,124,82,0.3)] hover:-translate-y-1"
          >
            Alle Bewertungen auf MyHammer
            <ExternalLink className="size-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <ReviewCarousel />
        </motion.div>
      </section>
    </div>
  );
}

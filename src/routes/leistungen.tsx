import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, ShieldCheck, Leaf, Tractor, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
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

const icons = [Tractor, Leaf, ShieldCheck, Snowflake];

function LeistungenPage() {
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
            Leistungen
          </div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-4xl text-heading drop-shadow-xl">
            Alles, was Ihr <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400 italic">Häusle</span> braucht.
          </h1>
          <p className="mt-8 text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Vier Kernbereiche, ein Ansprechpartner. Wir betreuen Ihr Grundstück das ganze Jahr über —
            von der Gestaltung über die Pflege bis zum Winterdienst.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto space-y-32 relative z-10">
        {SERVICES.map((s, i) => {
          const Icon = icons[i] || ShieldCheck;
          return (
            <motion.article
              key={s.slug}
              id={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-32 relative"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] -z-10" />
                  <div className="aspect-[4/3] surface-panel p-2 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[1.25rem] relative z-0 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex size-14 rounded-2xl bg-accent/10 items-center justify-center mb-6 border border-accent/20 text-accent">
                  <Icon className="size-6" />
                </div>
                <h2 className="font-display text-3xl lg:text-5xl text-balance text-heading">{s.title}</h2>
                <p className="mt-6 text-lg text-foreground/70 leading-relaxed">{s.long}</p>
                <ul className="mt-8 space-y-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-4 items-center text-heading/90">
                      <div className="size-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                        <Check className="size-3.5 text-accent" />
                      </div>
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-[0_4px_20px_rgba(166,124,82,0.3)] hover:-translate-y-1 transition-all group"
                >
                  Angebot anfragen <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
}

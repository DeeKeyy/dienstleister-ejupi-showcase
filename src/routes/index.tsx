import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import { SERVICES, REFERENCES, MYHAMMER_URL } from "@/lib/site-data";
import { ReviewCarousel } from "@/components/ReviewCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dienstleister Ejupi — Garten- & Landschaftsbau Kirchheim" },
      {
        name: "description",
        content:
          "Service rund ums Häusle. Garten- und Landschaftsbau, Pflasterarbeiten, Pflege, Baumfällung und Winterdienst in Kirchheim unter Teck.",
      },
      { property: "og:title", content: "Dienstleister Ejupi — Service rund ums Häusle" },
      {
        property: "og:description",
        content: "Garten- und Landschaftsbau aus Kirchheim unter Teck.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Garten- & Landschaftsbau · Kirchheim u. Teck
            </div>
            <h1 className="font-display text-6xl lg:text-8xl leading-[1.05] text-balance text-white drop-shadow-xl">
              Service rund <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">ums Häusle.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/80 max-w-md leading-relaxed">
              Wir gestalten, pflegen und erhalten Ihren Außenbereich in Kirchheim unter Teck und
              Umgebung — mit Leidenschaft, Präzision und schwäbischer Sorgfalt.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary/90 hover:bg-primary text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all backdrop-blur-md border border-primary/50 group"
              >
                Jetzt anfragen <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-panel text-white font-semibold hover:bg-white/10 transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/60">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Kostenloses Angebot
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Familienbetrieb
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> Region Kirchheim
              </span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-[50vh] lg:h-[70vh] min-h-[500px]"
          >
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden glass-panel p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 rounded-[2.5rem]" />
              <img
                src={heroImg}
                alt="Modern gestalteter Garten"
                className="w-full h-full object-cover rounded-[2.5rem] relative z-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
              Unsere Leistungen
            </p>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl text-balance text-white">
              Alles aus einer Hand — vom Pflaster bis zur Pflege.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to="/leistungen"
                  hash={s.slug}
                  className="group glass-panel p-8 rounded-3xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="mb-8 size-14 rounded-2xl flex items-center justify-center bg-primary/10 text-primary border border-primary/20 font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl mb-4 leading-tight text-white group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">{s.short}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="size-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-32 relative">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">Über uns</p>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl text-balance text-white">
              Ein Familienbetrieb mit Liebe zum grünen Handwerk.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
              Seit Jahren sind wir in Kirchheim unter Teck und der Region Ihr verlässlicher Partner
              rund um Haus und Garten. Wir verbinden traditionelles Handwerk mit modernen Maschinen,
              um für jedes Projekt die effizienteste und schönste Lösung zu finden.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <Stat value="10+" label="Jahre Erfahrung" />
              <Stat value="500+" label="Projekte" />
              <Stat value="100%" label="Zufriedenheit" />
            </div>
            <Link
              to="/ueber-uns"
              className="mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-panel text-white font-semibold hover:bg-white/10 transition-all group"
            >
              Mehr über uns <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] glass-panel p-2 rounded-[3rem]"
          >
            <img
              src={REFERENCES[0].image}
              alt="Beispielprojekt"
              loading="lazy"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* References preview */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap items-end justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                Referenzen
              </p>
              <h2 className="mt-4 font-display text-4xl lg:text-6xl text-white">Unsere Projekte</h2>
            </div>
            <Link to="/referenzen" className="font-semibold text-primary inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-white bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              Alle Referenzen <ArrowRight className="size-4" />
            </Link>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {REFERENCES.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group glass-panel rounded-3xl p-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out relative z-0"
                  />
                </div>
                <div className="mt-6 px-4 pb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{r.type}</p>
                  <h3 className="font-display text-2xl text-white group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-sm text-foreground/60 mt-3 inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-primary" /> {r.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bewertungen Preview */}
      <section className="py-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap items-end justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                Kundenstimmen
              </p>
              <h2 className="mt-4 font-display text-4xl lg:text-6xl text-white">Das sagen unsere Kunden</h2>
            </div>
            <a 
              href={MYHAMMER_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-white bg-primary/10 px-6 py-3 rounded-full border border-primary/20"
            >
              Alle Bewertungen <ArrowRight className="size-4" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ReviewCarousel />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center glass-panel p-16 rounded-[3rem] relative z-10"
        >
          <div className="inline-flex size-20 rounded-full bg-primary/20 items-center justify-center mb-8 border border-primary/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Phone className="size-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-balance text-white drop-shadow-lg">
            Bereit für Ihren Traumgarten?
          </h2>
          <p className="mt-6 text-foreground/80 max-w-xl mx-auto text-lg">
            Wir beraten Sie gerne unverbindlich und erstellen Ihnen ein passgenaues Angebot für Ihr Projekt.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary hover:bg-primary/90 text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all group"
            >
              Angebot anfragen <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+4915201600202"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-panel text-white font-semibold hover:bg-white/10 transition-all border border-glass-border"
            >
              <Phone className="size-4" /> 01520 1600 202
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center group hover:bg-glass-strong transition-colors border border-glass-border shadow-none hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
      <p className="font-display text-4xl text-white group-hover:text-primary transition-colors mb-2 drop-shadow-md">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">{label}</p>
    </div>
  );
}

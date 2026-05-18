import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Dienstleister Ejupi" },
      {
        name: "description",
        content:
          "Familienbetrieb für Garten- und Landschaftsbau in Kirchheim unter Teck. Erfahren Sie mehr über unsere Werte und unser Team.",
      },
      { property: "og:title", content: "Über uns — Dienstleister Ejupi" },
      {
        property: "og:description",
        content: "Wir sind ein Familienbetrieb mit Leidenschaft für das grüne Handwerk.",
      },
      { property: "og:url", content: "/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
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
            Über uns
          </div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-4xl text-heading drop-shadow-xl">
            Handwerk mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400 italic">Herz</span> aus Kirchheim.
          </h1>
        </motion.div>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative group mt-8 lg:mt-0"
        >
          <div className="aspect-[4/3] surface-panel p-2 overflow-hidden">
            <img
              src={teamImg}
              alt="Das Team von Dienstleister Ejupi"
              loading="lazy"
              className="w-full h-full object-cover rounded-[1.25rem] relative z-0 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-foreground/80 leading-relaxed text-lg"
        >
          <p>
            Dienstleister Ejupi ist Ihr verlässlicher Partner für Garten- und Landschaftsbau in der
            Region rund um Kirchheim unter Teck. Als Familienbetrieb stehen wir für ehrliches
            Handwerk, Termintreue und persönliche Betreuung.
          </p>
          <p>
            Unser Anspruch: Wir packen an, wo andere lange überlegen. Mit modernem Gerät, einem
            eingespielten Team und einem offenen Ohr für Ihre Wünsche realisieren wir Projekte vom
            kleinen Vorgarten bis zur kompletten Außenanlage.
          </p>
          <div className="p-6 rounded-2xl surface-panel border-accent/20 bg-accent/5 mt-8">
            <p className="italic text-heading">
              "Service rund ums Häusle ist für uns mehr als ein Slogan. Es ist ein Versprechen, dass
              wir uns um alles kümmern, was rund um Ihr Zuhause anfällt — ganzjährig."
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl lg:text-5xl text-center text-heading"
          >
            Unsere Werte
          </motion.h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verlässlichkeit",
                desc: "Was wir versprechen, halten wir. Pünktlich vor Ort, transparente Angebote, klare Kommunikation.",
              },
              {
                title: "Qualität",
                desc: "Wir arbeiten mit hochwertigen Materialien und sauberer Ausführung — für Ergebnisse, die halten.",
              },
              {
                title: "Persönlich",
                desc: "Bei uns sprechen Sie direkt mit den Menschen, die auch auf Ihrer Baustelle stehen.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="surface-panel p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="size-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent border border-accent/20">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="font-display text-2xl mb-4 text-heading">{v.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-panel p-10 sm:p-16 rounded-[3rem]"
        >
          <h2 className="font-display text-4xl lg:text-5xl text-heading">Lust, uns kennenzulernen?</h2>
          <p className="mt-6 text-lg text-foreground/70">
            Vereinbaren Sie einen unverbindlichen Vor-Ort-Termin.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 sm:mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-[0_4px_20px_rgba(166,124,82,0.3)] hover:-translate-y-1 transition-all group"
          >
            Termin anfragen <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

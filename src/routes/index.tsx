import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SERVICES, REFERENCES } from "@/lib/site-data";

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
    <>
      {/* Hero */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[80vh] items-center">
          <div className="px-6 lg:px-16 py-16 lg:py-24">
            <span className="inline-block py-1 px-3 bg-sand text-primary text-[11px] font-bold uppercase tracking-widest">
              Garten- & Landschaftsbau · Kirchheim u. Teck
            </span>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.05] text-balance text-foreground">
              Service rund <br />
              <span className="italic text-primary">ums Häusle.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Wir gestalten, pflegen und erhalten Ihren Außenbereich in Kirchheim unter Teck und
              Umgebung — mit Leidenschaft, Präzision und schwäbischer Sorgfalt.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Jetzt anfragen <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 px-7 py-4 border border-foreground/20 text-sm font-semibold hover:bg-sand transition-colors"
              >
                Unsere Leistungen
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
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
          </div>
          <div className="relative h-[60vh] lg:h-full min-h-[500px]">
            <img
              src={heroImg}
              alt="Modern gestalteter Garten mit Steinplatten und gepflegtem Rasen"
              width={1600}
              height={1200}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Unsere Leistungen
            </p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-balance">
              Alles aus einer Hand — vom Pflaster bis zur Pflege.
            </h2>
            <div className="mt-6 h-0.5 w-16 bg-primary" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/leistungen"
                hash={s.slug}
                className="group bg-background p-8 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="mb-6 size-10 grid place-items-center bg-sand text-primary font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Mehr erfahren <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Über uns</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-balance">
              Ein Familienbetrieb mit Liebe zum grünen Handwerk.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Seit Jahren sind wir in Kirchheim unter Teck und der Region Ihr verlässlicher Partner
              rund um Haus und Garten. Wir verbinden traditionelles Handwerk mit modernen Maschinen,
              um für jedes Projekt die effizienteste und schönste Lösung zu finden.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="10+" label="Jahre Erfahrung" />
              <Stat value="500+" label="Projekte" />
              <Stat value="100%" label="Zufriedenheit" />
            </div>
            <Link
              to="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary"
            >
              Mehr über uns <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="aspect-[4/5] bg-sand overflow-hidden">
            <img
              src={REFERENCES[0].image}
              alt="Beispielprojekt"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* References preview */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Referenzen
              </p>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl">Unsere Projekte</h2>
            </div>
            <Link to="/referenzen" className="font-semibold text-primary inline-flex items-center gap-2">
              Alle Referenzen <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REFERENCES.map((r) => (
              <div key={r.title} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{r.type}</p>
                  <h3 className="font-display text-xl mt-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 inline-flex items-center gap-1">
                    <MapPin className="size-3" /> {r.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Bereit für Ihren Traumgarten?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Wir beraten Sie gerne unverbindlich und erstellen Ihnen ein passgenaues Angebot.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold"
            >
              Angebot anfragen <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+4915201600202"
              className="inline-flex items-center gap-2 px-7 py-4 border border-foreground/20 text-sm font-semibold hover:bg-sand"
            >
              <Phone className="size-4" /> 01520 1600 202
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-primary">{value}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

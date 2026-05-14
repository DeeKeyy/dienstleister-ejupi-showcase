import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
    <>
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Über uns</p>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl text-balance max-w-3xl">
          Handwerk mit Herz aus Kirchheim unter Teck.
        </h1>
      </section>

      <section className="px-6 pb-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img
            src={teamImg}
            alt="Das Team von Dienstleister Ejupi"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
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
          <p>
            "Service rund ums Häusle" ist für uns mehr als ein Slogan. Es ist ein Versprechen, dass
            wir uns um alles kümmern, was rund um Ihr Zuhause anfällt — ganzjährig.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-center">Unsere Werte</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
            ].map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="font-display text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl">Lust, uns kennenzulernen?</h2>
        <p className="mt-4 text-muted-foreground">
          Vereinbaren Sie einen unverbindlichen Vor-Ort-Termin.
        </p>
        <Link
          to="/kontakt"
          className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm font-semibold"
        >
          Termin anfragen <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}

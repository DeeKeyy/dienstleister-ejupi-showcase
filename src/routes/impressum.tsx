import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Dienstleister Ejupi" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto prose-sm">
      <h1 className="font-display text-4xl mb-8">Impressum</h1>
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground">Angaben gemäß § 5 TMG</p>
          <p className="mt-2">
            Dienstleister Ejupi<br />
            {CONTACT.address.street}<br />
            {CONTACT.address.city}
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Kontakt</p>
          <p className="mt-2">
            Telefon: {CONTACT.phone}<br />
            E-Mail: {CONTACT.email}
          </p>
        </div>
        <p className="text-xs italic">
          Hinweis: Dieser Platzhalter-Text muss vor Veröffentlichung um vollständige
          Pflichtangaben (Vertretungsberechtigte, USt-IdNr., Aufsichtsbehörde, Berufsbezeichnung
          etc.) ergänzt werden.
        </p>
      </div>
    </section>
  );
}

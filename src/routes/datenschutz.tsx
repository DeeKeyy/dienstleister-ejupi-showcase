import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Dienstleister Ejupi" },
      { name: "description", content: "Datenschutzerklärung." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl mb-8 text-heading">Datenschutz</h1>
      <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
        <p>
          Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer
          personenbezogenen Daten ist uns ein wichtiges Anliegen.
        </p>
        <p>
          Über das Kontakt- und Bewerbungsformular erhobene Daten (Name, E-Mail, Telefon,
          Nachricht) werden ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert und nicht an
          Dritte weitergegeben.
        </p>
        <p className="italic text-xs">
          Hinweis: Diese vereinfachte Erklärung muss vor Veröffentlichung durch eine vollständige
          DSGVO-konforme Datenschutzerklärung ersetzt werden.
        </p>
      </div>
    </section>
  );
}

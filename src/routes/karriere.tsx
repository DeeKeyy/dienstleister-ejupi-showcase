import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Briefcase, Clock, ArrowRight } from "lucide-react";
import { JOBS } from "@/lib/site-data";
import { submitJobApplication } from "@/lib/forms.functions";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere — Dienstleister Ejupi" },
      {
        name: "description",
        content:
          "Offene Stellen im Garten- und Landschaftsbau bei Dienstleister Ejupi in Kirchheim unter Teck. Jetzt bewerben.",
      },
      { property: "og:title", content: "Karriere bei Dienstleister Ejupi" },
      {
        property: "og:description",
        content: "Werde Teil unseres Teams im Garten- und Landschaftsbau.",
      },
      { property: "og:url", content: "/karriere" },
    ],
    links: [{ rel: "canonical", href: "/karriere" }],
  }),
  component: KarrierePage,
});

function KarrierePage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Karriere</p>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl text-balance max-w-3xl">
          Wachse mit uns — draußen, im Team, im Handwerk.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Wir suchen Verstärkung. Bei uns arbeitest du in einem familiären Umfeld, mit modernen
          Maschinen und abwechslungsreichen Projekten in der Region.
        </p>
      </section>

      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {JOBS.map((j) => (
            <div key={j.title} className="bg-sand p-8 flex flex-col">
              <Briefcase className="size-8 text-primary" />
              <h2 className="mt-6 font-display text-xl leading-tight">{j.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1">
                <Clock className="size-3" /> {j.type}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {j.description}
              </p>
              <a
                href={`#bewerbung`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Jetzt bewerben <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="bewerbung" className="px-6 py-20 bg-sand scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-center">Bewerbungsformular</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Schick uns deine Daten — wir melden uns kurzfristig bei dir.
          </p>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}

function ApplicationForm() {
  const submit = useServerFn(submitJobApplication);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="mt-10 bg-background p-8 space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        setLoading(true);
        try {
          const result = await submit({
            data: {
              name: String(fd.get("name") ?? ""),
              email: String(fd.get("email") ?? ""),
              phone: String(fd.get("phone") ?? ""),
              position: String(fd.get("position") ?? ""),
              message: String(fd.get("message") ?? ""),
            },
          });
          if (result.ok) {
            toast.success("Bewerbung erhalten!", {
              description: "Wir melden uns in den nächsten Tagen bei dir.",
            });
            (e.target as HTMLFormElement).reset();
          } else {
            toast.error(result.error);
          }
        } catch (err) {
          console.error(err);
          toast.error("Bitte überprüfe deine Eingaben.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" />
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-widest">Position*</label>
          <select
            name="position"
            required
            defaultValue=""
            className="w-full bg-sand border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
          >
            <option value="" disabled>Bitte wählen</option>
            {JOBS.map((j) => (
              <option key={j.title} value={j.title}>{j.title}</option>
            ))}
            <option value="Initiativbewerbung">Initiativbewerbung</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest">Nachricht</label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-sand border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
          placeholder="Erzähl uns kurz von dir und deiner Erfahrung."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {loading ? "Wird gesendet…" : "Bewerbung senden"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-widest">
        {label}
        {required ? "*" : ""}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-sand border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

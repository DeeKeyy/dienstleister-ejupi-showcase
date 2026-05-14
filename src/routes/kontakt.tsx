import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/site-data";
import { submitContactInquiry } from "@/lib/forms.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Dienstleister Ejupi" },
      {
        name: "description",
        content:
          "Jetzt unverbindlich Kontakt aufnehmen. Telefon 01520 1600 202 — Aichelbergstraße 15, 73230 Kirchheim unter Teck.",
      },
      { property: "og:title", content: "Kontakt — Dienstleister Ejupi" },
      { property: "og:description", content: "Schreiben oder rufen Sie uns an." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Kontakt</p>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl text-balance max-w-3xl">
          Lassen Sie uns reden — über Ihr Projekt.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Rufen Sie uns an, schreiben Sie eine E-Mail oder nutzen Sie das Formular. Wir melden uns
          schnellstmöglich.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <ContactItem
            icon={<Phone className="size-5" />}
            label="Telefon"
            value={CONTACT.phone}
            href={CONTACT.phoneHref}
          />
          <ContactItem
            icon={<Mail className="size-5" />}
            label="E-Mail"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactItem
            icon={<MapPin className="size-5" />}
            label="Adresse"
            value={`${CONTACT.address.street}, ${CONTACT.address.city}`}
          />

          <div className="aspect-[4/3] bg-muted overflow-hidden">
            <iframe
              title="Standort Karte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.4400%2C48.6420%2C9.4700%2C48.6580&layer=mapnik&marker=48.6500%2C9.4550"
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex gap-4 items-start">
      <div className="size-10 grid place-items-center bg-sand text-primary shrink-0">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-base font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {inner}
    </a>
  ) : (
    inner
  );
}

function ContactForm() {
  const submit = useServerFn(submitContactInquiry);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="bg-sand p-8 space-y-5"
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
              service: String(fd.get("service") ?? ""),
              message: String(fd.get("message") ?? ""),
            },
          });
          if (result.ok) {
            toast.success("Anfrage gesendet!", {
              description: "Vielen Dank — wir melden uns kurzfristig zurück.",
            });
            (e.target as HTMLFormElement).reset();
          } else {
            toast.error(result.error);
          }
        } catch (err) {
          console.error(err);
          toast.error("Bitte überprüfen Sie Ihre Eingaben.");
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
          <label className="text-xs font-semibold uppercase tracking-widest">Leistung</label>
          <select
            name="service"
            defaultValue=""
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
          >
            <option value="">Bitte wählen</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest">Nachricht*</label>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
          placeholder="Beschreiben Sie kurz Ihr Anliegen…"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {loading ? "Wird gesendet…" : "Anfrage senden"}
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
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

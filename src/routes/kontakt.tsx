import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="overflow-hidden">
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Kontakt
          </div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-4xl text-heading drop-shadow-xl">
            Lassen Sie uns <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400 italic">reden</span> — über Ihr Projekt.
          </h1>
          <p className="mt-8 text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Rufen Sie uns an, schreiben Sie eine E-Mail oder nutzen Sie das Formular. Wir melden uns
            schnellstmöglich mit einem ersten Konzept zurück.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 space-y-6"
        >
          <ContactItem
            icon={<Phone className="size-6" />}
            label="Telefon"
            value={CONTACT.phone}
            href={CONTACT.phoneHref}
          />
          <ContactItem
            icon={<Mail className="size-6" />}
            label="E-Mail"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactItem
            icon={<MapPin className="size-6" />}
            label="Adresse"
            value={`${CONTACT.address.street}, ${CONTACT.address.city}`}
          />

          <div className="aspect-[4/3] surface-panel p-2 overflow-hidden mt-8">
            <iframe
              title="Standort Karte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.4400%2C48.6420%2C9.4700%2C48.6580&layer=mapnik&marker=48.6500%2C9.4550"
              loading="lazy"
              className="w-full h-full border-0 rounded-[1.25rem] map-embed"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="surface-panel p-6 sm:p-8 md:p-12 h-full">
            <div className="inline-flex size-16 rounded-full bg-accent/10 items-center justify-center mb-8 text-accent border border-accent/20">
              <MessageSquare className="size-8" />
            </div>
            <h2 className="font-display text-3xl text-heading mb-8">Schreiben Sie uns</h2>
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </div>
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
    <div className="surface-panel p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 w-full cursor-pointer text-center sm:text-left">
      <div className="size-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0">
        {icon}
      </div>
      <div className="mt-2 sm:mt-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-1">
          {label}
        </p>
        <p className="text-lg font-medium text-heading group-hover:text-accent transition-colors">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block w-full">
      {inner}
    </a>
  ) : (
    <div className="w-full">
      {inner}
    </div>
  );
}

function ContactForm() {
  const submit = useServerFn(submitContactInquiry);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-6"
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
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" />
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Leistung</label>
          <div className="relative">
            <select
              name="service"
              defaultValue=""
              className="w-full bg-foreground/5 border border-glass-border px-5 py-4 rounded-xl text-foreground appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
            >
              <option value="" disabled className="bg-background text-foreground/50">Bitte wählen</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title} className="bg-background text-foreground">{s.title}</option>
              ))}
              <option value="Sonstiges" className="bg-background text-foreground">Sonstiges</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-foreground/50">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Nachricht <span className="text-primary">*</span></label>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full bg-foreground/5 border border-glass-border px-5 py-4 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md resize-none"
          placeholder="Beschreiben Sie kurz Ihr Anliegen…"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 sm:py-5 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(166,124,82,0.3)] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:shadow-none disabled:hover:translate-y-0"
      >
        {loading ? (
          <div className="size-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
        ) : (
          <>
            Anfrage senden <Send className="size-4" />
          </>
        )}
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
    <div className="space-y-3">
      <label className="text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-foreground/5 border border-glass-border px-5 py-4 rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
      />
    </div>
  );
}

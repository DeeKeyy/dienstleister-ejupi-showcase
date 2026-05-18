import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Briefcase, Clock, ArrowRight, UserPlus, Send } from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="overflow-hidden">
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Karriere
          </div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-4xl text-white drop-shadow-xl">
            Wachse mit uns — draußen, im Team, im <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400 italic">Handwerk.</span>
          </h1>
          <p className="mt-8 text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Wir suchen Verstärkung. Bei uns arbeitest du in einem familiären Umfeld, mit modernen
            Maschinen und abwechslungsreichen Projekten in der Region.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {JOBS.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2.5rem] flex flex-col group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
            >
              <div className="absolute -inset-10 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 mb-6 relative z-10">
                <Briefcase className="size-6" />
              </div>
              <h2 className="font-display text-2xl leading-tight text-white group-hover:text-primary transition-colors relative z-10">{j.title}</h2>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary/80 inline-flex items-center gap-2 relative z-10">
                <Clock className="size-3" /> {j.type}
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed flex-1 relative z-10">
                {j.description}
              </p>
              <a
                href="#bewerbung"
                className="mt-8 inline-flex items-center justify-between w-full p-4 rounded-xl glass-panel group-hover:bg-primary/20 transition-colors relative z-10"
              >
                <span className="text-sm font-semibold text-white">Jetzt bewerben</span>
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="bewerbung" className="py-32 relative scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex size-16 rounded-full bg-primary/10 items-center justify-center mb-6 text-primary border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <UserPlus className="size-8" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-white">Bewerbungsformular</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Schick uns deine Daten — wir melden uns kurzfristig bei dir.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[3rem]"
          >
            <ApplicationForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ApplicationForm() {
  const submit = useServerFn(submitJobApplication);
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
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" />
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Position*</label>
          <div className="relative">
            <select
              name="position"
              required
              defaultValue=""
              className="w-full bg-white/5 border border-glass-border px-5 py-4 rounded-xl text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
            >
              <option value="" disabled className="bg-background text-foreground/50">Bitte wählen</option>
              {JOBS.map((j) => (
                <option key={j.title} value={j.title} className="bg-background text-foreground">{j.title}</option>
              ))}
              <option value="Initiativbewerbung" className="bg-background text-foreground">Initiativbewerbung</option>
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
        <label className="text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Nachricht</label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-white/5 border border-glass-border px-5 py-4 rounded-xl text-white placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md resize-none"
          placeholder="Erzähl uns kurz von dir und deiner Erfahrung."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all disabled:opacity-50 disabled:hover:shadow-none"
      >
        {loading ? (
          <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Bewerbung senden <Send className="size-4" />
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
        className="w-full bg-white/5 border border-glass-border px-5 py-4 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
      />
    </div>
  );
}

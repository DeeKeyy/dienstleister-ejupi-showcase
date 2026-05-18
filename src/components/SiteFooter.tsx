import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-glass-border bg-glass backdrop-blur-md relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Dienstleister Ejupi Logo" className="h-10 w-10 object-contain rounded-full opacity-90 grayscale-[30%]" />
            <div>
              <p className="font-display text-2xl font-bold text-white leading-none">Dienstleister Ejupi</p>
              <p className="mt-1 text-[10px] text-primary opacity-80 uppercase tracking-[0.1em]">Service rund ums Häusle</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-foreground/70 leading-relaxed">
            Ihr Partner für Garten- und Landschaftsbau in Kirchheim unter Teck und Umgebung.
            Vom ersten Spatenstich bis zur ganzjährigen Pflege.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/leistungen" className="text-foreground/70 hover:text-primary transition-colors">Leistungen</Link></li>
            <li><Link to="/referenzen" className="text-foreground/70 hover:text-primary transition-colors">Referenzen</Link></li>
            <li><Link to="/ueber-uns" className="text-foreground/70 hover:text-primary transition-colors">Über uns</Link></li>
            <li><Link to="/karriere" className="text-foreground/70 hover:text-primary transition-colors">Karriere</Link></li>
            <li><Link to="/kontakt" className="text-foreground/70 hover:text-primary transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Kontakt
          </p>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex gap-3 items-start group">
              <Phone className="size-4 mt-0.5 shrink-0 text-primary group-hover:text-white transition-colors" />
              <a href="tel:+4915201600202" className="hover:text-white transition-colors">01520 1600 202</a>
            </li>
            <li className="flex gap-3 items-start group">
              <Mail className="size-4 mt-0.5 shrink-0 text-primary group-hover:text-white transition-colors" />
              <a href="mailto:ejupiburim@googlemail.com" className="hover:text-white transition-colors break-all">
                ejupiburim@googlemail.com
              </a>
            </li>
            <li className="flex gap-3 items-start group">
              <MapPin className="size-4 mt-0.5 shrink-0 text-primary group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">
                Aichelbergstraße 15<br />
                73230 Kirchheim unter Teck
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-glass-border relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Dienstleister Ejupi. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

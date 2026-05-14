import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-earth text-background mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold">Dienstleister Ejupi</p>
          <p className="mt-1 text-sm opacity-70 italic">Service rund ums Häusle</p>
          <p className="mt-6 max-w-sm text-sm opacity-80 leading-relaxed">
            Ihr Partner für Garten- und Landschaftsbau in Kirchheim unter Teck und Umgebung.
            Vom ersten Spatenstich bis zur ganzjährigen Pflege.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/leistungen" className="hover:text-primary-foreground/100 opacity-80 hover:opacity-100">Leistungen</Link></li>
            <li><Link to="/referenzen" className="opacity-80 hover:opacity-100">Referenzen</Link></li>
            <li><Link to="/ueber-uns" className="opacity-80 hover:opacity-100">Über uns</Link></li>
            <li><Link to="/karriere" className="opacity-80 hover:opacity-100">Karriere</Link></li>
            <li><Link to="/kontakt" className="opacity-80 hover:opacity-100">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">
            Kontakt
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="size-4 mt-0.5 shrink-0 opacity-70" />
              <a href="tel:+4915201600202" className="hover:underline">01520 1600 202</a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 mt-0.5 shrink-0 opacity-70" />
              <a href="mailto:ejupiburim@googlemail.com" className="hover:underline break-all">
                ejupiburim@googlemail.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="size-4 mt-0.5 shrink-0 opacity-70" />
              <span>
                Aichelbergstraße 15<br />
                73230 Kirchheim unter Teck
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Dienstleister Ejupi. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:opacity-100">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-100">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

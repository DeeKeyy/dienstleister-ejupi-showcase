## Überblick

Mehrseitige Website auf TanStack Start im Stil **"Modern organic professional"** (warmes Sand, dunkles Garten-Grün, Playfair Display + Inter) – passend zum schwäbischen Handwerksbetrieb.

## Seitenstruktur (separate Routen für SEO)

- `/` – Home: Hero (Slogan "Service rund ums Häusle"), Leistungs-Teaser (4), Über-uns-Snippet, Referenzen-Vorschau, Kontakt-CTA
- `/leistungen` – Alle 4 Leistungen ausführlich mit Beschreibung & Bild
- `/ueber-uns` – Firmenprofil, Werte, Team, Region
- `/referenzen` – Galerie abgeschlossener Projekte (Grid)
- `/karriere` – Übersicht offene Stellen + Initiativbewerbung
- `/kontakt` – Kontaktdaten, Karte (Embed) und Anfrageformular

Eigene `head()`-Metadaten je Route (Title, Description, OG-Tags) auf Deutsch.

## Komponenten

- `SiteHeader` – Sticky Nav mit Logo, Links, Telefon-CTA, Mobile-Menü (Sheet)
- `SiteFooter` – Kontaktinfo, Impressum/Datenschutz-Stubs
- `ServiceCard`, `ProjectCard`, `JobCard`
- `ContactForm` – React-Hook-Form + Zod-Validierung

## Backend (Lovable Cloud)

Aktivierung der Lovable Cloud für:
- Tabelle `contact_inquiries` (name, email, phone, service, message, created_at) mit RLS – nur INSERT für anonyme Nutzer, kein SELECT
- Tabelle `job_applications` (name, email, phone, position, message, created_at) – analog
- Server Function `submitContactInquiry` und `submitJobApplication` mit Zod-Validierung (max-Längen, Email-Format)

Keine Auth, keine Edge Functions – pures Form-Submit-Backend.

## Design-Tokens (`src/styles.css`)

- Hintergrund: warmes Sand `oklch(0.97 0.01 85)`
- Foreground: erdig dunkel `oklch(0.27 0.015 60)`
- Primary: Garten-Grün `oklch(0.38 0.06 145)`
- Accent: Sand-Akzent
- Schriften: Playfair Display (Display), Inter (Body) via Google Fonts
- Großzügige Abstände, dezente Hover-States, sanfte Reveal-Animationen via Tailwind

## Inhalte

- Telefon: 01520 1600 202
- E-Mail: ejupiburim@googlemail.com
- Adresse: Aichelbergstraße 15, 73230 Kirchheim unter Teck
- Leistungen: Landschaftsbau & Pflasterarbeiten, Gartenpflege & Rasenmähen, Baumfällung & Wurzelentfernung, Winterdienst & Hausmeisterservice
- Bilder: Generierung per `imagegen` für Hero, Leistungen, Referenzen (Stock-mäßige Garten-/Landschaftsfotos)

## Technische Details

- TanStack Start Routen unter `src/routes/`
- shadcn/ui Komponenten (Button, Input, Textarea, Select, Sheet, Card, Form, Sonner)
- Form-Submit über `createServerFn` + `useServerFn`
- Erfolgs-/Fehler-Toasts via Sonner
- Vollständig responsive (mobile-first)
- Placeholder in `src/routes/index.tsx` wird ersetzt
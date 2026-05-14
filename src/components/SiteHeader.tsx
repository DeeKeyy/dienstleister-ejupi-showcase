import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/karriere", label: "Karriere" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Dienstleister Ejupi
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Service rund ums Häusle
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+4915201600202"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
          >
            <Phone className="size-4" />
            01520 1600 202
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menü"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="py-2 text-base text-foreground/80 hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+4915201600202"
            className="mt-2 inline-flex items-center gap-2 text-primary font-medium"
          >
            <Phone className="size-4" /> 01520 1600 202
          </a>
        </nav>
      </div>
    </header>
  );
}

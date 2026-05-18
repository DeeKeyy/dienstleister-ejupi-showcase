import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="sticky top-0 z-50 glass-panel border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Dienstleister Ejupi Logo" className="h-15 w-15 object-contain rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Dienstleister Ejupi
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] hidden sm:block">
              Service rund ums Häusle
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-foreground/70 hover:text-white transition-colors"
              activeProps={{ className: "text-white font-semibold" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_#10b981]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+4915201600202"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white bg-primary/20 hover:bg-primary/40 border border-primary/50 px-4 py-2 rounded-full backdrop-blur-md transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            <Phone className="size-4" />
            01520 1600 202
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-foreground hover:text-white transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menü"
          >
            {open ? <X className="size-6 drop-shadow-md" /> : <Menu className="size-6 drop-shadow-md" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-glass-border bg-glass backdrop-blur-3xl"
          >
            <nav className="flex flex-col px-6 py-6 gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-base rounded-xl text-foreground/80 hover:text-white hover:bg-glass-strong transition-all"
                  activeProps={{ className: "text-white bg-glass-strong font-semibold border border-glass-border" }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+4915201600202"
                className="mt-4 inline-flex items-center justify-center gap-2 text-white bg-primary/20 border border-primary/50 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] font-medium"
              >
                <Phone className="size-4" /> 01520 1600 202
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

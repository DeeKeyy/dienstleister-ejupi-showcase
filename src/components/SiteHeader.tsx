import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

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
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Dienstleister Ejupi Logo" className="h-15 w-15 object-contain rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight text-heading">
              Dienstleister Ejupi
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary hidden sm:block">
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
              className="relative text-foreground/70 hover:text-heading transition-colors"
              activeProps={{ className: "text-heading font-semibold" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_var(--primary)]"
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
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="relative size-10 rounded-full glass-panel flex items-center justify-center text-foreground/70 hover:text-heading hover:bg-glass-strong transition-all overflow-hidden"
            aria-label={isDark ? "Zum Light Mode wechseln" : "Zum Dark Mode wechseln"}
            id="theme-toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <Sun className="size-[18px]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <Moon className="size-[18px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <a
            href="tel:+4915201600202"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary/20 hover:bg-primary/40 border border-primary/50 px-4 py-2 rounded-full backdrop-blur-md transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            <Phone className="size-4" />
            01520 1600 202
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-foreground hover:text-heading transition-colors"
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
                  className="py-3 px-4 text-base rounded-xl text-foreground/80 hover:text-heading hover:bg-glass-strong transition-all"
                  activeProps={{ className: "text-heading bg-glass-strong font-semibold border border-glass-border" }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile theme toggle */}
              <button
                onClick={toggleTheme}
                className="mt-2 py-3 px-4 text-base rounded-xl text-foreground/80 hover:text-heading hover:bg-glass-strong transition-all flex items-center gap-3"
              >
                {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>

              <a
                href="tel:+4915201600202"
                className="mt-4 inline-flex items-center justify-center gap-2 text-primary-foreground bg-primary/20 border border-primary/50 py-3 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] font-medium"
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

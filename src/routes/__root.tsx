import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { motion } from "framer-motion";

import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-md text-center glass-panel p-12 rounded-3xl relative z-10">
        <h1 className="text-7xl font-bold text-white drop-shadow-md">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-foreground/70">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-panel p-12 rounded-3xl">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Ein Fehler ist aufgetreten
        </h1>
        <p className="mt-2 text-sm text-foreground/70">
          Etwas ist schiefgelaufen. Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-glass-border bg-glass-strong px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dienstleister Ejupi — Garten- & Landschaftsbau in Kirchheim" },
      {
        name: "description",
        content:
          "Garten- und Landschaftsbau aus Kirchheim unter Teck. Pflasterarbeiten, Gartenpflege, Baumfällung, Winterdienst und Hausmeisterservice — Service rund ums Häusle.",
      },
      { name: "author", content: "Dienstleister Ejupi" },
      { property: "og:site_name", content: "Dienstleister Ejupi" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Dienstleister Ejupi — Garten- & Landschaftsbau" },
      {
        property: "og:description",
        content: "Service rund ums Häusle — Garten- und Landschaftsbau in Kirchheim unter Teck.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/logo.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      {/* Deep dark base is handled by body bg */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute -bottom-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)" }}
      />
      {/* Noise texture overlay for frost feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AmbientBackground />
      <div className="flex min-h-screen flex-col relative z-0">
        <SiteHeader />
        <main className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </main>
        <SiteFooter />
      </div>
      <Toaster richColors position="top-center" theme="dark" />
    </QueryClientProvider>
  );
}

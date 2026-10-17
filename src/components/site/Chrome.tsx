import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/designs", label: "Designs" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function Wordmark() {
  return (
    <Link to="/" className="flex items-baseline gap-1.5">
      <span className="font-display text-2xl font-medium italic tracking-tight text-foreground">Aarzoo</span>
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
    </Link>
  );
}

export function CreateButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/designs"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[0.8rem] font-semibold tracking-wide text-primary-foreground shadow-soft transition hover:bg-ink ${className}`}
    >
      Create yours
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.82rem] font-medium text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CreateButton className="hidden sm:inline-flex" />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-border p-2 text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-4 font-display text-2xl text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <CreateButton className="mt-6 w-full py-3.5" />
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl italic">Aarzoo</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              Animated wedding invitations for the phone in every guest's hand. Designed in India, shared on WhatsApp.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow text-gold-soft">Explore</p>
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="block text-ink-foreground/70 hover:text-ink-foreground">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow text-gold-soft">Contact</p>
            <p className="text-ink-foreground/70">hello@aarzoo.in</p>
            <p className="text-ink-foreground/70">Instagram · @aarzoo</p>
          </div>
        </div>
        <div className="gold-rule mt-14 opacity-40" />
        <p className="mt-6 text-xs text-ink-foreground/40">© 2026 Aarzoo. Made with love, for love.</p>
      </div>
    </footer>
  );
}

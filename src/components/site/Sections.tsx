import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { designs, type Design } from "@/lib/designs";
import { Phone } from "./Phone";

export function Hero() {
  const [a, b, c] = [designs[0], designs[3], designs[5]];
  return (
    <section className="grain overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-20">
        <div className="animate-rise">
          <p className="eyebrow">Digital wedding invitations</p>
          <h1 className="mt-6 text-[3.1rem] leading-[0.95] text-foreground sm:text-7xl lg:text-[5.6rem]">
            An invitation
            <br />
            they'll <em className="text-gold-foil">open</em>
            <br />
            twice.
          </h1>
          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
            Envelopes that unseal, palace doors that part, a date revealed under gold foil. Your wedding, as a living
            invitation — shared in one WhatsApp link.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/designs"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-ink"
            >
              Browse 16 designs <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Customise free · <span className="font-semibold text-foreground">₹599</span> to publish
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[460px] sm:h-[600px]">
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/40 blur-3xl" />
          <div className="absolute left-0 top-16 w-[44%] animate-float [--r:-8deg]" style={{ animationDelay: "-2s" }}>
            <Phone design={b} />
          </div>
          <div className="absolute right-0 top-20 w-[44%] animate-float [--r:8deg]" style={{ animationDelay: "-4s" }}>
            <Phone design={c} />
          </div>
          <div className="absolute left-1/2 top-0 z-10 w-[52%] -translate-x-1/2">
            <div className="animate-float">
              <Phone design={a} eager />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ["Envelope reveal", "Palace doors", "Scratch-off date", "Live countdown", "Music fades in", "Every function", "Photo gallery", "One WhatsApp link"];
  return (
    <div className="border-y border-border/70 bg-paper py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 px-5">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg italic text-muted-foreground">
            {i}
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-4xl leading-[1.02] text-foreground sm:text-6xl">{title}</h2>
      {body && <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  );
}

export function DesignCard({ design, index }: { design: Design; index?: number }) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden rounded-[2px] border border-border/70 bg-paper px-[16%] pb-10 pt-12 shadow-soft transition duration-500 group-hover:border-gold/60">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary to-transparent" />
        {index !== undefined && (
          <span className="absolute left-4 top-3 font-display text-sm italic text-muted-foreground">
            No. {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span className="absolute right-4 top-4 eyebrow text-[0.58rem]">{design.reveal}</span>
        <div className="relative transition duration-700 group-hover:-translate-y-2">
          <Phone design={design} />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl text-foreground">{design.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{design.tagline}</p>
        </div>
      </div>
      <Link
        to="/designs"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-foreground/80 px-5 py-3 text-[0.8rem] font-semibold text-foreground transition hover:bg-foreground hover:text-background"
      >
        Use this design <ArrowRight size={14} />
      </Link>
    </article>
  );
}

export function Showcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:py-32">
      <SectionHead
        eyebrow="The collection"
        title={<>Sixteen ways to say <em>save the date</em></>}
        body="Each design is a complete animated experience — from the first tap to the final countdown."
      />
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {designs.slice(0, 4).map((d, i) => (
          <DesignCard key={d.slug} design={d} index={i} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link to="/designs" className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold text-foreground">
          See all designs <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

const steps = [
  { n: "I", t: "Choose a design", b: "Browse sixteen animated invitations — royal, modern, floral, destination. Preview each one exactly as your guests will." },
  { n: "II", t: "Customise, free", b: "Add your names, dates, venues, every function from haldi to reception, your photos and music. Edit as often as you like." },
  { n: "III", t: "Pay once, share", b: "Publish for ₹599 and get your own link. Send it on WhatsApp, Instagram, anywhere — it opens beautifully on any phone." },
];

export function HowItWorks() {
  return (
    <section className="grain bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="How it works" title={<>Ready in an <em>evening</em></>} />
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper p-8 sm:p-10">
              <p className="font-display text-5xl italic text-gold">{s.n}</p>
              <h3 className="mt-8 text-3xl text-foreground">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const included = [
  "Any of our 16+ animated designs",
  "Unlimited functions — mehendi to reception",
  "Photo gallery, music & live countdown",
  "Google Maps directions for every venue",
  "Unlimited guests, unlimited shares",
  "Edit details anytime after publishing",
];

export function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-5 text-4xl leading-[1.02] text-foreground sm:text-6xl">
            One price.
            <br />
            <em>No subscription.</em>
          </h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Design and preview for as long as you like at no cost. Pay only when you're ready to share it with the
            world.
          </p>
        </div>
        <div className="relative border border-border bg-paper p-8 shadow-soft sm:p-12">
          <div className="absolute inset-2 border border-gold/40 pointer-events-none" />
          <p className="eyebrow text-gold">The invitation</p>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-7xl text-foreground sm:text-8xl">₹599</span>
            <span className="text-sm text-muted-foreground">one-time</span>
          </div>
          <div className="gold-rule my-8" />
          <ul className="space-y-4">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                {i}
              </li>
            ))}
          </ul>
          <Link
            to="/designs"
            className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-semibold text-primary-foreground transition hover:bg-ink"
          >
            Start customising — free <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="bg-primary py-24 text-center text-primary-foreground">
      <div className="mx-auto max-w-3xl px-5">
        <p className="eyebrow text-gold-soft">Shubh Vivah</p>
        <h2 className="mt-6 text-5xl leading-[1] sm:text-7xl">
          Begin with a <em className="text-gold-foil">beautiful</em> hello.
        </h2>
        <Link
          to="/designs"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition hover:bg-gold-soft"
        >
          Create yours <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

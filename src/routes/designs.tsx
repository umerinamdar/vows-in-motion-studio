import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { designs } from "@/lib/designs";
import { DesignCard } from "@/components/site/Sections";

export const Route = createFileRoute("/designs")({
  head: () => ({
    meta: [
      { title: "Invitation designs — Aarzoo" },
      { name: "description", content: "Browse 16+ animated wedding invitation designs: royal, traditional, modern and destination." },
      { property: "og:title", content: "Invitation designs — Aarzoo" },
      { property: "og:description", content: "Sixteen animated wedding invitations, each previewed on a phone." },
    ],
  }),
  component: DesignsPage,
});

const cats = ["All", "Traditional", "Royal", "Modern", "Destination"];

function DesignsPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? designs : designs.filter((d) => d.category === cat);
  return (
    <div className="grain">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 text-center md:px-10 lg:pt-24">
        <p className="eyebrow">The collection · {designs.length} designs</p>
        <h1 className="mt-5 text-5xl leading-[0.98] text-foreground sm:text-7xl">
          Find the one that <em>feels like you</em>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[0.95rem] text-muted-foreground">
          Every design is free to customise. Pay ₹599 only when you publish.
        </p>
        <div className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-5 py-2 text-[0.8rem] font-semibold transition ${
                cat === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-paper text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-14 px-5 pb-28 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
        {list.map((d) => (
          <DesignCard key={d.slug} design={d} index={designs.indexOf(d)} />
        ))}
      </section>
    </div>
  );
}

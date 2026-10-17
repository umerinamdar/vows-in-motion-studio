import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Pricing } from "@/components/site/Sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Aarzoo" },
      { name: "description", content: "₹599 one-time to publish your animated wedding invitation. No subscription." },
      { property: "og:title", content: "Pricing — Aarzoo" },
      { property: "og:description", content: "One price, ₹599. No subscription." },
    ],
  }),
  component: () => (
    <>
      <Pricing />
      <ClosingCta />
    </>
  ),
});

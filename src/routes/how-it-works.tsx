import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, HowItWorks } from "@/components/site/Sections";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Aarzoo" },
      { name: "description", content: "Choose a design, customise it free, pay ₹599 once to publish and share on WhatsApp." },
      { property: "og:title", content: "How it works — Aarzoo" },
      { property: "og:description", content: "Three steps to an animated wedding invitation." },
    ],
  }),
  component: () => (
    <>
      <HowItWorks />
      <ClosingCta />
    </>
  ),
});

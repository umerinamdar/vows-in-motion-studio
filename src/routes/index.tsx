import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Hero, HowItWorks, Marquee, Pricing, Showcase } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarzoo — Animated digital wedding invitations" },
      { name: "description", content: "Premium animated wedding invitation websites for Indian couples. Customise free, publish for ₹599, share on WhatsApp." },
      { property: "og:title", content: "Aarzoo — Animated digital wedding invitations" },
      { property: "og:description", content: "Envelopes, palace doors, scratch-off dates. Customise free, ₹599 to publish." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Showcase />
      <HowItWorks />
      <Pricing />
      <ClosingCta />
    </>
  );
}

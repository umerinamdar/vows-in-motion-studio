import type { Design } from "@/lib/designs";
import { cn } from "@/lib/utils";

export function Phone({
  design,
  className,
  eager = false,
}: {
  design: Design;
  className?: string;
  eager?: boolean;
}) {
  const light = design.tone === "light";
  return (
    <div className={cn("device w-full", className)}>
      <span className="device-button left-[-1.2%] top-[18%] h-[4%]" />
      <span className="device-button left-[-1.2%] top-[26%] h-[7%]" />
      <span className="device-button left-[-1.2%] top-[35%] h-[7%]" />
      <span className="device-button right-[-1.2%] top-[28%] h-[11%]" />
      <div className="device-bezel">
        <div className="device-screen">
          <div className="device-island" />
          <img
            src={design.image}
            alt={`${design.title} invitation design`}
            width={720}
            height={1440}
            loading={eager ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center px-[12%] text-center",
              light ? "text-invite-light" : "text-invite-dark",
            )}
          >
            <p className="text-[clamp(5px,1.6cqw,9px)] font-semibold uppercase tracking-[0.3em] opacity-80 [container-type:inline-size]">
              <span className="text-[0.5rem] sm:text-[0.55rem]">Together with their families</span>
            </p>
            <h3 className="mt-[8%] font-display text-[1.35rem] italic leading-[0.95] sm:text-[1.6rem]">
              {design.couple[0]}
              <span className="my-1 block font-display text-[0.8rem] not-italic opacity-70">&amp;</span>
              {design.couple[1]}
            </h3>
            <div className="mt-[10%] h-px w-1/3 bg-current opacity-40" />
            <p className="mt-[6%] text-[0.55rem] font-semibold tracking-[0.25em] sm:text-[0.6rem]">
              {design.date}
            </p>
            <div className="mt-[8%] flex gap-1.5">
              {["42", "08", "16"].map((n, i) => (
                <div
                  key={i}
                  className="rounded-sm border border-current/30 px-1.5 py-1 text-[0.5rem] font-semibold tabular-nums backdrop-blur-sm"
                >
                  {n}
                  <span className="block text-[0.35rem] tracking-widest opacity-70">
                    {["DAYS", "HRS", "MIN"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

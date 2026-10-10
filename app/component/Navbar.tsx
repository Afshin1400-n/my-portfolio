import type { ReactElement } from "react";

const ITEMS: readonly string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Zustand",
];

type MarqueeRowProps = {
  items: readonly string[];
  ariaHidden?: boolean;
};

function MarqueeRow({ items, ariaHidden = false }: MarqueeRowProps): ReactElement {
  return (
    <div
      className="flex items-center gap-10 px-5 whitespace-nowrap text-xl md:text-2xl font-black text-neutral-300"
      aria-hidden={ariaHidden}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-10">
          <span>{item}</span>
          <span
            className={
              index % 2 === 0 ? "text-lime-500" : "text-fuchsia-500"
            }
          >
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Navbar(): ReactElement {
  return (
    <section className="group border-y border-neutral-900/5 py-6 overflow-hidden bg-white/50">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* First copy (visible) */}
        <MarqueeRow items={ITEMS} />

        {/* Second copy (hidden from screen readers) */}
        <MarqueeRow items={ITEMS} ariaHidden />
      </div>
    </section>
  );
}
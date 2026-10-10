"use client";

function Navbar() {
  const items = ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"];

  return (
    <section className="group border-y border-neutral-900/5 py-6 overflow-hidden bg-white/50">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* تکرار اول */}
        <div className="flex items-center gap-10 px-5 whitespace-nowrap text-xl md:text-2xl font-black text-neutral-300">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>{item}</span>
              <span className={i % 2 === 0 ? "text-lime-500" : "text-fuchsia-500"}>
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* تکرار دوم */}
        <div
          className="flex items-center gap-10 px-5 whitespace-nowrap text-xl md:text-2xl font-black text-neutral-300"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>{item}</span>
              <span className={i % 2 === 0 ? "text-lime-500" : "text-fuchsia-500"}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
import type { ReactElement } from "react";
import Link from "next/link";

export default function Hero(): ReactElement {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-44 pb-28 relative">
      {/* Background color halos */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-lime-400/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-60 left-0 w-[400px] h-[400px] bg-fuchsia-400/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* ===== Text section ===== */}
        <div className="flex-1 text-center md:text-right">
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-900/10 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            <span className="text-md font-bold text-neutral-700">
              Available for work
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-8">
            Hi, I&apos;m <span className="text-lime-500">Afshin</span>
          </h1>

          <p className="text-xl text-neutral-500 max-w-xl leading-relaxed mb-12 font-medium">
            Frontend developer. I specialize in designing and building user
            interfaces with JavaScript, React, and Next.js.
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white font-bold px-7 py-4 rounded-full hover:bg-neutral-800 transition-all hover:gap-3 shadow-lg shadow-neutral-900/10"
            >
              View Projects
              <span>←</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white border border-neutral-900/10 text-neutral-900 font-bold px-7 py-4 rounded-full hover:border-neutral-900/30 transition-all shadow-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* ===== Image section ===== */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Glow behind the image */}
            <div className="absolute inset-0 bg-lime-400/40 rounded-full blur-2xl scale-110" />

            {/* Faded ring */}
            <div className="absolute inset-0 rounded-full border-2 border-lime-400/50 blur-sm scale-105" />

            {/* Profile image */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
              <img
                src="/my.jpg"
                alt="Afshin Norouzi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
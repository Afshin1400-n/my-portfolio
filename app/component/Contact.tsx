import type { ReactElement } from "react";
import Link from "next/link";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  accent: string;
  external: boolean;
};

const CONTACTS: readonly ContactItem[] = [
  {
    label: "Email",
    value: "Afshin1993norouzi@outlook.com",
    href: "mailto:Afshin1993norouzi@outlook.com",
    accent: "hover:border-lime-400 hover:text-lime-600",
    external: false,
  },
  {
    label: "GitHub",
    value: "@Afshin1400-n",
    href: "https://github.com/Afshin1400-n",
    accent: "hover:border-neutral-900 hover:text-neutral-900",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Afshin Norouzi",
    href: "https://www.linkedin.com/in/afshin-undefined-2468ab43b",
    accent: "hover:border-fuchsia-400 hover:text-fuchsia-600",
    external: true,
  },
];

export default function Contact(): ReactElement {
  return (
    <section
      id="contact"
      className="scroll-mt-32 max-w-6xl mx-auto px-6 py-28"
    >
      {/* ===== Heading ===== */}
      <div className="mb-16">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-600 mb-4">
          04 — Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Let&apos;s talk
          <br />
          <span className="text-neutral-300">Ways to reach me</span>
        </h2>
      </div>

      {/* ===== Contact cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTACTS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`group relative overflow-hidden rounded-3xl border border-neutral-900/10 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 ${item.accent}`}
          >
            <p className="text-xs font-black text-neutral-400 mb-3">
              {item.label}
            </p>
            <p className="text-lg font-black text-neutral-800 transition-colors">
              {item.value}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
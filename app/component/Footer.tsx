import type { ReactElement } from "react";

type SocialLink = {
  label: string;
  href: string;
  accent: string;
  external: boolean;
};

const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Afshin1400-n",
    accent: "hover:text-lime-600",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/afshin-undefined-2468ab43b",
    accent: "hover:text-fuchsia-600",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:Afshin1993norouzi@outlook.com",
    accent: "hover:text-lime-600",
    external: false,
  },
];

export default function Footer(): ReactElement {
  return (
    <footer className="border-t border-neutral-900/10 bg-lime-100">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 font-bold">
          © {new Date().getFullYear()} Afshin Norouzi. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm font-bold text-neutral-500">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`transition-colors ${link.accent}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
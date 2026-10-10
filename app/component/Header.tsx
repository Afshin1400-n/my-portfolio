import type { ReactElement } from "react";
import Link from "next/link";

export default function Header(): ReactElement {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-lime-200 border-b border-neutral-900/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-black tracking-tight">
          <span className="text-black-500">Afshin Norouzi</span>
        </Link>

        <nav className="flex gap-8 text-lg font-medium text-black-500">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <Link href="#projects" className="hover:text-neutral-900 transition-colors">
            Projects
          </Link>
          <Link href="#about" className="hover:text-neutral-900 transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-neutral-900 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
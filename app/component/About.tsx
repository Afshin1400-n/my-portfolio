import type { ReactElement } from "react";

type AboutParagraph = {
  id: number;
  text: string;
};

const PARAGRAPHS: readonly AboutParagraph[] = [
  {
    id: 1,
    text: "I'm Afshin, a frontend developer. I've been working with React and Next.js for a few years, and I have a strong passion for designing clean and fast user interfaces. I love building things that are both beautiful and functional.",
  },
  {
    id: 2,
    text: "Along the way, I've worked with JavaScript, TypeScript, Tailwind, and Zustand, and I'm always eager to learn new things. If you have a project or a question, I'd be happy to hear from you.",
  },
];

export default function About(): ReactElement {
  return (
    <section
      id="about"
      className="scroll-mt-32 max-w-6xl mx-auto px-6 py-28"
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-600 mb-4">
        03 — About Me
      </p>

      <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
        A little bit more
        <br />
        <span className="text-neutral-300">about me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PARAGRAPHS.map((paragraph) => (
          <p
            key={paragraph.id}
            className="text-neutral-500 leading-relaxed text-lg"
          >
            {paragraph.text}
          </p>
        ))}
      </div>
    </section>
  );
}
import type { ReactElement } from "react";
import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
};

const GITHUB_USERNAME = "Afshin1400-n";
const REPOS_PER_PAGE = 4;

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export const revalidate = 3600;

export default async function Product(): Promise<ReactElement> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPOS_PER_PAGE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    return (
      <div className="text-center py-20 text-neutral-500">
        Failed to load projects from GitHub ({response.status})
      </div>
    );
  }

  const repos: Repo[] = await response.json();

  return (
    <section id="projects" className="scroll-mt-32 max-w-6xl mx-auto px-6 py-28">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-600 mb-4">
            02 — Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Recent Projects
          </h2>
        </div>
        <Link
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-black text-neutral-500 hover:text-lime-600 transition-colors"
        >
          All projects ←
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-neutral-900/10 bg-white p-8 hover:border-lime-400 hover:shadow-xl hover:shadow-lime-400/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/0 group-hover:bg-lime-400/20 rounded-full blur-3xl transition-all duration-500" />

            <div className="relative">
              <div className="flex items-center justify-between mb-20">
                <span className="text-xs font-black text-neutral-400">
                  {formatDate(repo.updated_at)}
                </span>
                <span className="w-10 h-10 rounded-full border border-neutral-900/15 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 group-hover:rotate-45 transition-all duration-300">
                  ↖
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3 group-hover:text-lime-600 transition-colors">
                {repo.name}
              </h3>
              <p className="text-neutral-500 leading-relaxed text-sm font-medium">
                {repo.description ?? "No description"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
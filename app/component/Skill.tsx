"use client"


function Skill() {
  return (
    <div>   <section className="max-w-6xl mx-auto px-6 py-28">
        <p className="text-xl font-black uppercase tracking-[0.2em] text-lime-600 mb-4">
          ۰۱ — مهارت‌ها
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
          ابزارهایی که باهاشون
          <br />
          <span className="text-neutral-300">کار می‌کنم</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "React", color: "hover:border-cyan-400 hover:text-cyan-500 hover:bg-cyan-50" },
            { name: "Next.js", color: "hover:border-neutral-900 hover:text-neutral-900 hover:bg-neutral-50" },
            { name: "TypeScript", color: "hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50" },
            { name: "Tailwind", color: "hover:border-sky-400 hover:text-sky-500 hover:bg-sky-50" },
            { name: "Node.js", color: "hover:border-green-400 hover:text-green-500 hover:bg-green-50" },
            { name: "Git", color: "hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50" },
          ].map((skill) => (
            <div
              key={skill.name}
              className={`bg-white border border-neutral-900/10 rounded-2xl p-6 text-lg font-black text-neutral-700 transition-all duration-300 hover:-translate-y-1 shadow-sm ${skill.color}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section></div>
  )
}

export default Skill
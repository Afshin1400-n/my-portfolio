import Link from "next/link";

function Gap() {
  return (
    <div>
         <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-neutral-900/10 bg-gradient-to-br from-lime-100 via-white to-fuchsia-100 p-12 md:p-20 text-center shadow-sm">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/40 blur-[100px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              بیا با هم
              <br />
              <span className="text-lime-600">کاری بسازیم.</span>
            </h2>
            <p className="text-neutral-500 max-w-md mx-auto mb-10 text-lg font-medium">
              اگه پروژه‌ای داری یا فقط می‌خوای گپ بزنیم، پیام بده.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-bold px-8 py-4 rounded-full hover:bg-neutral-800 transition-all hover:gap-3 shadow-lg shadow-neutral-900/10"
            >
              شروع کنیم
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gap
import Spline from "@splinetool/react-spline";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* soft gradient tint to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/10 dark:from-black/80 dark:via-black/50 dark:to-black/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-cyan-600" />
            Enterprise‑grade cybersecurity
          </div>
          <h1 className="mt-5 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
            Secure your brand with modern defense
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Protect your infrastructure, data, and customers with layered security—built for today’s threats and tomorrow’s scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-cyan-600/20 hover:brightness-105 transition"
            >
              Request a security audit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 px-5 py-3 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              Explore solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

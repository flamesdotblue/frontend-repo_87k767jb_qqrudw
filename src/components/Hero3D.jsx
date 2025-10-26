import Spline from "@splinetool/react-spline";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* soft gradient tint to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10 dark:from-black/70 dark:via-black/40 dark:to-black/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-200 backdrop-blur">
            <Rocket className="h-4 w-4 text-fuchsia-500" />
            Next‑gen rocket product x brand collab
          </div>
          <h1 className="mt-5 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
            Launch unforgettable brand experiences
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Blend cutting‑edge aerospace design with playful, interactive storytelling. Co‑create limited drops, immersive campaigns, and product moments that feel out of this world.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/20 hover:brightness-105 transition"
            >
              Partner with us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 px-5 py-3 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

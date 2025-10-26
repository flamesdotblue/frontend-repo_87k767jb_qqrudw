import { Rocket, Sparkles, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Signature Rocket Editions",
    desc: "Co‑branded, limited‑run rockets and accessories that amplify your brand story with aerospace-grade aesthetics.",
  },
  {
    icon: Sparkles,
    title: "Immersive 3D Launch",
    desc: "Interactive 3D hero experiences and microsites that engage audiences and drive share‑worthy moments.",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    desc: "Enterprise‑friendly workflows, review layers, and rights‑safe collaboration across teams and regions.",
  },
  {
    icon: Zap,
    title: "Lightning‑fast GTM",
    desc: "From concept to campaign, our playbooks compress timelines while keeping quality sky‑high.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Designed for standout collaborations
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            A modern toolkit to craft bold, playful partnerships—without compromising polish or performance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-lg transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-600 flex items-center justify-center text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

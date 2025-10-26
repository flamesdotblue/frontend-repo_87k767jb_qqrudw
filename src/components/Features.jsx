import { Shield, Lock, Server, KeyRound } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Zero‑Trust Architecture",
    desc: "Segmented access and continuous verification reduce blast radius and eliminate implicit trust.",
  },
  {
    icon: Lock,
    title: "Threat Detection & Response",
    desc: "Real‑time monitoring with automated playbooks to detect, triage, and neutralize threats fast.",
  },
  {
    icon: Server,
    title: "Cloud & API Security",
    desc: "Hardened configurations, posture management, and API gateways designed for scale.",
  },
  {
    icon: KeyRound,
    title: "Identity & Secrets",
    desc: "Strong authentication, key rotation, and vaulting for teams and machine identities.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Modern defense for modern brands
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            A minimal, enterprise‑ready security stack that’s simple to deploy and powerful to scale.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-lg transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow">
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

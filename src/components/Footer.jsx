import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Ready for a security posture review?
            </h4>
            <p className="mt-1 text-gray-700 dark:text-gray-300 max-w-xl">
              Get a tailored assessment and roadmap to harden your environment end‑to‑end.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:security@aegis.co"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition"
            >
              <Mail className="h-4 w-4" /> security@aegis.co
            </a>
            <div className="text-gray-600 dark:text-gray-300 hidden sm:flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              SOC2‑aware • GDPR‑ready
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Aegis Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

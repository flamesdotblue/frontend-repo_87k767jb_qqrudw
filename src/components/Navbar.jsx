import { Shield, Lock } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
            Aegis Security
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition">Solutions</a>
          <a href="#partners" className="hover:text-gray-900 dark:hover:text-white transition">Partners</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full border border-gray-300/60 dark:border-white/10 px-3 py-1.5 text-gray-900 dark:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 transition"
          >
            <Lock className="h-4 w-4" />
            Get Protected
          </a>
        </nav>
      </div>
    </header>
  );
}

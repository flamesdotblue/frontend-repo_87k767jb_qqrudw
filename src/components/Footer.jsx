import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Let’s build something stellar
            </h4>
            <p className="mt-1 text-gray-700 dark:text-gray-300 max-w-xl">
              Share your vision and we’ll craft a collaboration plan tailored to your brand.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:collab@rocketbrand.com"
              className="rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition"
            >
              collab@rocketbrand.com
            </a>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a aria-label="GitHub" href="#" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Rocket Collab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

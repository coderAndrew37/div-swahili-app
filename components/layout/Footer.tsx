import { NAV_LINKS, SITE } from "@/constants";

const FOOTER_LINKS = NAV_LINKS.slice(0, 4);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/5 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-[#c8a96e] text-xl font-serif">Lugha</span>
          <span className="text-white/60 text-xl font-light">Studio</span>
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-xs text-center">
          © {year} {SITE.name} · {SITE.location} · All rights reserved.
        </p>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

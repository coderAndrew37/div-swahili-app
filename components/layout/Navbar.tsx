"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2"
          >
            Book a Class
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 pb-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/60 hover:text-white text-sm tracking-wide border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full px-5 py-3"
            >
              Book a Class
            </ButtonLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-1 group">
      <span className="text-[#c8a96e] text-2xl font-serif tracking-wider group-hover:text-white transition-colors">
        Lugha
      </span>
      <span className="text-white text-2xl font-light tracking-widest">
        Studio
      </span>
    </a>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
      ) : (
        <path d="M3 8h18M3 16h18" strokeLinecap="round" />
      )}
    </svg>
  );
}

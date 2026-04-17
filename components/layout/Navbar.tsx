"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { X, Menu } from "lucide-react"; // Using Lucide for cleaner icons

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href 
                  ? "text-[#c8a96e] font-medium" 
                  : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-xs uppercase tracking-widest"
            >
              Book a Class
            </ButtonLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Sidebar Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] lg:hidden"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0e0e0e] z-[120] lg:hidden border-l border-white/10 flex flex-col shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex justify-between items-center border-b border-white/5">
                <span className="text-[#c8a96e] font-serif italic text-lg tracking-wider">Menu</span>
                <button 
                aria-label="close menu"
                  onClick={() => setMenuOpen(false)} 
                  className="text-white/50 hover:text-white p-1"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow overflow-y-auto py-8 px-8 space-y-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-2xl font-serif italic transition-colors ${
                        pathname === link.href ? "text-[#c8a96e]" : "text-white/40 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-8 border-t border-white/5">
                <ButtonLink
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  className="w-full justify-center py-4"
                >
                  Book a Class
                </ButtonLink>
                <p className="mt-6 text-[10px] text-center text-white/20 uppercase tracking-[0.3em]">
                  Nairobi • New York • London
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      <span className="text-[#c8a96e] text-2xl font-serif tracking-wider group-hover:text-white transition-colors">
        Lugha
      </span>
      <span className="text-white text-2xl font-light tracking-widest">
        Studio
      </span>
    </Link>
  );
}
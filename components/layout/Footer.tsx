"use client";

import Link from "next/link";
import { NAV_LINKS, SITE } from "@/constants";
import { Globe, Camera, Share2, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  // Split links for organization
  const primaryLinks = NAV_LINKS.filter(link => 
    ["About", "Services", "Methodology", "Pricing"].includes(link.label)
  );
  const secondaryLinks = NAV_LINKS.filter(link => 
    ["Resources", "Blog", "Testimonials", "Contact"].includes(link.label)
  );

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-[#c8a96e] text-2xl font-serif tracking-wider">Lugha</span>
              <span className="text-white text-2xl font-light tracking-widest">Studio</span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Academic-grade Swahili instruction for heritage learners, 
              diplomats, and professionals worldwide.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="#" icon={<Camera size={18} />} />
              <SocialIcon href="#" icon={<Share2 size={18} />} />
              <SocialIcon href={`https://wa.me/${SITE.whatsapp}`} icon={<MessageCircle size={18} />} />
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="text-white font-serif italic mb-6">The Academy</h4>
            <ul className="space-y-4">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-[#c8a96e] text-xs uppercase tracking-widest transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Hub Links */}
          <div>
            <h4 className="text-white font-serif italic mb-6">Student Hub</h4>
            <ul className="space-y-4">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-[#c8a96e] text-xs uppercase tracking-widest transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/corporate" className="text-white/40 hover:text-[#c8a96e] text-xs uppercase tracking-widest transition-colors">
                  Corporate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-white font-serif italic mb-6">Location</h4>
            <div className="flex gap-3 text-white/40">
              <Globe size={16} className="text-[#c8a96e] shrink-0" />
              <p className="text-xs uppercase tracking-widest leading-relaxed">
                Nairobi, Kenya <br /> 
                East African Time (GMT+3)
              </p>
            </div>
            <a 
              href={`mailto:${SITE.email}`} 
              className="inline-flex items-center gap-2 border-b border-[#c8a96e]/20 pb-1 text-[#c8a96e] text-xs font-bold uppercase tracking-widest hover:border-[#c8a96e] transition-all"
            >
              Email Divinar <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
    <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
      © {year} {SITE.name} · All rights reserved.
    </p>
    <Link 
      href="/legal" 
      className="text-white/20 hover:text-white/40 text-[10px] uppercase tracking-[0.2em] transition-colors"
    >
      Terms & Privacy
    </Link>
  </div>
  
  <div className="flex items-center gap-6">
    {/* SleekSites Credit */}
    <a 
      href="https://sleeksites.co.ke" // Replace with your actual agency URL
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-500"
    >
      <span className="text-[9px] uppercase tracking-[0.3em] text-white">
        Powered by
      </span>
      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#c8a96e] group-hover:tracking-[0.5em] transition-all duration-500">
        SleekSites
      </span>
    </a>

    <p className="text-white/10 text-[10px] uppercase tracking-[0.2em] hidden sm:block">
      Nairobi, KE
    </p>
  </div>
</div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-[#c8a96e] hover:border-[#c8a96e]/30 transition-all"
    >
      {icon}
    </a>
  );
}
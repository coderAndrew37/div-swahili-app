// components/ui/ContactForm.tsx  ← client island
"use client";

import { useState } from "react";
import { SITE } from "@/constants";

const OPTIONS = [
  "Children's lessons ($30/hr)",
  "Adult lessons ($40/hr)",
  "Translation / Interpretation",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire up to your preferred form backend (e.g. Resend, Formspree, etc.)
    setStatus("sent");
  }

  return (
    <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8a96e]/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />

      <h3 className="text-2xl font-serif text-white mb-2">Send a message</h3>
      <p className="text-white/40 text-sm mb-10">
        Tell me a bit about your goals and I'll come back to you promptly.
      </p>

      {status === "sent" ? (
        <div className="text-center py-16">
          <p className="text-[#c8a96e] font-serif text-2xl italic mb-3">Asante! 🙏</p>
          <p className="text-white/50">I'll be in touch within a few hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FieldGroup label="Full name" placeholder="Jane Doe" required />
            <FieldGroup label="Email address" placeholder="jane@example.com" type="email" required />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
              I'm interested in
            </label>
            <select
            aria-label="select service"
            className="w-full bg-white/5 border border-white/10 p-4 text-white/80 focus:border-[#c8a96e] outline-none transition-colors appearance-none cursor-pointer">
              {OPTIONS.map((o) => (
                <option key={o} className="bg-[#0a0a0a]">
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Where are you starting from, and where do you want to get to?"
              className="w-full bg-white/5 border border-white/10 p-4 text-white/80 focus:border-[#c8a96e] outline-none transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c8a96e] hover:bg-[#b8985e] text-[#0a0a0a] font-bold py-4 uppercase tracking-widest text-xs transition-all active:scale-[0.98]"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}

function FieldGroup({
  label,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/5 border border-white/10 p-4 text-white/80 focus:border-[#c8a96e] outline-none transition-colors"
      />
    </div>
  );
}
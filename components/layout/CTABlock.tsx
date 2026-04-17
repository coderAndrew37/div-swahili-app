// components/layout/CtaBlock.tsx
import { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

interface CtaAction {
  href: string;
  label: string;
  variant?: "primary" | "outline";
}

interface CtaBlockProps {
  heading: string;
  body?: string;
  actions: [CtaAction, CtaAction?];
  bg?: "primary" | "secondary" | "gold";
  icon?: ReactNode;
}

export function CtaBlock({ heading, body, actions, bg = "primary", icon }: CtaBlockProps) {
  const wrapperClass = {
    primary: "bg-[#0a0a0a] border border-white/10 text-white",
    secondary: "bg-[#111111] border border-white/10 text-white",
    gold: "bg-[#c8a96e] text-[#0a0a0a]",
  }[bg];

  return (
    <div className={`p-12 md:p-20 text-center relative overflow-hidden ${wrapperClass}`}>
      {icon && (
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
            bg === "gold" ? "bg-black/10" : "bg-[#c8a96e]/10 text-[#c8a96e]"
          }`}
        >
          {icon}
        </div>
      )}
      <Reveal>
        <h2 className="text-3xl font-serif mb-6 italic">{heading}</h2>
        {body && (
          <p className={`mb-10 max-w-xl mx-auto leading-relaxed ${
            bg === "gold" ? "text-black/70 font-medium" : "text-white/50"
          }`}>
            {body}
          </p>
        )}
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {actions.filter(Boolean).map((action, i) => (
            <ButtonLink
              key={i}
              href={action!.href}
              variant={action!.variant ?? (i === 0 ? "primary" : "outline")}
              className={`px-10 py-4 ${
                bg === "gold" && i === 0
                  ? "bg-[#0a0a0a] text-white border-none hover:bg-black"
                  : bg === "gold"
                  ? "border-black/20 text-black hover:bg-black/5"
                  : ""
              }`}
            >
              {action!.label}
            </ButtonLink>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
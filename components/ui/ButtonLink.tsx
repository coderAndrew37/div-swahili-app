"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#c8a96e] text-[#0a0a0a] font-semibold hover:bg-white",
  outline: "border border-white/20 text-white hover:border-white/50",
  ghost: "text-[#c8a96e] hover:text-white",
};

export function ButtonLink({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonLinkProps) {
  // Determine if it's an internal link
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide transition-colors duration-200";

  if (isInternal) {
    return (
      <Link href={href!} className={cn(baseStyles, variants[variant], className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
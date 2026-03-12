import { type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

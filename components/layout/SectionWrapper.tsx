import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "primary" | "secondary";
}

const bgs = {
  primary: "bg-[#0a0a0a]",
  secondary: "bg-[#0e0e0e]",
};

export function SectionWrapper({
  children,
  id,
  className,
  bg = "primary",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-28 px-6 overflow-hidden", bgs[bg], className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

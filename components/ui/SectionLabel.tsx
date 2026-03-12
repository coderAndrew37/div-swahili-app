interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[#c8a96e] text-xs tracking-[0.25em] uppercase mb-3 ${className}`}
    >
      {children}
    </p>
  );
}

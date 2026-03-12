interface DividerProps {
  className?: string;
}

export function GoldDivider({ className = "" }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-white/5" />
      <div className="w-1 h-1 bg-[#c8a96e] rotate-45" />
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}

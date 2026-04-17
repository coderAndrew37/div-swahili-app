// components/layout/StatBar.tsx
interface Stat { label: string; value: string }

export function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-[#0e0e0e] py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-white font-serif text-2xl mb-1">{s.value}</p>
            <p className="text-[#c8a96e] text-[10px] uppercase tracking-[0.2em] font-bold">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
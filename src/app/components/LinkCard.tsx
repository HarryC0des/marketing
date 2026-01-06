import { ArrowUpRight, LucideIcon } from "lucide-react";

interface LinkCardProps {
  label: string;
  subtext?: string;
  href: string;
  icon: LucideIcon;
}

export function LinkCard({ label, subtext, href, icon: Icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full bg-black/40 backdrop-blur-xl border-2 border-white/10 p-6 transition-all duration-300 hover:bg-white/5 hover:border-white/30 active:scale-[0.99]"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="mt-0.5 shrink-0 text-white/60 group-hover:text-white transition-colors duration-300">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white">{label}</h3>
            </div>
            {subtext && (
              <p className="text-white/50 mt-1">{subtext}</p>
            )}
          </div>
        </div>
        <div className="shrink-0 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </div>
      </div>
    </a>
  );
}
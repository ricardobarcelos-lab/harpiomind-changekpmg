import { Lock } from "lucide-react";
import type { Candidate, AxisLevel } from "@/data/candidates";
import { cn } from "@/lib/utils";

interface CandidateCardProps {
  candidate: Candidate;
  onClick: () => void;
}

const axisStyles: Record<AxisLevel, string> = {
  high: "bg-kpmg-accent/10 text-kpmg-accent border-kpmg-accent/30",
  mid: "bg-gold/10 text-gold border-gold/30",
  low: "bg-destructive/10 text-destructive border-destructive/30",
};

const CandidateCard = ({ candidate, onClick }: CandidateCardProps) => {
  const isTop = candidate.isTop;
  const isBenchmark = candidate.isBenchmark;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative w-full text-left bg-card rounded-2xl border border-border overflow-hidden",
        "shadow-elegant transition-smooth hover:shadow-premium hover:-translate-y-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-kpmg-blue focus-visible:ring-offset-2",
        isBenchmark && "ring-1 ring-gold/40"
      )}
      aria-label={`Pessoa candidata ${candidate.rank} — perfil blindado`}
    >
      {/* Top accent bar */}
      <div
        className={cn(
          "h-1 w-full",
          isTop ? "bg-gradient-gold" : isBenchmark ? "bg-gold" : "bg-gradient-to-r from-kpmg-blue to-kpmg-light"
        )}
      />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={cn(
              "flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm",
              isTop
                ? "bg-gradient-gold text-harpio-black shadow-gold"
                : isBenchmark
                ? "bg-gold/20 text-gold border border-gold/40"
                : "bg-kpmg-blue text-white"
            )}
          >
            {candidate.rank}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-foreground text-base leading-tight">
                Pessoa candidata {candidate.rank}
              </h3>
              <Lock className="w-3.5 h-3.5 text-gold flex-shrink-0" aria-label="Identidade blindada" />
            </div>
            <p className="text-[11px] text-text-light font-medium leading-snug">
              {candidate.headerSubtitle}
            </p>
          </div>

          <div
            className={cn(
              "flex-shrink-0 flex flex-col items-center justify-center min-w-[58px] px-2 py-2 rounded-lg",
              isBenchmark
                ? "bg-muted text-text-mid"
                : "bg-gradient-to-br from-kpmg-dark to-kpmg-blue text-white"
            )}
          >
            <span className="text-lg font-extrabold leading-none">{candidate.score}</span>
            <span className="text-[8px] font-semibold tracking-wider uppercase mt-1 opacity-80">
              {candidate.scoreLabel ?? "Score"}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 pb-4 border-b border-border">
          <div className="text-[11px]">
            <span className="block font-bold text-kpmg-dark uppercase tracking-wider text-[9px] mb-0.5">
              Empresa
            </span>
            <span className="text-text-mid">{candidate.company}</span>
          </div>
          <div className="text-[11px]">
            <span className="block font-bold text-kpmg-dark uppercase tracking-wider text-[9px] mb-0.5">
              Cargo
            </span>
            <span className="text-text-mid">{candidate.role}</span>
          </div>
          <div className="text-[11px]">
            <span className="block font-bold text-kpmg-dark uppercase tracking-wider text-[9px] mb-0.5">
              Localidade
            </span>
            <span className="text-text-mid">{candidate.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[12.5px] text-text-mid leading-relaxed mb-4">
          {candidate.description}
        </p>

        {/* Axes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {candidate.axes.map((axis, idx) => (
            <span
              key={idx}
              className={cn(
                "text-[10px] font-semibold px-2.5 py-1 rounded-full border",
                axisStyles[axis.level]
              )}
            >
              {axis.label}
            </span>
          ))}
        </div>

        {/* Salary + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-wider text-text-light">
              {candidate.salaryLabel}
            </span>
            <strong className="text-sm font-extrabold text-kpmg-dark">{candidate.salaryValue}</strong>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-smooth">
            <Lock className="w-3 h-3" />
            Desbloquear perfil
          </span>
        </div>
      </div>
    </button>
  );
};

export default CandidateCard;

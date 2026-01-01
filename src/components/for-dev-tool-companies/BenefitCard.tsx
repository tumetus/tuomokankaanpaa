import { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  index: number;
}

export function BenefitCard({ icon, title, desc, index }: BenefitCardProps) {
  const delayClass = index === 0 ? "" : index === 1 ? "animate-delay-100" : "animate-delay-200";
  
  return (
    <div className={`p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/50 transition-colors animate-fade-in-up ${delayClass}`}>
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  );
}


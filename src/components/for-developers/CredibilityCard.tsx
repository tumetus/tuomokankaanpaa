import { ReactNode } from "react";

interface CredibilityCardProps {
  icon: ReactNode;
  text: string;
  index: number;
}

export function CredibilityCard({ icon, text, index }: CredibilityCardProps) {
  const delayClass = index === 0 ? "" : index === 1 ? "animate-delay-100" : "animate-delay-200";
  
  return (
    <div className={`flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 animate-fade-in-left ${delayClass}`}>
      <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}


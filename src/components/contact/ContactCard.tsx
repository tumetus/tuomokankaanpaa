import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  index: number;
  primary?: boolean;
}

export function ContactCard({
  icon,
  label,
  value,
  href,
  index,
  primary = false,
}: ContactCardProps) {
  const delayClass = index === 0 ? "" : index === 1 ? "animate-delay-100" : index === 2 ? "animate-delay-200" : "animate-delay-300";
  
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group p-6 rounded-2xl bg-white/5 border transition-all flex items-center gap-6 animate-fade-in-left ${delayClass} ${
        primary 
          ? "border-primary/30 hover:border-primary/60 hover:bg-primary/5" 
          : "border-white/5 hover:border-primary/50 hover:bg-white/10"
      }`}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
        primary 
          ? "bg-primary/20 text-primary" 
          : "bg-primary/10 text-primary"
      }`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {label}
          </p>
          {primary && (
            <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-0.5 rounded-full">
              Primary
            </span>
          )}
        </div>
        <p className="text-xl font-bold group-hover:text-primary transition-colors break-words">
          {value}
        </p>
      </div>
    </a>
  );
}


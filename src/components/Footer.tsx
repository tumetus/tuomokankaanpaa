import { GitHub, LinkedIn, X, YouTube } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-lg font-bold font-heading tracking-tighter mb-1 uppercase">TUOMO KANKAANPÄÄ</h3>
          <p className="text-muted-foreground text-sm">
            Bridging the gap between complex features and developer adoption.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.youtube.com/tuomokankaanpaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors">
            <YouTube className="w-5 h-5" />
          </a>
          <a href="https://x.com/tumee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </a>
          <a href="https://github.com/tumetus/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <GitHub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/tuomokankaanpaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedIn className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Tuomo Kankaanpää
        </p>
      </div>
    </footer>
  );
}

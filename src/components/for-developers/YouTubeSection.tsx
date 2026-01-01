import { Button } from "@/components/ui/button";
import { YouTube } from "@/components/icons";

export function YouTubeSection() {
  return (
    <div className="p-8 rounded-3xl bg-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 animate-scale-in">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
          <YouTube className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-1">YouTube Channel</h3>
          <p className="text-muted-foreground">
            This is where I share web development tutorials with my 10,000+
            subscribers.
          </p>
        </div>
      </div>
      <a
        href="https://www.youtube.com/tuomokankaanpaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="lg"
          className="border-red-600/20 hover:bg-red-600/10 hover:text-red-600 whitespace-nowrap"
        >
          Watch Content
        </Button>
      </a>
    </div>
  );
}


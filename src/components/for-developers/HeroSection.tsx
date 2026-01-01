import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="mb-16 text-center animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
        Master the ins and outs of <br />
        <span className="text-gradient">Modern Web Development</span>
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
        I'm creating educational content for developers to help them master
        modern web development and become better developers.
      </p>
      <a
        href="https://buildprofitablesaas.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="h-16 px-10 text-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl shadow-xl shadow-accent/20 group"
        >
          5 Biggest Mistakes Web Developers Make Building SaaS Apps{" "}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>
    </div>
  );
}

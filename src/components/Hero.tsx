import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Abstract Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium tracking-wide text-accent bg-accent/10 rounded-full border border-accent/20">
            Ghostwriting for Dev Tool Companies
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6 leading-tight">
            I build <span className="text-gradient">Trust</span> for <br />
            Dev Tool Companies.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            I help dev tool companies bridge the gap between complex features and user adoption while building authority and capturing more leads.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/for-dev-tool-companies">
              <Button size="lg" className="group h-16 px-10 text-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl shadow-xl shadow-accent/20">
                <Shield className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                For Dev Tool Companies
              </Button>
            </Link>
            <Link href="/for-developers">
              <Button size="lg" variant="outline" className="group h-16 px-10 text-lg border-white/10 hover:bg-white/5 rounded-2xl backdrop-blur-sm text-muted-foreground hover:text-foreground">
                <Rocket className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                For Developers
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce animate-fade-in animate-delay-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LinkIcon, Target, Zap, Layout } from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/components/for-dev-tool-companies/HeroSection";
import { BenefitCard } from "@/components/for-dev-tool-companies/BenefitCard";

export default function ForDevToolCompanies() {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Build Trust & Authority",
      desc: "Position your brand as the thought leader in your niche through high-value technical content.",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Onboard Developers",
      desc: "Pre-educate and guide engineers through your tool's core features with a structured, step-by-step path.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Capture Hidden Leads",
      desc: "Engage developers who are interested but not yet ready to sign up. The ones that need more education before taking action.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <HeroSection />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <BenefitCard
                key={i}
                icon={benefit.icon}
                title={benefit.title}
                desc={benefit.desc}
                index={i}
              />
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Drive Adoption & Signups
              </h2>
              <p className="text-muted-foreground">
                My work has helped companies improve user adoption and signup %
                through correct positioning and education.
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
              >
                Let's chat
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


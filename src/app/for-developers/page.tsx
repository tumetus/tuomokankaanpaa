import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/for-developers/HeroSection";
import { CredibilityCard } from "@/components/for-developers/CredibilityCard";
import { YouTubeSection } from "@/components/for-developers/YouTubeSection";
import { Code2, Users, Rocket } from "lucide-react";

export default function ForDevelopers() {
  const credibility = [
    {
      icon: <Code2 className="w-6 h-6" />,
      text: "13+ years experience in web development, focusing on building modern, scalable, performant and maintainable Saas apps.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      text: "Teaching modern web development with AI, Next.js and React to 10,000+ developers on my YouTube channel.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Over 1 million views on YouTube, helping developers master modern web development.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <HeroSection />

          {/* Credibility Statements */}
          <div className="grid grid-cols-1 gap-6 mb-20">
            {credibility.map((item, i) => (
              <CredibilityCard
                key={i}
                icon={item.icon}
                text={item.text}
                index={i}
              />
            ))}
          </div>

          {/* YouTube Section */}
          <YouTubeSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

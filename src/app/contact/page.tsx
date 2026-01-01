import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { GitHub, LinkedIn, X, YouTube } from "@/components/icons";
import { HeroSection } from "@/components/contact/HeroSection";
import { ContactCard } from "@/components/contact/ContactCard";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "tuomo@tuomokankaanpaa.com",
      href: "mailto:tuomo@tuomokankaanpaa.com",
    },
    {
      icon: <YouTube className="w-6 h-6" />,
      label: "YouTube",
      value: "@tuomokankaanpaa",
      href: "https://www.youtube.com/tuomokankaanpaa",
    },
    {
      icon: <X className="w-6 h-6" />,
      label: "X",
      value: "@tumee",
      href: "https://x.com/tumee",
    },
    {
      icon: <GitHub className="w-6 h-6" />,
      label: "GitHub",
      value: "tumetus",
      href: "https://github.com/tumetus/",
    },
    {
      icon: <LinkedIn className="w-6 h-6" />,
      label: "LinkedIn",
      value: "tuomokankaanpaa",
      href: "https://www.linkedin.com/in/tuomokankaanpaa",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <HeroSection />

          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((info, i) => (
              <ContactCard
                key={i}
                icon={info.icon}
                label={info.label}
                value={info.value}
                href={info.href}
                index={i}
                primary={info.label === "Email"}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

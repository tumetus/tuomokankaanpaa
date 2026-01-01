import Image from "next/image";

export default function About() {
  const focuses = [
    { title: "Ghostwriting", desc: "Helping companies improve user adoption and lead capture." },
    { title: "Development", desc: "13 years of experience building scalable B2B SaaS apps." },
    { title: "Education", desc: "Teaching modern web development to 10,000+ subscribers." }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card">
              <Image src="/tk.jpg" alt="Tuomo Kankaanpää" fill className="object-cover object-top" />
            </div>
            {/* YouTube Link Badge */}
            <a 
              href="https://www.youtube.com/tuomokankaanpaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              10k+ Subscribers
            </a>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
              I&apos;m Tuomo.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;ve spent <strong className="text-foreground">13 years building B2B SaaS</strong> and my YouTube videos teaching modern web development have been viewed <strong className="text-foreground">+1M times</strong>.
              </p>
              <p>
                Over the past five years, I&apos;ve grown my YouTube channel to 10,000 subscribers teaching Next.js and React. I&apos;ve also ghostwritten Educational Email Courses and LinkedIn content for developer advocates and tech companies.
              </p>
              <p>
                My work has helped companies improve user adoption and capture leads they would&apos;ve otherwise lost through correct positioning and education, that speaks to developers and technical decision makers.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {focuses.map((f, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-bold text-foreground mb-1">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

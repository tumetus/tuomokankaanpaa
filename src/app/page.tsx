import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)]">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 py-[80px]">
        <div className="flex max-w-[800px] flex-col items-center text-center">
          <div className="mb-8 animate-fade-in">
            <Image
              src="/tk.jpg"
              alt="Tuomo Kankaanpää"
              width={250}
              height={250}
              className="rounded-full object-cover shadow-xl ring-4 ring-white ring-offset-4 ring-offset-[var(--color-bg-base)] transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <h1 className="mb-6 animate-fade-in-delay-1 text-[40px] font-bold leading-tight tracking-tight text-[var(--color-text-black)] sm:text-[48px]">
            Tuomo Kankaanpää
          </h1>
          <p className="animate-fade-in-delay-2 text-xl leading-relaxed text-[var(--color-text-gray)]">
            Software Developer | Ghostwriter for Dev Tool Companies | Youtuber
          </p>
        </div>
      </section>

      {/* For Developers Section */}
      <section className="relative border-t border-[var(--color-border-subtle)] bg-white px-4 py-[80px] shadow-sm">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-8 text-[36px] font-bold leading-tight tracking-tight text-[var(--color-text-black)] sm:text-[40px]">
            For Developers
          </h2>
          <p className="mb-10 text-[18px] leading-[1.75] text-[var(--color-text-gray)]">
            I teach modern web development on YouTube—Next.js, React Server Components, and building production apps with AI.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.youtube.com/tuomokankaanpaa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer rounded-[10px] bg-[var(--color-primary-green)] px-8 py-4 text-[18px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[var(--color-primary-green-hover)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">Watch on YouTube</span>
            </a>
            <a
              href="https://buildprofitablesaas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer rounded-[10px] bg-[var(--color-primary-green)] px-8 py-4 text-[18px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[var(--color-primary-green-hover)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">How to Build Profitable SaaS</span>
            </a>
          </div>
        </div>
      </section>

      {/* For Developer Tool Companies Section */}
      <section className="relative border-t border-[var(--color-border-subtle)] bg-white px-4 py-[80px] shadow-sm">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-8 text-[36px] font-bold leading-tight tracking-tight text-[var(--color-text-black)] sm:text-[40px]">
            For Developer Tool Companies
          </h2>
          <p className="mb-10 text-[18px] leading-[1.75] text-[var(--color-text-gray)]">
            I help you turn technical concepts into Educational Email Courses and LinkedIn content that builds trust and captures leads.
          </p>
          <button
            className="group relative cursor-pointer rounded-[10px] bg-[var(--color-primary-purple)] px-8 py-4 text-[18px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-[var(--color-primary-purple-hover)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            disabled
            aria-label="5 Mistakes Dev Tool Companies Make With Lead Capture & Onboarding - Coming soon"
          >
            <span className="relative z-10 block transition-opacity duration-200 group-hover:opacity-0">
              5 Mistakes Dev Tool Companies Make With Lead Capture & Onboarding
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Coming soon...
            </span>
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative border-t border-[var(--color-border-subtle)] bg-white px-4 py-[80px] shadow-sm">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-10 text-[36px] font-bold leading-tight tracking-tight text-[var(--color-text-black)] sm:text-[40px]">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="text-[18px] leading-[1.75] text-[var(--color-text-gray)]">
              I&apos;ve spent 13 years building B2B SaaS for manufacturing and supply chains. My YouTube videos teaching modern web development have been viewed over 1 million times by 10,000 subscribers.
            </p>
            <p className="text-[18px] leading-[1.75] text-[var(--color-text-gray)]">
              I&apos;ve ghostwritten Educational Email Courses and LinkedIn content for developer advocates and tech companies, helping them improve user adoption and capture leads they would&apos;ve otherwise lost.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative border-t border-[var(--color-border-subtle)] bg-white px-4 py-[80px] shadow-sm">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-8 text-[36px] font-bold leading-tight tracking-tight text-[var(--color-text-black)] sm:text-[40px]">
            Contact
          </h2>
          <p className="mb-6 text-[18px] text-[var(--color-text-gray)]">
            Shoot me an email
          </p>
          <a
            href="mailto:tuomo@tuomokankaanpaa.com"
            className="inline-block text-[18px] font-medium text-[var(--color-primary-green)] transition-all duration-200 hover:underline hover:underline-offset-4"
          >
            tuomo@tuomokankaanpaa.com
          </a>
        </div>
      </section>
    </div>
  );
}

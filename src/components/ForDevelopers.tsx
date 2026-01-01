import Link from "next/link";

export default function ForDevelopers() {
  return (
    <section
      id="developers"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
            For Developers
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed animate-fade-in-up animate-delay-100">
            I teach modern web development on YouTube—Next.js, React Server
            Components, and building production apps with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200">
            <Link
              href="https://www.youtube.com/tuomokankaanpaa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#00D966] text-white rounded-lg font-semibold text-lg hover:bg-[#00C059] transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </Link>
            <Link
              href="https://buildprofitablesaas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#00D966] text-white rounded-lg font-semibold text-lg hover:bg-[#00C059] transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              How to Build Profitable SaaS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function ForDevTools() {
  return (
    <section
      id="dev-tools"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
            For Dev Tool Companies
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed animate-fade-in-up animate-delay-100">
            I help you turn technical concepts into Educational Email Courses and
            LinkedIn content that builds trust and captures leads.
          </p>
          <button
            className="group relative px-8 py-4 bg-[#9333EA] text-white rounded-lg font-semibold text-lg hover:bg-[#7E22CE] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed animate-fade-in-up animate-delay-200"
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
      </div>
    </section>
  );
}


import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold">
          <span className="bg-gradient-to-r from-[#00D966] to-[#9333EA] bg-clip-text text-transparent">
            TUOMO KANKAANPÄÄ
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#dev-tools"
            className="text-white hover:text-[#00D966] transition-colors"
          >
            For Dev Tool Companies
          </Link>
          <Link
            href="#developers"
            className="text-white hover:text-[#00D966] transition-colors"
          >
            For Developers
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-[#00D966] transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://www.youtube.com/tuomokankaanpaa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            YouTube
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}


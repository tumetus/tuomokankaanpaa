import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
            Contact
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 animate-fade-in-up animate-delay-100">
            Shoot me an email
          </p>
          <div className="animate-fade-in-up animate-delay-200">
            <Link
              href="mailto:tuomo@tuomokankaanpaa.com"
              className="inline-block text-lg sm:text-xl font-medium text-[#00D966] hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              tuomo@tuomokankaanpaa.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Gallery Section */}
        <Gallery />

        {/* Trust & Partnership (Jiten Pyramid) */}
        <TrustSection />

        {/* Core Services Bento Grid */}
        <ServicesGrid />

        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 group">
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-parchment text-deep-navy text-xs px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block whitespace-nowrap font-label-caps tracking-widest font-bold border border-rich-gold/20 pointer-events-none">
          CHAT WITH US
        </div>
        <a
          className="w-14 h-14 bg-rich-gold text-deep-navy rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          href="https://wa.me/917507525557?text=Hello%20Rugved%20Vastu%2C%20I%20would%20like%20to%20consult."
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
        </a>
      </div>
    </>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-parchment/90 backdrop-blur-md border-b border-rich-gold/30 shadow-sm">
      <div className="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
          <span className="font-headline-md text-headline-md tracking-tighter text-deep-navy">
            VED NUMRO VASTU
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="font-label-caps text-label-caps text-rich-gold border-b border-rich-gold pb-1 transition-all"
            href="#vastu"
          >
            Vastu
          </Link>
          <Link
            className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors"
            href="#numerology"
          >
            Numerology
          </Link>
          <Link
            className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors"
            href="#astrology"
          >
            Astrology
          </Link>
          <Link
            className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors"
            href="#about"
          >
            About Us
          </Link>
          <Link
            className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors"
            href="#testimonials"
          >
            Testimonials
          </Link>
        </div>
        <a 
          href="https://wa.me/917507525557?text=Hello%20Ved%20Numro%20Vastu%2C%20I%20would%20like%20to%20consult." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-rich-gold text-deep-navy font-button-text text-button-text px-8 py-3 rounded-none hover:bg-muted-gold transition-all cursor-pointer active:opacity-70"
        >
          Consult Now
        </a>
      </div>
    </nav>
  );
}

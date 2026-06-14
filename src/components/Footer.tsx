import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-parchment pt-24 pb-12 border-t border-rich-gold/20">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-20">
        <div className="md:col-span-1">
          <span className="font-headline-sm text-headline-sm text-rich-gold block mb-2">
            VED NUMRO VASTU
          </span>
          <span className="font-label-caps text-[11px] text-parchment/80 block mb-6 tracking-widest">
            BY SWAPNA POWAR
          </span>
          <p className="font-body-sm text-body-sm text-parchment/60 leading-relaxed mb-8">
            Ancient spiritual wisdom distilled for the modern visionary.
            Experience harmony, success, and prosperity through enlightened
            space design.
          </p>
          <div className="flex gap-4">
            <Link
              className="w-10 h-10 border border-rich-gold/20 flex items-center justify-center hover:bg-rich-gold hover:text-deep-navy transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </Link>
            <Link
              className="w-10 h-10 border border-rich-gold/20 flex items-center justify-center hover:bg-rich-gold hover:text-deep-navy transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
            </Link>
            <Link
              className="w-10 h-10 border border-rich-gold/20 flex items-center justify-center hover:bg-rich-gold hover:text-deep-navy transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">call</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-rich-gold mb-8">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Residential Vastu
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Commercial Vastu
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Numerology Reports
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Pyramid Consultation
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Workshops
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-rich-gold mb-8">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Contact Support
              </Link>
            </li>
            <li>
              <Link
                className="font-body-sm text-body-sm text-outline-variant hover:text-muted-gold transition-colors"
                href="#"
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-rich-gold mb-8">
            Location
          </h4>
          <div className="h-48 mb-4 overflow-hidden border border-rich-gold/20">
            <iframe 
              src="https://maps.google.com/maps?q=Bandra%20Kurla%20Complex,%20Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <p className="font-body-sm text-body-sm text-outline-variant">
            Click map to get directions
          </p>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop pt-8 border-t border-rich-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-sm text-body-sm text-outline-variant">
          © 2024 VED NUMRO VASTU. All rights reserved. Spiritual Wisdom for Modern
          Living.
        </p>
        <p className="font-label-caps text-[10px] text-rich-gold/60">
          Designed with Sacred Intention
        </p>
      </div>
    </footer>
  );
}

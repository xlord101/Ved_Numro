"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-parchment/90 backdrop-blur-md border-b border-rich-gold/30 shadow-sm">
      <div className="max-w-container-max mx-auto px-4 md:px-16 flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
          <span className="font-headline-md text-headline-md tracking-tighter text-deep-navy">
            VED NUMRO VASTU
          </span>
        </div>
        
        {/* Desktop Links */}
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
            href="#testimonials"
          >
            Testimonials
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/917507525557?text=Hello%20Ved%20Numro%20Vastu%2C%20I%20would%20like%20to%20consult." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-rich-gold text-deep-navy font-button-text text-button-text px-8 py-3 rounded-none hover:bg-muted-gold transition-all cursor-pointer active:opacity-70"
          >
            Consult Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-deep-navy hover:text-rich-gold transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="md:hidden bg-parchment/95 border-b border-rich-gold/20 py-6 px-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-5">
            <Link
              onClick={() => setIsOpen(false)}
              className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors py-2 border-b border-rich-gold/10"
              href="#vastu"
            >
              Vastu
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors py-2 border-b border-rich-gold/10"
              href="#numerology"
            >
              Numerology
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors py-2 border-b border-rich-gold/10"
              href="#astrology"
            >
              Astrology
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="font-label-caps text-label-caps text-deep-navy hover:text-rich-gold transition-colors py-2 border-b border-rich-gold/10"
              href="#testimonials"
            >
              Testimonials
            </Link>
            <a 
              href="https://wa.me/917507525557?text=Hello%20Ved%20Numro%20Vastu%2C%20I%20would%20like%20to%20consult." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-rich-gold text-deep-navy font-button-text text-button-text py-4 text-center rounded-none hover:bg-muted-gold transition-all cursor-pointer mt-2"
            >
              Consult Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

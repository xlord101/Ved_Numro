export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center bg-deep-navy overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="space-y-8">
          <div className="inline-block border border-rich-gold/50 px-4 py-1">
            <span className="font-label-caps text-label-caps text-rich-gold tracking-widest uppercase">
              Swapna Powar • Vastu & Numerology Expert
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-parchment leading-tight">
            Harmonize Your Space, <br />
            <span className="text-rich-gold italic">Empower Your Destiny.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-parchment/80 max-w-lg">
            Consult with <strong>Swapna Powar</strong> to discover the ancient wisdom of Vastu Shastra and Numerology tailored for modern lifestyles. Align your environment with the cosmos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/917507525557?text=Hello%20Ved%20Numro%20Vastu%2C%20I%20would%20like%20to%20get%20an%20analysis." target="_blank" rel="noopener noreferrer" className="bg-rich-gold text-deep-navy font-button-text text-button-text px-10 py-4 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all flex items-center justify-center gap-2">
              Get Your Analysis
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
            <a href="#testimonials" className="border border-rich-gold/30 text-parchment font-button-text text-button-text px-10 py-4 hover:bg-rich-gold/10 transition-all text-center flex items-center justify-center">
              View Success Stories
            </a>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="relative z-20 rounded-none border border-rich-gold/20 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Vastu Compliant Home"
              className="w-full h-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src="/gallery/2.webp"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-parchment p-8 border border-rich-gold/30 shadow-xl max-w-[200px]">
              <p className="font-headline-sm text-headline-sm text-deep-navy leading-none">
                21k+
              </p>
              <p className="font-label-caps text-[10px] text-rich-gold mt-2">
                Spaces Harmonized Globally
              </p>
            </div>
          </div>
          {/* Decorative Gold Lines */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-rich-gold/30"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-rich-gold/30 -z-10"></div>
        </div>
      </div>
    </section>
  );
}

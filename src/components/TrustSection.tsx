export default function TrustSection() {
  return (
    <section className="py-24 bg-parchment border-b border-rich-gold/10">
      <div className="max-w-container-max mx-auto px-4 md:px-16 text-center">
        <p className="font-label-caps text-label-caps text-rich-gold mb-12 tracking-widest uppercase">
          OFFICIAL AUTHORIZED PARTNER
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 opacity-80 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-4xl text-rich-gold"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              change_history
            </span>
            <span className="font-headline-sm text-headline-sm text-deep-navy">
              Jiten Pyramid®
            </span>
          </div>
          <div className="h-px w-24 bg-rich-gold/20 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-4xl text-rich-gold"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="font-headline-sm text-headline-sm text-deep-navy">
              Vastu World Alliance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

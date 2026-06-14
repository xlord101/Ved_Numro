export default function ServicesGrid() {
  return (
    <section className="py-32 sacred-pattern" id="vastu">
      <div className="max-w-container-max mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-6">
              Our Divine <span className="text-rich-gold">Expertise</span>
            </h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-charcoal/80">
              Bridging the gap between cosmic energy and physical structures
              through scientifically-backed spiritual methodologies.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-3 border border-rich-gold/20 hover:bg-rich-gold hover:text-parchment cursor-pointer transition-all">
              <span className="material-symbols-outlined">west</span>
            </div>
            <div className="p-3 border border-rich-gold/20 hover:bg-rich-gold hover:text-parchment cursor-pointer transition-all">
              <span className="material-symbols-outlined">east</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Vastu Card */}
          <div className="md:col-span-8 group cursor-pointer overflow-hidden relative border border-rich-gold/10 h-[350px] md:h-[450px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Vastu Consultancy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxbMGl6KCpD5cdd9rbH6qTdAW5Hy4OFsSuuguQs8slsn1Bj2NG9WNeyWmIQpD9e4O3W3wIMF0bqHq17Co71rYHhDDwmDgQNK1zbHhrWjiEoY4BmNFVgDIELyip_0WzJq-PgBZVHN-LJyVT9PL995-c1JgPcuJN2xdhGW_DShyERGsp3oZIx_ytCmPy2-iyfvPx6KKw7VhvQ4R28QNbiJAb2kYijr9kXaLApNz1uRNQ12JJm4wlQYDjT4hKk8vhJYdSb0yhkmwNgTI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <span className="font-label-caps text-[10px] text-rich-gold tracking-[0.3em] mb-2 md:mb-4 block">
                RESIDENTIAL & COMMERCIAL
              </span>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-parchment mb-2 md:mb-4">
                Space Harmonization
              </h3>
              <p className="text-parchment/70 font-body-sm md:font-body-md max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                Customized Vastu remedies using Jiten Pyramids and energy
                mapping to enhance health, wealth, and prosperity.
              </p>
            </div>
          </div>
          {/* Numerology Card */}
          <div className="md:col-span-4 group cursor-pointer overflow-hidden relative border border-rich-gold/10 h-[350px] md:h-[450px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Numerology"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGzR_xkhSgU7L1orGSQKm0swGQgAzNwPHass9M0BLzF9wv5-IRKRtXXxjRaWdpt2yfz5qylugXCJH3hNcBfq9muKjCEd-dha8tJrfat0sePvifjzWeW4mceMGJ50sfGXviGHV_eB0F0FTRckSfI8C9TG5uqF8Gj4Bfo8MuuGvYqpNKc4Q6t3B24ilW5cMsQgAMD-TuU9drxtgjwunoOUj1NgWBrdKxToxJvXI0ZBItFSKKLlK-9HfOS9Lt9XAmyI8cOorzwe7vXF4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <span className="font-label-caps text-[10px] text-rich-gold tracking-[0.3em] mb-2 md:mb-4 block">
                DESTINY CODING
              </span>
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-parchment mb-2 md:mb-4">
                Name Numerology
              </h3>
              <p className="text-parchment/70 font-body-sm md:font-body-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                Align your personal or brand name with your vibration for peak
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function LeadGenForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const space = formData.get("space") || "";
    
    const text = `Hello Ved Numro Vastu!%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${space}%0A%0AI would like to schedule an audit.`;
    window.open(`https://wa.me/917507525557?text=${text}`, "_blank");
  };

  return (
    <section className="bg-deep-navy py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          width="100%"
        >
          <path
            d="M0 100 L50 0 L100 100"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.1"
          ></path>
        </svg>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-parchment mb-8">
            Ready to Align Your <br />{" "}
            <span className="text-rich-gold">Energy?</span>
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-rich-gold flex items-center justify-center">
                <span className="material-symbols-outlined text-rich-gold">
                  history
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-parchment mb-2">
                  21+ Years Experience
                </h4>
                <p className="font-body-md text-parchment/60">
                  Founded by industry pioneers who have transformed over 21,000
                  spaces globally.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-rich-gold flex items-center justify-center">
                <span className="material-symbols-outlined text-rich-gold">
                  verified
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-parchment mb-2">
                  Scientific Methodology
                </h4>
                <p className="font-body-md text-parchment/60">
                  We use advanced energy sensors and dowsing techniques for
                  precise analysis.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-rich-gold flex items-center justify-center">
                <span className="material-symbols-outlined text-rich-gold">
                  support_agent
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-parchment mb-2">
                  Lifetime Support
                </h4>
                <p className="font-body-md text-parchment/60">
                  Our relationship doesn&apos;t end with a consultation. We guide
                  you through the transition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-12 relative">
          <div className="absolute -top-6 -right-6 bg-rich-gold text-deep-navy px-6 py-2 font-label-caps text-[10px]">
            LIMITED SLOTS
          </div>
          <h3 className="font-headline-sm text-headline-sm text-parchment mb-8">
            Request a Free Energy Audit
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="font-label-caps text-[10px] text-rich-gold tracking-widest uppercase">
                Full Name
              </label>
              <input
                name="name"
                className="w-full bg-transparent border-b border-rich-gold/30 text-parchment focus:border-rich-gold outline-none py-2 transition-all"
                placeholder="Enter your name"
                type="text"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="font-label-caps text-[10px] text-rich-gold tracking-widest uppercase">
                  Email
                </label>
                <input
                  name="email"
                  className="w-full bg-transparent border-b border-rich-gold/30 text-parchment focus:border-rich-gold outline-none py-2 transition-all"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-[10px] text-rich-gold tracking-widest uppercase">
                  Phone
                </label>
                <input
                  name="phone"
                  className="w-full bg-transparent border-b border-rich-gold/30 text-parchment focus:border-rich-gold outline-none py-2 transition-all"
                  placeholder="+91"
                  type="tel"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-caps text-[10px] text-rich-gold tracking-widest uppercase">
                Select Service
              </label>
              <select name="space" className="w-full bg-transparent border-b border-rich-gold/30 text-parchment focus:border-rich-gold outline-none py-2 transition-all appearance-none cursor-pointer">
                <option className="bg-deep-navy">Residential Vastu</option>
                <option className="bg-deep-navy">Commercial Vastu</option>
                <option className="bg-deep-navy">Name Numerology</option>
                <option className="bg-deep-navy">Astro-Consultancy</option>
              </select>
            </div>
            <button className="w-full bg-rich-gold text-deep-navy font-button-text text-button-text py-5 mt-6 hover:shadow-lg hover:shadow-rich-gold/20 transition-all flex items-center justify-center gap-2 group">
              Schedule Audit
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                send
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

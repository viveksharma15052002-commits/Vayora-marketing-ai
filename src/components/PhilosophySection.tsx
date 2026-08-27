import { motion } from 'motion/react';
import { Flame, Sparkles, Droplets, Award, Compass, ShieldCheck } from 'lucide-react';

export function PhilosophySection() {
  const pillars = [
    {
      icon: Flame,
      title: "Binchotan Hearth Mastery",
      subtitle: "The Ancient Element of Fire",
      description: "Our meats and wild seafood are touched exclusively by pure white Japanese oak charcoal, creating an ethereal sear and delicate smoke without char."
    },
    {
      icon: Droplets,
      title: "Raw Oceanic Purity",
      subtitle: "Pristine Deep-Sea Catch",
      description: "Flown in daily via specialized temperature-controlled air couriers from Brittany, Hokkaido, and the Norwegian fjords within 24 hours of harvest."
    },
    {
      icon: Sparkles,
      title: "Architectural Pâtisserie",
      subtitle: "The Golden Confection",
      description: "French classical technique married with modernist alchemy, incorporating single-origin Venezuelan cacao, rare truffles, and edible 24k gold leaf."
    },
    {
      icon: Award,
      title: "Grand Cru Cellar Heritage",
      subtitle: "1,850+ Rare Bottles",
      description: "A century of winemaking history curated by Master Sommelier Elena Rostova, with direct estate allocations unavailable anywhere else in the Americas."
    }
  ];

  return (
    <section id="philosophy" className="relative py-28 bg-[#09090b] text-[#e8e4dc] overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/30 bg-[#13110e] text-[#dfba73] text-xs uppercase tracking-[0.25em] font-mono mb-4">
            <Compass className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Culinary Ethos</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide mb-6">
            THE PHILOSOPHY OF AURELIA
          </h2>
          <p className="font-cormorant text-xl sm:text-2xl text-[#d4cfc5] font-light leading-relaxed">
            "We do not simply prepare food. We compose fleeting moments of wonder where every temperature, aroma, and vintage harmony awakens the soul."
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Two-Column Story & Chef Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Chef Image with Gold Beveled Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                alt="Executive Chef Julian Vance"
                className="w-full h-[480px] object-cover filter brightness-[0.85] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Chef Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#11100e]/90 backdrop-blur-md border border-[#c5a059]/30">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] font-mono block">Executive Chef & Founder</span>
                <h3 className="font-cinzel text-xl text-white font-bold tracking-wider">Julian Vance</h3>
                <p className="text-xs text-[#c5c0b5] font-serif italic mt-0.5">Alumnus of L'Ambroisie & Ryugin Tokyo</p>
              </div>
            </div>

            {/* Floating Gold Crest Accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#161410] border border-[#dfba73] flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)]">
              <span className="font-cinzel text-xl text-gold-gradient font-bold">★★★</span>
            </div>
          </div>

          {/* Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-mono">Gastronomic Craft</span>
            <h3 className="font-cinzel text-2xl sm:text-4xl text-white font-bold leading-tight">
              Honoring Sacred Terroirs & Modern Precision
            </h3>
            <p className="font-cormorant text-lg sm:text-xl text-[#d4cfc5] font-light leading-relaxed">
              Founded in 2021 by Chef Julian Vance and Sommelier Elena Rostova, Aurelia was envisioned as an uncompromising sanctuary for the senses. Every menu is shaped by lunar micro-seasons and forged with rare purveyors whose generational craftsmanship mirrors our own.
            </p>
            <p className="font-cormorant text-lg sm:text-xl text-[#d4cfc5] font-light leading-relaxed">
              From our custom-cast Japanese Binchotan hearth to our subterranean cellar housing bottles dating back to 1890, Aurelia bridges ancient culinary discipline with avant-garde creativity.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#26231c]">
              <div className="p-3 rounded-lg bg-[#121215] border border-[#23201a]">
                <div className="text-xs text-[#c5a059] font-mono uppercase tracking-widest">Seating Limit</div>
                <div className="font-cinzel text-lg text-white font-bold mt-0.5">34 Guests / Night</div>
              </div>
              <div className="p-3 rounded-lg bg-[#121215] border border-[#23201a]">
                <div className="text-xs text-[#c5a059] font-mono uppercase tracking-widest">Seasonal Acts</div>
                <div className="font-cinzel text-lg text-white font-bold mt-0.5">8 Synchronized</div>
              </div>
              <div className="p-3 rounded-lg bg-[#121215] border border-[#23201a] col-span-2 sm:col-span-1">
                <div className="text-xs text-[#c5a059] font-mono uppercase tracking-widest">Organic Terroir</div>
                <div className="font-cinzel text-lg text-white font-bold mt-0.5">100% Biodynamic</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all duration-300 relative group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a1713] border border-[#c5a059]/30 flex items-center justify-center mb-5 group-hover:border-[#dfba73] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.25)] transition-all">
                  <Icon className="w-5 h-5 text-[#dfba73]" />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a059] font-mono block mb-1">
                  {pillar.subtitle}
                </span>
                <h4 className="font-cinzel text-lg text-white font-bold mb-3 group-hover:text-gold-gradient transition-colors">
                  {pillar.title}
                </h4>
                <p className="font-cormorant text-base text-[#c4bea8] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

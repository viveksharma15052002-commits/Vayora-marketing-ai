import { motion } from 'motion/react';
import { Wine, Sparkles, Shield, Bookmark, ArrowRight, Award } from 'lucide-react';

interface CellarSectionProps {
  onOpenReservation: (experience?: string) => void;
}

export function CellarSection({ onOpenReservation }: CellarSectionProps) {
  const rarities = [
    {
      domaine: "Domaine de la Romanée-Conti",
      appellation: "Vosne-Romanée Grand Cru, Burgundy",
      vintages: "Vertical 1999–2020",
      description: "Direct allocation from the estate cellar. Flawless provenance preserved in limestone catacombs."
    },
    {
      domaine: "Château d'Yquem",
      appellation: "Sauternes Premier Cru Supérieur, Bordeaux",
      vintages: "1890, 1921, 1945, 2001",
      description: "Centuries of liquid amber honey, dried apricot, and infinite philosophical finish."
    },
    {
      domaine: "Krug Clos d'Ambonnay",
      appellation: "Ambonnay Grand Cru, Champagne",
      vintages: "1995, 1998, 2002",
      description: "100% Pinot Noir from a microscopic walled 0.68-hectare single vineyard parcel."
    },
    {
      domaine: "Giacomo Conterno Barolo Monfortino",
      appellation: "Serralunga d'Alba, Piedmont, Italy",
      vintages: "Riserva 2004, 2010, 2015",
      description: "The apex of Nebbiolo, aged up to 7 years in traditional slavonian oak casks."
    }
  ];

  return (
    <section id="cellar" className="relative py-28 bg-[#070709] text-[#e8e4dc] border-t border-[#c5a059]/15 overflow-hidden">
      {/* Background Image of Wine Vault with Dark Obsidian Blend */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
          alt="The Aurelia Grand Cellar"
          className="w-full h-full object-cover filter contrast-[1.3] brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-transparent to-[#070709]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-4">
              <Wine className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Subterranean Vault & Sommelier Sanctuary</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide leading-tight mb-6">
              THE GRAND CELLAR
            </h2>
            <p className="font-cormorant text-xl sm:text-2xl text-[#d4cfc5] font-light leading-relaxed mb-6">
              Carved 30 feet beneath the Manhattan bedrock, our climate-stabilized vault preserves over 1,850 labels from historic châteaux, single-vineyard biodynamic rebels, and century-old Madeira casks.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/40 bg-[#14120e] flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#dfba73]" />
                </div>
                <div>
                  <div className="font-cinzel text-base font-bold text-white">Elena Rostova</div>
                  <div className="text-xs text-[#c5a059] font-mono">Master Sommelier • Grand Award 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stat Highlight Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#12110e]/90 border border-[#c5a059]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono block mb-2">Private Cellar Tasting</span>
            <h3 className="font-cinzel text-2xl text-white font-bold mb-3">The Sommelier Vault Enclave</h3>
            <p className="font-cormorant text-base text-[#c9c3b4] font-light leading-relaxed mb-6">
              Enjoy an exclusive multi-course wine flight guided privately by Master Sommelier Elena Rostova inside the candlelit subterranean chamber.
            </p>
            <button
              onClick={() => onOpenReservation('private-vault')}
              className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_35px_rgba(223,186,115,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inquire for Cellar Vault</span>
            </button>
          </div>
        </div>

        {/* 4 Iconic Allocation Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rarities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#11100e] border border-[#26231c] hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#dfba73] block mb-1">
                  {item.vintages}
                </span>
                <h4 className="font-cinzel text-lg text-white font-bold mb-2 group-hover:text-gold-gradient transition-colors">
                  {item.domaine}
                </h4>
                <p className="text-xs text-[#c5a059] font-serif mb-3">
                  {item.appellation}
                </p>
                <p className="font-cormorant text-sm text-[#bdb7a6] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#232019] flex items-center justify-between text-xs text-[#8f887b]">
                <span>Pristine Temperature 54°F</span>
                <Wine className="w-3.5 h-3.5 text-[#c5a059]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

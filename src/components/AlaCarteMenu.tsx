import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Wine, Eye, ChevronRight, X } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

export function AlaCarteMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string | null>(null);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'starters', label: 'First Acts (Entrées)' },
    { id: 'caviar', label: 'Caviar Service' },
    { id: 'mains', label: 'Grand Plats (Mains)' },
    { id: 'desserts', label: 'Pâtisserie & Dolce' },
    { id: 'cocktails', label: 'Alchemy Cocktails' },
    { id: 'cellar', label: 'Rare Cellar Vintages' }
  ];

  const dietaryOptions = [
    { id: 'GF', label: 'Gluten-Free' },
    { id: 'VG', label: 'Vegetarian' },
    { id: 'DF', label: 'Dairy-Free' },
    { id: 'NF', label: 'Nut-Free' }
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDietary = !selectedDietary || (item.dietary && item.dietary.includes(selectedDietary as any));
    return matchesCategory && matchesDietary;
  });

  return (
    <section id="menu" className="relative py-28 bg-[#09090c] text-[#e8e4dc] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>À La Carte & Caviar Salon</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide mb-4">
            CURATED SELECTIONS
          </h2>
          <p className="font-cormorant text-xl text-[#d4cfc5] font-light">
            Indulge in individualized haute cuisine masterpieces, imperial sturgeon caviar selections, and barrel-aged cocktail alchemy.
          </p>
        </div>

        {/* Filters: Category & Dietary */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-[#23201a] pb-6">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73] shadow-[0_0_15px_rgba(197,160,89,0.2)] font-semibold'
                    : 'border-[#26231c] bg-[#111114] text-[#8e8779] hover:text-[#e8e4dc]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#7a7469]">Dietary:</span>
            {dietaryOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedDietary(selectedDietary === opt.id ? null : opt.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all border ${
                  selectedDietary === opt.id
                    ? 'border-[#dfba73] bg-[#dfba73] text-black font-bold'
                    : 'border-[#2d2922] bg-[#141210] text-[#a09a8d] hover:text-white'
                }`}
              >
                {opt.id}
              </button>
            ))}
            {selectedDietary && (
              <button
                onClick={() => setSelectedDietary(null)}
                className="text-[11px] text-[#dfba73] hover:underline font-mono ml-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedDish(item)}
              className="p-6 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Dish image preview */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-black border border-[#23201a]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.8] group-hover:brightness-[0.95]"
                    referrerPolicy="no-referrer"
                  />
                  {item.isSignature && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 border border-[#dfba73] text-[9px] font-mono tracking-widest text-[#dfba73] uppercase">
                      Signature Creation
                    </div>
                  )}
                  {item.origin && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-[#b3ad9f]">
                      {item.origin}
                    </div>
                  )}
                </div>

                {/* Name & Price */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-gold-gradient transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-cinzel text-lg font-bold text-[#dfba73] whitespace-nowrap">
                    ${item.price.toLocaleString()}
                  </span>
                </div>

                {item.frenchTitle && (
                  <p className="font-cormorant italic text-xs text-[#c5a059]/80 mb-2">
                    {item.frenchTitle}
                  </p>
                )}

                <p className="font-cormorant text-sm text-[#cac5b8] line-clamp-2 font-light mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer Tags */}
              <div className="pt-3 border-t border-[#23201a] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {item.dietary?.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-[#1c1a16] border border-[#332e26] text-[10px] font-mono text-[#c5a059]"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.vintageYear && (
                    <span className="px-1.5 py-0.5 rounded bg-[#1f1910] border border-[#4a3b1d] text-[10px] font-mono text-[#dfba73]">
                      Vintage {item.vintageYear}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#8e8779] group-hover:text-[#dfba73] flex items-center gap-1 font-mono">
                  <span>View</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#12110e] border border-[#c5a059]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 text-[#9a9282] hover:text-[#dfba73]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-60 rounded-xl overflow-hidden mb-6 bg-black border border-[#2a261f]">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-cinzel text-2xl text-gold-gradient font-bold">{selectedDish.name}</h3>
                <span className="font-cinzel text-2xl text-white font-bold">${selectedDish.price.toLocaleString()}</span>
              </div>

              {selectedDish.frenchTitle && (
                <p className="font-cormorant italic text-sm text-[#c5a059] mb-4">{selectedDish.frenchTitle}</p>
              )}

              <p className="font-cormorant text-lg text-[#dcd7cb] font-light leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {selectedDish.pairing && (
                <div className="p-4 rounded-xl bg-[#191713] border border-[#c5a059]/30 flex items-center gap-3">
                  <Wine className="w-5 h-5 text-[#dfba73]" />
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#8a8374]">Master Sommelier Recommendation</div>
                    <div className="text-sm font-semibold text-white">{selectedDish.pairing}</div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

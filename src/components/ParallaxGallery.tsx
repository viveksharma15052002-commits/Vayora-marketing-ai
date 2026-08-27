import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, ZoomIn, Wine, Flame, Compass, Maximize2, Layers, Grid, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export function ParallaxGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'parallax' | 'grid'>('parallax');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for columns
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [60, -220]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], [-40, -100]);

  const categories = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'culinary', label: 'Culinary Masterpieces' },
    { id: 'ambiance', label: 'Grand Salon' },
    { id: 'cellar', label: 'Subterranean Cellar' },
    { id: 'kitchen', label: 'Hearth & Kitchen' },
    { id: 'mixology', label: 'Alchemy Bar' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Divide into 3 columns for parallax view
  const col1 = filteredItems.filter((_, i) => i % 3 === 0);
  const col2 = filteredItems.filter((_, i) => i % 3 === 1);
  const col3 = filteredItems.filter((_, i) => i % 3 === 2);

  return (
    <section id="gallery" ref={containerRef} className="relative py-28 bg-[#09090c] overflow-hidden border-t border-[#c5a059]/15">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#dfba73]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#26231c] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-3">
              <Sparkles className="w-3 h-3 text-[#dfba73]" />
              <span>Multi-Layered Visual Archive</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide">
              PARALLAX PHOTO GALLERY
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-[#d4cfc5] font-light mt-2 max-w-2xl">
              An immersive visual exploration of Aurelia’s culinary craftsmanship, architectural intimacy, and sacred cellar vaults.
            </p>
          </div>

          {/* View Mode Toggle & Category Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <div className="p-1 rounded-full bg-[#141210] border border-[#2a261f] flex items-center">
              <button
                onClick={() => setViewMode('parallax')}
                className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all ${
                  viewMode === 'parallax'
                    ? 'bg-gold-gradient text-black font-semibold shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                    : 'text-[#8f887b] hover:text-[#e8e4dc]'
                }`}
                title="Parallax dynamic scroll flow"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Parallax Flow</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gold-gradient text-black font-semibold shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                    : 'text-[#8f887b] hover:text-[#e8e4dc]'
                }`}
                title="Uniform grid view"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Curated Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73] shadow-[0_0_15px_rgba(197,160,89,0.2)] font-semibold'
                  : 'border-[#26231c] bg-[#111114] text-[#8e8779] hover:text-[#e8e4dc] hover:border-[#c5a059]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PARALLAX VIEW */}
        {viewMode === 'parallax' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[900px]">
            {/* Column 1 */}
            <motion.div style={{ y: yCol1 }} className="flex flex-col gap-6 lg:gap-8">
              {col1.map((item) => (
                <GalleryCard key={item.id} item={item} onSelect={() => setActiveItem(item)} />
              ))}
            </motion.div>

            {/* Column 2 (Offset Parallax) */}
            <motion.div style={{ y: yCol2 }} className="flex flex-col gap-6 lg:gap-8">
              {col2.map((item) => (
                <GalleryCard key={item.id} item={item} onSelect={() => setActiveItem(item)} />
              ))}
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: yCol3 }} className="flex flex-col gap-6 lg:gap-8 md:col-span-2 lg:col-span-1">
              {col3.map((item) => (
                <GalleryCard key={item.id} item={item} onSelect={() => setActiveItem(item)} />
              ))}
            </motion.div>
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} onSelect={() => setActiveItem(item)} isGrid />
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-[#100f0d] border border-[#c5a059]/40 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-[#c5a059]/40 text-[#dfba73] flex items-center justify-center hover:bg-[#c5a059] hover:text-black transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image Preview */}
              <div className="lg:w-3/5 relative min-h-[350px] lg:min-h-[500px] bg-black">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden"></div>
              </div>

              {/* Image Story & Gastronomy Details */}
              <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#141210] to-[#0c0b0a]">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#1b1915] text-[#dfba73] text-[10px] uppercase tracking-[0.25em] font-mono mb-3">
                    {activeItem.category} Archive
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-gold-gradient font-bold leading-tight mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-mono mb-4">
                    {activeItem.subtitle}
                  </p>

                  <p className="font-cormorant text-base sm:text-lg text-[#d8d3c7] leading-relaxed mb-6 font-light">
                    {activeItem.description}
                  </p>

                  {activeItem.chefQuote && (
                    <div className="p-4 rounded-xl bg-[#1c1a16] border-l-2 border-[#dfba73] mb-6">
                      <p className="font-cormorant italic text-sm text-[#e6e2da]">
                        "{activeItem.chefQuote}"
                      </p>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-mono block mt-1">
                        — Julian Vance, Executive Chef
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#2a261f] flex items-center justify-between">
                  <div className="text-xs text-[#8f887b]">
                    Curated Archive • Aurelia 2026
                  </div>
                  <a
                    href="#tasting-menu"
                    onClick={() => setActiveItem(null)}
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dfba73] hover:text-white flex items-center gap-1 group"
                  >
                    <span>Experience This</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface GalleryCardProps {
  key?: React.Key;
  item: GalleryItem;
  onSelect: () => void;
  isGrid?: boolean;
}

function GalleryCard({ item, onSelect, isGrid }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-2xl overflow-hidden border border-[#26231c] hover:border-[#c5a059]/60 bg-[#121215] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.18)] transition-all duration-500 ${
        isGrid
          ? 'h-80 sm:h-96'
          : item.aspect === 'portrait'
          ? 'h-[440px] sm:h-[500px]'
          : 'h-[320px] sm:h-[380px]'
      }`}
    >
      {/* Image with zoom on hover */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.75] group-hover:brightness-[0.95] contrast-[1.1]"
        referrerPolicy="no-referrer"
      />

      {/* Dark & Gold Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300"></div>

      {/* Corner Gold Frame Accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#dfba73]/40 group-hover:border-[#dfba73] transition-colors"></div>
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#dfba73]/40 group-hover:border-[#dfba73] transition-colors"></div>
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#dfba73]/40 group-hover:border-[#dfba73] transition-colors"></div>
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#dfba73]/40 group-hover:border-[#dfba73] transition-colors"></div>

      {/* Category Pill */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a059]/30 text-[10px] uppercase font-mono tracking-widest text-[#dfba73]">
          {item.category}
        </span>
      </div>

      {/* Zoom Icon Button on hover */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-black/80 border border-[#c5a059]/50 text-[#dfba73] flex items-center justify-center shadow-lg">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Bottom Info Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 transform transition-transform duration-300">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-mono block mb-1">
          {item.subtitle}
        </span>
        <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold tracking-wide group-hover:text-gold-gradient transition-colors">
          {item.title}
        </h3>
        <p className="font-cormorant text-xs sm:text-sm text-[#cac4b7] line-clamp-2 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

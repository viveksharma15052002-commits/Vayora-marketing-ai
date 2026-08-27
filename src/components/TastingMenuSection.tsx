import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Wine, Flame, ChevronRight, Info, Check, Award } from 'lucide-react';
import { TASTING_COURSES } from '../data/restaurantData';

interface TastingMenuSectionProps {
  onOpenReservation: (experience?: string) => void;
}

export function TastingMenuSection({ onOpenReservation }: TastingMenuSectionProps) {
  const [showPairings, setShowPairings] = useState(true);
  const [activeCourseIdx, setActiveCourseIdx] = useState<number | null>(null);

  return (
    <section id="tasting-menu" className="relative py-28 bg-[#0b0a0e] text-[#e8e4dc] border-t border-[#c5a059]/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 border-b border-[#26231c] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-3">
              <Award className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Current Winter 2026 Revelation</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide">
              THE AURELIA ODYSSEY
            </h2>
            <p className="font-cormorant text-xl text-[#d4cfc5] font-light mt-2 max-w-2xl">
              An 8-act multi-sensory tasting journey designed by Executive Chef Julian Vance and Sommelier Elena Rostova.
            </p>
          </div>

          {/* Pricing Box & Pairing Switch */}
          <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="p-4 rounded-xl bg-[#131215] border border-[#2d2922] text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-cinzel text-2xl text-gold-gradient font-bold">$395</span>
                <span className="text-xs text-[#8f887b] uppercase font-mono">/ Guest</span>
              </div>
              <div className="text-[11px] text-[#c5a059] font-mono mt-0.5">Grand Cru Pairing +$245</div>
            </div>

            {/* Toggle Pairings Button */}
            <button
              onClick={() => setShowPairings(!showPairings)}
              className={`px-4 py-3 rounded-xl border text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                showPairings
                  ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73]'
                  : 'border-[#332f28] bg-[#121215] text-[#8e8779] hover:text-white'
              }`}
            >
              <Wine className="w-4 h-4" />
              <span>{showPairings ? 'Hide Wine Pairings' : 'Show Sommelier Pairings'}</span>
            </button>
          </div>
        </div>

        {/* Courses Cards List */}
        <div className="space-y-8">
          {TASTING_COURSES.map((course, idx) => (
            <motion.div
              key={course.courseNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121216]/90 border border-[#23201a] hover:border-[#c5a059]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Course Thumbnail */}
                <div className="lg:col-span-4 relative rounded-xl overflow-hidden h-48 sm:h-56 bg-black border border-[#2c2820]">
                  <img
                    src={course.image}
                    alt={course.dishName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85] contrast-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a059]/40 text-[10px] uppercase font-mono tracking-widest text-[#dfba73]">
                    {course.act}
                  </div>
                </div>

                {/* Course Details */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold group-hover:text-gold-gradient transition-colors">
                        {course.dishName}
                      </h3>
                      <span className="text-xs text-[#c5a059] font-mono tracking-widest uppercase">
                        Act 0{course.courseNumber}
                      </span>
                    </div>

                    <p className="font-cormorant italic text-sm text-[#c5a059]/90 mb-3">
                      {course.frenchTitle}
                    </p>

                    <p className="font-cormorant text-base sm:text-lg text-[#d4cfc5] font-light leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Ingredients Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-[10px] text-[#7d766b] font-mono uppercase tracking-widest">Pillars:</span>
                      {course.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-[#181714] border border-[#2b2720] text-[11px] text-[#b8b2a3]"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sommelier Wine Pairing Strip */}
                  <AnimatePresence>
                    {showPairings && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3.5 rounded-xl bg-gradient-to-r from-[#171410] to-[#12110e] border border-[#c5a059]/25 flex items-center justify-between flex-wrap gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#201c15] border border-[#dfba73]/40 flex items-center justify-center">
                            <Wine className="w-4 h-4 text-[#dfba73]" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#f0ebe1] tracking-wide">
                              {course.winePairing}
                            </div>
                            <div className="text-[11px] text-[#c5a059] font-mono">
                              {course.wineRegion}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#8a8375] px-2 py-1 rounded bg-[#0e0d0b]">
                          Sommelier Pairing
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14120e] via-[#1c1913] to-[#14120e] border border-[#c5a059]/40 text-center relative overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.15)]">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-cinzel text-2xl sm:text-4xl text-gold-gradient font-bold mb-3">
              EXPERIENCE THE ODYSSEY
            </h3>
            <p className="font-cormorant text-lg text-[#d8d3c7] font-light mb-8">
              Reservations are released on the 1st of each calendar month at 10:00 AM EST for the following 60-day cycle. Limited to 34 patrons per evening.
            </p>
            <button
              onClick={() => onOpenReservation('tasting-odyssey')}
              className="px-8 py-4 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase tracking-[0.25em] font-bold shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:shadow-[0_0_45px_rgba(223,186,115,0.6)] hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book The 8-Act Odyssey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

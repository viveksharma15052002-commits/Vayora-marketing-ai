import { motion } from 'motion/react';
import { Award, Star, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export function ReviewsAndAccolades() {
  return (
    <section id="accolades" className="relative py-28 bg-[#09090b] text-[#e8e4dc] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Global Critical Acclaim</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide mb-4">
            AWARDS & CRITICAL PRAISE
          </h2>
          <p className="font-cormorant text-xl text-[#d4cfc5] font-light">
            Recognized by the world's most demanding culinary institutions for gastronomic vision, precision execution, and hospitality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between relative group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#c5a059]/20 group-hover:text-[#dfba73]/30 transition-colors mb-4" />

              <div>
                {/* Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#1b1813] border border-[#c5a059]/40 text-[#dfba73] text-[11px] font-mono uppercase tracking-wider mb-4">
                  {review.badge}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#dfba73]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#dfba73] text-[#dfba73]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-cormorant text-lg text-[#e1dcd0] font-light leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Critic & Publication */}
              <div className="pt-4 border-t border-[#23201a]">
                <div className="font-cinzel text-base font-bold text-white group-hover:text-gold-gradient transition-colors">
                  {review.publication}
                </div>
                <div className="text-xs text-[#8f887b] font-mono mt-0.5">
                  {review.critic} • {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accolade Badges Banner */}
        <div className="p-6 rounded-2xl bg-[#11100e] border border-[#29241b] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center items-center">
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xl text-gold-gradient font-bold">MICHELIN</span>
            <span className="text-[10px] text-[#c5a059] font-mono uppercase tracking-widest mt-0.5">3 Stars 2024–2026</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xl text-gold-gradient font-bold">WORLD'S 50 BEST</span>
            <span className="text-[10px] text-[#c5a059] font-mono uppercase tracking-widest mt-0.5">Rank #4 Global</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xl text-gold-gradient font-bold">WINE SPECTATOR</span>
            <span className="text-[10px] text-[#c5a059] font-mono uppercase tracking-widest mt-0.5">Grand Award of Excellence</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xl text-gold-gradient font-bold">FORBES TRAVEL</span>
            <span className="text-[10px] text-[#c5a059] font-mono uppercase tracking-widest mt-0.5">5-Star Distinction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

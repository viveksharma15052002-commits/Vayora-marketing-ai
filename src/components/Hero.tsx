import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ChevronDown, Award, Wine, Flame, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#070709]">
      {/* Background Image with Dark Vignette & Parallax Tilt */}
      <div
        className="absolute inset-0 z-0 scale-105 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Aurelia Grand Salon Ambiance"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.25] saturate-[0.85]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-noise opacity-40"></div>
      </div>

      {/* Floating Gold Glow Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[#dfba73]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Michelin Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c5a059]/30 bg-[#12110e]/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(197,160,89,0.15)]"
        >
          <span className="text-[#dfba73] tracking-[0.2em] text-xs font-serif">★★★</span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#e6e0d3] font-medium">
            Guide MICHELIN 2026 • 3 Stars
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#dfba73] animate-ping"></div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] font-medium leading-[1.08] text-gold-gradient mb-6"
        >
          THE ART OF<br />
          <span className="italic font-cormorant font-normal text-white drop-shadow-[0_4px_30px_rgba(197,160,89,0.3)]">
            Culinary Alchemy
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-cormorant text-lg sm:text-2xl text-[#d1cbbe] max-w-3xl mx-auto font-light leading-relaxed mb-10 tracking-wide"
        >
          Where rare ocean treasures, Binchotan hearth fire, and aged Grand Crus converge into an unforgettable 8-course gastronomic ritual.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mb-12"
        >
          <button
            id="hero-reserve-cta"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-gold-gradient text-[#09090b] font-cinzel text-xs uppercase tracking-[0.25em] font-bold shadow-[0_0_35px_rgba(197,160,89,0.35)] hover:shadow-[0_0_50px_rgba(223,186,115,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Reserve Table</span>
          </button>

          <a
            id="hero-explore-dashboard-btn"
            href="#dashboard"
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#dfba73] bg-[#c5a059]/15 hover:bg-[#c5a059]/30 text-[#dfba73] hover:text-white font-cinzel text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 backdrop-blur-sm shadow-[0_0_20px_rgba(197,160,89,0.2)]"
          >
            <span>Live Console</span>
          </a>

          <a
            id="hero-explore-menu-btn"
            href="#tasting-menu"
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#c5a059]/40 bg-[#121215]/60 hover:bg-[#1c1a16] text-[#dfba73] hover:text-white hover:border-[#dfba73] font-cinzel text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <span>The 8 Acts</span>
          </a>
        </motion.div>

        {/* Live Operational Status Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl w-full pt-8 border-t border-[#c5a059]/15 text-left"
        >
          {RESTAURANT_INFO.stats.map((stat, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-xl bg-[#111114]/70 border border-[#26231c] hover:border-[#c5a059]/40 transition-colors"
            >
              <div className="font-cinzel text-xl sm:text-2xl text-gold-gradient font-bold">{stat.value}</div>
              <div className="text-xs text-[#dcd7cb] font-medium tracking-wider uppercase mt-0.5">{stat.label}</div>
              <div className="text-[11px] text-[#8e8779] font-mono mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#philosophy"
          aria-label="Scroll down to philosophy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
          className="mt-12 text-[#c5a059]/70 hover:text-[#dfba73] flex flex-col items-center gap-2 group transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Explore Sanctuary</span>
          <ChevronDown className="w-4 h-4 text-[#c5a059] group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

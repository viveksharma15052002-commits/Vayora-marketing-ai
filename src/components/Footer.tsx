import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Instagram, Facebook, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#060608] text-[#c9c4b8] border-t border-[#c5a059]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle bottom gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0e12] border border-[#23201a] mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#dfba73] font-mono block mb-1">
              Private Cellar & Menu Gazette
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-gold-gradient font-bold">
              Receive Seasonal Allocations
            </h3>
            <p className="font-cormorant text-base text-[#b0a99c] font-light mt-2">
              Be notified 48 hours prior to public reservation releases, rare Burgundy allocation arrivals, and guest chef residency announcements.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="p-4 rounded-full bg-[#181611] border border-[#dfba73] text-[#dfba73] text-xs font-mono tracking-widest text-center">
                ✓ You are now enrolled in the Aurelia Private Ledger.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-5 py-3.5 rounded-full bg-[#16151a] border border-[#2d2922] text-white placeholder:text-[#6a6458] focus:outline-none focus:border-[#dfba73] text-xs font-mono flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-gold-gradient text-black font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Brand Center & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1c1b18]">
          {/* Col 1 & 2: Logo & Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059] flex items-center justify-center bg-[#14120e]">
                <span className="font-cinzel text-lg font-bold text-gold-gradient">A</span>
              </div>
              <span className="font-cinzel text-2xl tracking-[0.25em] font-bold text-gold-gradient">
                AURELIA
              </span>
            </div>
            <p className="text-xs text-[#c5a059] font-mono uppercase tracking-widest">
              ★★★ Three Michelin Stars • The World's 50 Best #4
            </p>
            <p className="font-cormorant text-sm text-[#9c9587] leading-relaxed max-w-sm">
              An experiential temple of gastronomy uniting French classical discipline, Japanese Binchotan hearth fire, and century-old Grand Crus.
            </p>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#dfba73] font-bold mb-4">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#philosophy" className="hover:text-[#dfba73] transition-colors">Philosophy</a></li>
              <li><a href="#tasting-menu" className="hover:text-[#dfba73] transition-colors">The Tasting Odyssey</a></li>
              <li><a href="#menu" className="hover:text-[#dfba73] transition-colors">À La Carte & Caviar</a></li>
              <li><a href="#gallery" className="hover:text-[#dfba73] transition-colors">Parallax Photo Gallery</a></li>
              <li><a href="#cellar" className="hover:text-[#dfba73] transition-colors">Subterranean Vault</a></li>
            </ul>
          </div>

          {/* Col 4: Experiences */}
          <div>
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#dfba73] font-bold mb-4">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#tasting-menu" className="hover:text-[#dfba73] transition-colors">8-Course Degustation</a></li>
              <li><a href="#cellar" className="hover:text-[#dfba73] transition-colors">Sommelier Vault Tasting</a></li>
              <li><a href="#contact" className="hover:text-[#dfba73] transition-colors">Private Dining Enclave</a></li>
              <li><a href="#contact" className="hover:text-[#dfba73] transition-colors">Executive Buyouts</a></li>
            </ul>
          </div>

          {/* Col 5: Contact & Concierge */}
          <div>
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#dfba73] font-bold mb-4">
              Concierge
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li className="text-white">{RESTAURANT_INFO.phone}</li>
              <li className="text-[#a09a8d]">{RESTAURANT_INFO.email}</li>
              <li className="text-[#a09a8d] pt-2">Upper East Enclave, Manhattan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#787265] gap-4">
          <div>
            © {new Date().getFullYear()} AURELIA Gastronomie LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#c5a059]">Formal Attire Strictly Enforced</span>
            <span>Privacy Policy</span>
            <span>Terms of Seating</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

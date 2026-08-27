import { MapPin, Clock, Phone, Mail, Car, Shield, Compass, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function LocationAndHours() {
  return (
    <section id="contact" className="relative py-28 bg-[#09090b] text-[#e8e4dc] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>The Enclave</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide mb-4">
            LOCATION & SANCTUARY HOURS
          </h2>
          <p className="font-cormorant text-xl text-[#d4cfc5] font-light">
            Situated in the Upper East Enclave with discreet private entrance, dedicated valet staging, and subterranean cellars.
          </p>
        </div>

        {/* 2-Column Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a1713] border border-[#c5a059]/40 flex items-center justify-center text-[#dfba73]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-white">Sanctuary Address</h3>
                  <p className="text-xs text-[#c5a059] font-mono">Discreet Private Entrance</p>
                </div>
              </div>
              <p className="font-cormorant text-base text-[#d8d3c7] leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a1713] border border-[#c5a059]/40 flex items-center justify-center text-[#dfba73]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-white">Hours of Service</h3>
                  <p className="text-xs text-[#c5a059] font-mono">By Confirmed Reservation Only</p>
                </div>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-[#23201a] pb-2">
                  <span className="text-[#a09a8d]">Dinner Service</span>
                  <span className="text-white font-semibold">{RESTAURANT_INFO.hours.dinner}</span>
                </div>
                <div className="flex justify-between border-b border-[#23201a] pb-2">
                  <span className="text-[#a09a8d]">Alchemy Lounge</span>
                  <span className="text-white font-semibold">{RESTAURANT_INFO.hours.lounge}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#a09a8d]">Monday</span>
                  <span className="text-[#c5a059]">Closed for Development</span>
                </div>
              </div>
            </div>

            {/* Etiquette & Valet */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-[#26231c] space-y-3">
              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-[#dfba73] mt-1 shrink-0" />
                <p className="text-xs text-[#cac4b7] font-mono">{RESTAURANT_INFO.valet}</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#dfba73] mt-1 shrink-0" />
                <p className="text-xs text-[#cac4b7] font-mono">{RESTAURANT_INFO.dressCode}</p>
              </div>
            </div>
          </div>

          {/* Stylized Dark Gold Map Graphic Column */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#c5a059]/40 relative min-h-[420px] bg-[#0d0d10] flex flex-col justify-between p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            {/* Background Map Stylized Graphic */}
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80"
                alt="Map Background"
                className="w-full h-full object-cover filter contrast-150 brightness-50 invert"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#09090b]/80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]"></div>
            </div>

            {/* Top Coordinates Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a059]/40 text-[11px] font-mono text-[#dfba73]">
                40.7736° N, 73.9566° W • Upper East Side
              </div>
              <div className="w-3 h-3 rounded-full bg-[#dfba73] animate-ping"></div>
            </div>

            {/* Centered Map Pin Radar */}
            <div className="relative z-10 my-auto text-center flex flex-col items-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#dfba73]/20 animate-ping absolute inset-0"></div>
                <div className="w-16 h-16 rounded-full bg-[#181612] border-2 border-[#dfba73] flex items-center justify-center shadow-[0_0_30px_rgba(223,186,115,0.6)] relative z-10">
                  <span className="font-cinzel text-xl text-gold-gradient font-bold">A</span>
                </div>
              </div>
              <h3 className="font-cinzel text-2xl text-white font-bold tracking-widest mt-4">AURELIA</h3>
              <p className="text-xs text-[#c5a059] font-mono tracking-widest uppercase mt-1">742 Aurelian Ave, New York</p>
            </div>

            {/* Bottom Concierge Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#332f28]/60 bg-black/60 backdrop-blur-md -mx-8 -mb-8 p-6">
              <div className="text-xs text-[#a09a8d] font-mono">
                Concierge Line: <span className="text-white font-bold">{RESTAURANT_INFO.phone}</span>
              </div>
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="px-5 py-2 rounded-full border border-[#c5a059] bg-[#1a1712] text-[#dfba73] text-xs font-mono uppercase tracking-widest hover:bg-[#dfba73] hover:text-black transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

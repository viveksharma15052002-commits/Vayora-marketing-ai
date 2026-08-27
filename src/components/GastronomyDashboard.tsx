import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Wine, 
  Flame, 
  Clock, 
  Compass, 
  Sliders, 
  Layers, 
  Activity, 
  ShieldCheck, 
  ChevronRight, 
  Check, 
  Eye, 
  Maximize2, 
  Thermometer, 
  Droplets, 
  Calendar,
  UtensilsCrossed,
  Award,
  Sparkle
} from 'lucide-react';
import { TASTING_COURSES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { TastingCourse, MenuItem } from '../types';

interface GastronomyDashboardProps {
  onOpenReservation: (experience?: string) => void;
}

export function GastronomyDashboard({ onOpenReservation }: GastronomyDashboardProps) {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'flavor-matrix' | 'itinerary-builder' | 'cellar-index'>('telemetry');
  
  // Flavor matrix state
  const [selectedFlavorProfile, setSelectedFlavorProfile] = useState<string>('oceanic');
  const [selectedDishDetail, setSelectedDishDetail] = useState<TastingCourse | null>(TASTING_COURSES[0]);

  // Itinerary builder state
  const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: string }>({
    starter: 'm-1',
    caviar: 'm-3',
    main: 'm-4',
    dessert: 'm-7'
  });
  const [selectedPairingTier, setSelectedPairingTier] = useState<'classic' | 'grand-cru' | 'prestige'>('grand-cru');

  // Cellar filters
  const [cellarRegion, setCellarRegion] = useState<string>('all');

  // Flavor spectrum options
  const flavorProfiles = [
    {
      id: 'oceanic',
      label: 'Oceanic Purity & Umami',
      sub: 'Hokkaido Uni, Osetra Caviar, Turbot',
      primaryDish: TASTING_COURSES[0],
      stats: { umami: 98, smoke: 35, acidity: 70, crisp: 85, tannin: 20 },
      sommelierNote: 'Paired with high-acid vintage Champagne and crisp minerality Chablis Grand Cru to elevate the salinity of raw sturgeon roe.'
    },
    {
      id: 'ember-smoke',
      label: 'Binchotan Fire & Earth',
      sub: 'Miyazaki A5 Wagyu, Black Truffle, Morels',
      primaryDish: TASTING_COURSES[3],
      stats: { umami: 95, smoke: 90, acidity: 45, crisp: 75, tannin: 90 },
      sommelierNote: 'Requires muscular structure with silky resolved tannins. Paired with aged Margaux Premier Grand Cru and Côte-Rôtie.'
    },
    {
      id: 'citrus-alpine',
      label: 'Alpine Floral & Citrus',
      sub: 'Yuzu Snow, Shiso, White Truffle Dashi',
      primaryDish: TASTING_COURSES[4],
      stats: { umami: 65, smoke: 15, acidity: 95, crisp: 90, tannin: 10 },
      sommelierNote: 'Cryo-temperatures demand crystalline aromatic white Burgundies like Meursault Premier Cru and Krug Rosé.'
    },
    {
      id: 'amber-sweet',
      label: 'Liquid Amber & Valrhona',
      sub: '24K Guanaja Chocolate, Yquem Caramel',
      primaryDish: TASTING_COURSES[7],
      stats: { umami: 40, smoke: 60, acidity: 60, crisp: 70, tannin: 55 },
      sommelierNote: 'Matches noble rot sweetness and roasted hazelnut praline with century-old Sauternes and Rare Cognacs.'
    }
  ];

  const currentFlavor = flavorProfiles.find(f => f.id === selectedFlavorProfile) || flavorProfiles[0];

  // Calculate itinerary total
  const selectedMenuItems = Object.values(selectedCourses)
    .map(id => MENU_ITEMS.find(m => m.id === id))
    .filter(Boolean) as MenuItem[];

  const basePrice = selectedMenuItems.reduce((sum, item) => sum + item.price, 0);
  const pairingCost = selectedPairingTier === 'classic' ? 145 : selectedPairingTier === 'grand-cru' ? 245 : 450;
  const totalPrice = basePrice + pairingCost;

  return (
    <section id="dashboard" className="relative py-28 bg-[#08080a] text-[#e8e4dc] border-t border-[#c5a059]/20 overflow-hidden">
      {/* Dynamic atmospheric lighting */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#c5a059]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-20 w-[550px] h-[550px] bg-[#dfba73]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dashboard Master Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-[#24211a] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#14120e] text-[#dfba73] text-[11px] uppercase tracking-[0.25em] font-mono mb-3 shadow-[0_0_15px_rgba(197,160,89,0.15)]">
              <Activity className="w-3.5 h-3.5 text-[#dfba73] animate-pulse" />
              <span>Aurelia Epicurean Console • Live Telemetry</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-gold-gradient font-bold tracking-wide">
              GASTRONOMY & CELLAR DASHBOARD
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-[#d2ccbf] font-light mt-2 max-w-2xl">
              An interactive visual control suite exploring real-time evening pacing, sensory flavor spectrums, and sommelier allocations.
            </p>
          </div>

          {/* Quick Telemetry Indicators */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-[#111114] border border-[#26231c] flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-xs font-mono text-[#cac4b7]">Evening Service: <strong className="text-emerald-400">Act IV Plating</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#111114] border border-[#26231c] flex items-center gap-2">
              <Thermometer className="w-3.5 h-3.5 text-[#dfba73]" />
              <span className="text-xs font-mono text-[#cac4b7]">Hearth: <strong className="text-white">950°C</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#111114] border border-[#26231c] flex items-center gap-2">
              <Wine className="w-3.5 h-3.5 text-[#dfba73]" />
              <span className="text-xs font-mono text-[#cac4b7]">Cellar Vault: <strong className="text-white">54°F</strong></span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#1f1d18]">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-[0.18em] font-mono transition-all duration-300 flex items-center gap-2.5 border whitespace-nowrap cursor-pointer ${
              activeTab === 'telemetry'
                ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73] shadow-[0_0_20px_rgba(197,160,89,0.25)] font-bold'
                : 'border-[#26231c] bg-[#101013] text-[#8e8779] hover:text-[#e8e4dc] hover:border-[#c5a059]/30'
            }`}
          >
            <Activity className="w-4 h-4 text-[#dfba73]" />
            <span>1. Live Pacing & Sanctuary Telemetry</span>
          </button>

          <button
            onClick={() => setActiveTab('flavor-matrix')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-[0.18em] font-mono transition-all duration-300 flex items-center gap-2.5 border whitespace-nowrap cursor-pointer ${
              activeTab === 'flavor-matrix'
                ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73] shadow-[0_0_20px_rgba(197,160,89,0.25)] font-bold'
                : 'border-[#26231c] bg-[#101013] text-[#8e8779] hover:text-[#e8e4dc] hover:border-[#c5a059]/30'
            }`}
          >
            <Sliders className="w-4 h-4 text-[#dfba73]" />
            <span>2. Terroir & Sensory Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('itinerary-builder')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-[0.18em] font-mono transition-all duration-300 flex items-center gap-2.5 border whitespace-nowrap cursor-pointer ${
              activeTab === 'itinerary-builder'
                ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73] shadow-[0_0_20px_rgba(197,160,89,0.25)] font-bold'
                : 'border-[#26231c] bg-[#101013] text-[#8e8779] hover:text-[#e8e4dc] hover:border-[#c5a059]/30'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-[#dfba73]" />
            <span>3. Bespoke Itinerary & Pairing Calc</span>
          </button>

          <button
            onClick={() => setActiveTab('cellar-index')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-[0.18em] font-mono transition-all duration-300 flex items-center gap-2.5 border whitespace-nowrap cursor-pointer ${
              activeTab === 'cellar-index'
                ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73] shadow-[0_0_20px_rgba(197,160,89,0.25)] font-bold'
                : 'border-[#26231c] bg-[#101013] text-[#8e8779] hover:text-[#e8e4dc] hover:border-[#c5a059]/30'
            }`}
          >
            <Wine className="w-4 h-4 text-[#dfba73]" />
            <span>4. Rare Grand Cru Vault Index</span>
          </button>
        </div>

        {/* TAB 1: LIVE PACING & SANCTUARY TELEMETRY */}
        {activeTab === 'telemetry' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Top 4 Real-time Sensor Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8e8779]">Binchotan Hearth</span>
                  <Flame className="w-4 h-4 text-[#dfba73]" />
                </div>
                <div className="font-cinzel text-2xl text-white font-bold">950°C Seared</div>
                <div className="text-xs text-[#c5a059] font-mono mt-1">Japanese White Oak Embers</div>
                <div className="mt-3 pt-3 border-t border-[#23201a] flex items-center justify-between text-[11px] text-[#8e8779] font-mono">
                  <span>Draft: Active</span>
                  <span className="text-emerald-400">Optimal Sear</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8e8779]">Grand Cru Vault</span>
                  <Wine className="w-4 h-4 text-[#dfba73]" />
                </div>
                <div className="font-cinzel text-2xl text-white font-bold">54.2°F / 70% RH</div>
                <div className="text-xs text-[#c5a059] font-mono mt-1">Limestone Bedrock Catacombs</div>
                <div className="mt-3 pt-3 border-t border-[#23201a] flex items-center justify-between text-[11px] text-[#8e8779] font-mono">
                  <span>1,850+ Bottles</span>
                  <span className="text-emerald-400">Pristine Provenance</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8e8779]">Petrossian Caviar Vault</span>
                  <Droplets className="w-4 h-4 text-[#dfba73]" />
                </div>
                <div className="font-cinzel text-2xl text-white font-bold">28.0°F Stored</div>
                <div className="text-xs text-[#c5a059] font-mono mt-1">Hand-Cut Alpine Ice Beds</div>
                <div className="mt-3 pt-3 border-t border-[#23201a] flex items-center justify-between text-[11px] text-[#8e8779] font-mono">
                  <span>Fresh Beluga & Osetra</span>
                  <span className="text-emerald-400">Peak Freshness</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121216] border border-[#26231c] hover:border-[#c5a059]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8e8779]">Evening Seat Occupancy</span>
                  <Award className="w-4 h-4 text-[#dfba73]" />
                </div>
                <div className="font-cinzel text-2xl text-white font-bold">30 / 34 Guests</div>
                <div className="text-xs text-[#c5a059] font-mono mt-1">4 Exclusive Seats Left Tonight</div>
                <div className="mt-3 pt-3 border-t border-[#23201a] flex items-center justify-between text-[11px] text-[#8e8779] font-mono">
                  <span>Hearth Counter</span>
                  <span className="text-[#dfba73]">1 Reservation Open</span>
                </div>
              </div>
            </div>

            {/* 8-Act Real-time Progression Timeline */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#100f0d] border border-[#c5a059]/30 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-[#26231c] pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#c5a059]">The 8 Synchronized Acts</span>
                  <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold">Winter 2026 Course Progression Sequence</h3>
                </div>
                <div className="text-xs font-mono text-[#8e8779]">
                  Total Runtime: <span className="text-[#dfba73]">165 Minutes</span>
                </div>
              </div>

              {/* Grid of 8 Course Acts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {TASTING_COURSES.map((course, idx) => {
                  const isActive = idx === 3; // Act IV currently active
                  const isPast = idx < 3;
                  return (
                    <div
                      key={course.courseNumber}
                      onClick={() => {
                        setSelectedDishDetail(course);
                        setActiveTab('flavor-matrix');
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                        isActive
                          ? 'border-[#dfba73] bg-[#1c1912] shadow-[0_0_25px_rgba(197,160,89,0.3)]'
                          : isPast
                          ? 'border-[#26231c] bg-[#111114] opacity-85 hover:opacity-100 hover:border-[#c5a059]/40'
                          : 'border-[#1f1e1a] bg-[#0c0c0e] hover:border-[#c5a059]/30'
                      }`}
                    >
                      <div>
                        {/* Course Image Preview */}
                        <div className="relative h-28 rounded-xl overflow-hidden mb-3 bg-black border border-[#26231c]">
                          <img
                            src={course.image}
                            alt={course.dishName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-mono text-[#dfba73] border border-[#c5a059]/40">
                            {course.act.split('•')[0]}
                          </div>
                          {isActive && (
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500/90 text-black text-[9px] font-bold font-mono animate-pulse">
                              Serving Now
                            </div>
                          )}
                        </div>

                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a059] block mb-1">
                          Act 0{course.courseNumber}
                        </span>
                        <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-gold-gradient transition-colors line-clamp-1">
                          {course.dishName}
                        </h4>
                        <p className="font-cormorant italic text-xs text-[#a09a8d] line-clamp-1 mt-0.5">
                          {course.frenchTitle}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#23201a] flex items-center justify-between text-[10px] font-mono text-[#8a8374]">
                        <span className="line-clamp-1">{course.winePairing.split(',')[0]}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#dfba73] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: TERROIR & SENSORY FLAVOR MATRIX */}
        {activeTab === 'flavor-matrix' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Flavor Profiles Selector */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#c5a059] block mb-2">
                  Select Sensory Spectrum
                </span>
                <div className="space-y-3">
                  {flavorProfiles.map((fp) => (
                    <div
                      key={fp.id}
                      onClick={() => {
                        setSelectedFlavorProfile(fp.id);
                        setSelectedDishDetail(fp.primaryDish);
                      }}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        selectedFlavorProfile === fp.id
                          ? 'border-[#dfba73] bg-[#1a1712] shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                          : 'border-[#26231c] bg-[#111114] hover:border-[#c5a059]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-cinzel text-base font-bold text-white">{fp.label}</h4>
                        {selectedFlavorProfile === fp.id && (
                          <div className="w-5 h-5 rounded-full bg-[#dfba73] flex items-center justify-center text-black">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-[#a39c8e] font-cormorant">{fp.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Sommelier Tasting Note Box */}
              <div className="p-5 rounded-2xl bg-[#14120e] border border-[#c5a059]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Wine className="w-4 h-4 text-[#dfba73]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#dfba73]">Master Sommelier Note</span>
                </div>
                <p className="font-cormorant italic text-sm text-[#d4cfc5] leading-relaxed">
                  "{currentFlavor.sommelierNote}"
                </p>
                <div className="mt-2 text-[10px] font-mono text-[#8e8779]">— Elena Rostova, Master Sommelier</div>
              </div>
            </div>

            {/* Right Column: Interactive Dish & Sensory Radar Gauges */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#12110e] border border-[#c5a059]/40 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col justify-between">
              <div>
                {/* Dish Header & Image */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                  <div className="sm:col-span-5 h-48 rounded-2xl overflow-hidden bg-black border border-[#2b271e]">
                    <img
                      src={currentFlavor.primaryDish.image}
                      alt={currentFlavor.primaryDish.dishName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="sm:col-span-7">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#dfba73] px-2.5 py-1 rounded-full bg-black/60 border border-[#c5a059]/30 inline-block mb-2">
                      {currentFlavor.primaryDish.act}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl text-gold-gradient font-bold leading-tight">
                      {currentFlavor.primaryDish.dishName}
                    </h3>
                    <p className="font-cormorant italic text-sm text-[#c5a059] mt-0.5 mb-2">
                      {currentFlavor.primaryDish.frenchTitle}
                    </p>
                    <p className="font-cormorant text-sm text-[#cac4b7] font-light line-clamp-3">
                      {currentFlavor.primaryDish.description}
                    </p>
                  </div>
                </div>

                {/* 5 Sensory Metric Sliders / Meters */}
                <div className="space-y-3.5 mb-6">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#c5a059]">
                    Sensory Balance Breakdown
                  </h4>
                  
                  {/* Umami */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#a09a8d]">Oceanic Umami / Savoriness</span>
                      <span className="text-white font-bold">{currentFlavor.stats.umami}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#201d18] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentFlavor.stats.umami}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#9a7b3c] to-[#dfba73]"
                      />
                    </div>
                  </div>

                  {/* Smoke */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#a09a8d]">Binchotan Smoke & Char Intensity</span>
                      <span className="text-white font-bold">{currentFlavor.stats.smoke}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#201d18] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentFlavor.stats.smoke}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#9a7b3c] to-[#dfba73]"
                      />
                    </div>
                  </div>

                  {/* Acidity */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#a09a8d]">Mineral Acidity & Citrus Bloom</span>
                      <span className="text-white font-bold">{currentFlavor.stats.acidity}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#201d18] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentFlavor.stats.acidity}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#9a7b3c] to-[#dfba73]"
                      />
                    </div>
                  </div>

                  {/* Textural Crisp */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#a09a8d]">Textural Contrast & Crispness</span>
                      <span className="text-white font-bold">{currentFlavor.stats.crisp}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#201d18] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentFlavor.stats.crisp}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#9a7b3c] to-[#dfba73]"
                      />
                    </div>
                  </div>
                </div>

                {/* Wine Allocation Bar */}
                <div className="p-4 rounded-xl bg-[#181611] border border-[#c5a059]/30 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest block">Allocated Pour</span>
                    <span className="font-cinzel text-sm text-white font-bold">{currentFlavor.primaryDish.winePairing}</span>
                  </div>
                  <span className="text-xs font-mono text-[#dfba73] px-3 py-1 rounded bg-[#241f16]">
                    {currentFlavor.primaryDish.wineRegion}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#29251c] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8e8779]">Curated in Winter 2026 Tasting Revelation</span>
                <button
                  onClick={() => onOpenReservation('tasting-odyssey')}
                  className="px-6 py-2.5 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase font-bold tracking-wider hover:scale-105 transition-transform"
                >
                  Reserve This Course
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: BESPOKE ITINERARY BUILDER & PAIRING CALCULATOR */}
        {activeTab === 'itinerary-builder' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Course Selector Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-[#121216] border border-[#26231c]">
                <h3 className="font-cinzel text-xl text-gold-gradient font-bold mb-4">
                  Curate Your Custom 4-Course Degustation
                </h3>

                {/* 1. Starter Choice */}
                <div className="mb-5">
                  <label className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                    1. First Act (Starter)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MENU_ITEMS.filter(m => m.category === 'starters').map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setSelectedCourses(prev => ({ ...prev, starter: m.id }))}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedCourses.starter === m.id
                            ? 'border-[#dfba73] bg-[#1c1912] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                            : 'border-[#26231c] bg-[#111114] hover:border-[#c5a059]/30'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h5 className="font-cinzel text-xs font-bold text-white">{m.name}</h5>
                          <span className="font-cinzel text-xs text-[#dfba73] font-semibold">${m.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Caviar & Oceanic Service */}
                <div className="mb-5">
                  <label className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                    2. Caviar & Oceanic Prelude
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MENU_ITEMS.filter(m => m.category === 'caviar' || m.id === 'm-1').map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setSelectedCourses(prev => ({ ...prev, caviar: m.id }))}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedCourses.caviar === m.id
                            ? 'border-[#dfba73] bg-[#1c1912] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                            : 'border-[#26231c] bg-[#111114] hover:border-[#c5a059]/30'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h5 className="font-cinzel text-xs font-bold text-white">{m.name}</h5>
                          <span className="font-cinzel text-xs text-[#dfba73] font-semibold">${m.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Main Course */}
                <div className="mb-5">
                  <label className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                    3. Hearth & Main Course
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MENU_ITEMS.filter(m => m.category === 'mains').map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setSelectedCourses(prev => ({ ...prev, main: m.id }))}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedCourses.main === m.id
                            ? 'border-[#dfba73] bg-[#1c1912] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                            : 'border-[#26231c] bg-[#111114] hover:border-[#c5a059]/30'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h5 className="font-cinzel text-xs font-bold text-white">{m.name}</h5>
                          <span className="font-cinzel text-xs text-[#dfba73] font-semibold">${m.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Dessert */}
                <div>
                  <label className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                    4. Grand Pâtisserie Finale
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {MENU_ITEMS.filter(m => m.category === 'desserts').map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setSelectedCourses(prev => ({ ...prev, dessert: m.id }))}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedCourses.dessert === m.id
                            ? 'border-[#dfba73] bg-[#1c1912] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                            : 'border-[#26231c] bg-[#111114] hover:border-[#c5a059]/30'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h5 className="font-cinzel text-xs font-bold text-white">{m.name}</h5>
                          <span className="font-cinzel text-xs text-[#dfba73] font-semibold">${m.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Itinerary Live Summary Pass & Pairing Tier */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#12110e] border-2 border-[#dfba73] shadow-[0_0_50px_rgba(197,160,89,0.25)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#332e22] pb-4 mb-5">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a059]">Bespoke Guest Itinerary</span>
                    <h4 className="font-cinzel text-xl text-gold-gradient font-bold">Aurelia Custom Pass</h4>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#dfba73]" />
                </div>

                {/* Selected Courses List */}
                <div className="space-y-3 mb-6">
                  {selectedMenuItems.map((item, idx) => (
                    <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-[#211f19]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#c5a059]">0{idx + 1}.</span>
                        <span className="text-[#e2ded5] font-medium">{item.name}</span>
                      </div>
                      <span className="font-mono text-[#dfba73]">${item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Sommelier Pairing Tier Selector */}
                <div className="mb-6">
                  <label className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                    Sommelier Wine Pairing Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setSelectedPairingTier('classic')}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        selectedPairingTier === 'classic'
                          ? 'border-[#dfba73] bg-[#1c1912] text-[#dfba73]'
                          : 'border-[#26231c] bg-[#101013] text-[#8e8779]'
                      }`}
                    >
                      <div className="text-[10px] font-mono uppercase">Estate</div>
                      <div className="text-xs font-bold font-cinzel">+$145</div>
                    </button>
                    <button
                      onClick={() => setSelectedPairingTier('grand-cru')}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        selectedPairingTier === 'grand-cru'
                          ? 'border-[#dfba73] bg-[#1c1912] text-[#dfba73]'
                          : 'border-[#26231c] bg-[#101013] text-[#8e8779]'
                      }`}
                    >
                      <div className="text-[10px] font-mono uppercase">Grand Cru</div>
                      <div className="text-xs font-bold font-cinzel">+$245</div>
                    </button>
                    <button
                      onClick={() => setSelectedPairingTier('prestige')}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        selectedPairingTier === 'prestige'
                          ? 'border-[#dfba73] bg-[#1c1912] text-[#dfba73]'
                          : 'border-[#26231c] bg-[#101013] text-[#8e8779]'
                      }`}
                    >
                      <div className="text-[10px] font-mono uppercase">Prestige DRC</div>
                      <div className="text-xs font-bold font-cinzel">+$450</div>
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-4 rounded-xl bg-[#161410] border border-[#2e281e] space-y-1.5 mb-6">
                  <div className="flex justify-between text-xs text-[#a09a8d] font-mono">
                    <span>Courses Subtotal:</span>
                    <span>${basePrice}</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#a09a8d] font-mono">
                    <span>Wine Pairing ({selectedPairingTier.toUpperCase()}):</span>
                    <span>${pairingCost}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white font-cinzel pt-2 border-t border-[#29251d]">
                    <span>Total Experience / Guest:</span>
                    <span className="text-gold-gradient">${totalPrice}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenReservation('classic-dining')}
                className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase font-bold tracking-[0.2em] shadow-[0_0_30px_rgba(197,160,89,0.35)] hover:scale-[1.02] transition-transform cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve With This Itinerary</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* TAB 4: RARE GRAND CRU CELLAR INDEX */}
        {activeTab === 'cellar-index' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Cellar Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#26231c] pb-4">
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
                {['all', 'Burgundy', 'Bordeaux', 'Champagne', 'Italy'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setCellarRegion(reg)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                      cellarRegion === reg
                        ? 'border-[#dfba73] bg-[#c5a059]/20 text-[#dfba73]'
                        : 'border-[#26231c] bg-[#111114] text-[#8e8779] hover:text-white'
                    }`}
                  >
                    {reg === 'all' ? 'All Terroirs' : reg}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-[#c5a059]">Direct Subterranean Allocation</span>
            </div>

            {/* Vintage Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Domaine de la Romanée-Conti Grand Cru",
                  vintage: "2015",
                  region: "Burgundy, France",
                  regionTag: "Burgundy",
                  score: "99 Parker",
                  notes: "Violets, truffled forest floor, limitless complexity.",
                  price: "$18,500",
                  image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Château Cheval Blanc Premier Grand Cru Classé A",
                  vintage: "2005",
                  region: "Saint-Émilion, Bordeaux",
                  regionTag: "Bordeaux",
                  score: "100 Parker",
                  notes: "Roasted plum, graphite, velvety tobacco leaf.",
                  price: "$4,200",
                  image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Dom Pérignon P2 Vintage Plénitude",
                  vintage: "2004",
                  region: "Épernay, Champagne",
                  regionTag: "Champagne",
                  score: "98 Spectator",
                  notes: "Smoked brioche, toasted almond, effervescent silk.",
                  price: "$1,850",
                  image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Tenuta San Guido Sassicaia Bolgheri",
                  vintage: "2016",
                  region: "Tuscany, Italy",
                  regionTag: "Italy",
                  score: "100 Parker",
                  notes: "Blackberry, cedarwood, lavender, seamless tannins.",
                  price: "$1,450",
                  image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Château d'Yquem Premier Cru Supérieur",
                  vintage: "2009",
                  region: "Sauternes, Bordeaux",
                  regionTag: "Bordeaux",
                  score: "100 Parker",
                  notes: "Honeyed apricot, saffron, white truffle harmony.",
                  price: "$2,600",
                  image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Krug Clos d'Ambonnay Brut Single Vineyard",
                  vintage: "2002",
                  region: "Ambonnay, Champagne",
                  regionTag: "Champagne",
                  score: "99 Decanter",
                  notes: "Microscopic 0.68ha vineyard, limitless depth.",
                  price: "$5,800",
                  image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
                }
              ]
                .filter(w => cellarRegion === 'all' || w.regionTag === cellarRegion)
                .map((wine, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#11100e] border border-[#26231c] hover:border-[#c5a059]/50 transition-all flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  >
                    <div>
                      <div className="h-40 rounded-xl overflow-hidden mb-4 bg-black border border-[#23201a]">
                        <img
                          src={wine.image}
                          alt={wine.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-[#dfba73] uppercase tracking-widest">
                          Vintage {wine.vintage}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-[#101c14] border border-emerald-500/30">
                          {wine.score}
                        </span>
                      </div>
                      <h4 className="font-cinzel text-base font-bold text-white group-hover:text-gold-gradient transition-colors">
                        {wine.name}
                      </h4>
                      <p className="text-xs text-[#c5a059] font-mono mt-0.5 mb-2">{wine.region}</p>
                      <p className="font-cormorant text-sm text-[#bdb7a6] italic font-light">{wine.notes}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#232019] flex items-center justify-between">
                      <span className="font-cinzel text-lg font-bold text-gold-gradient">{wine.price}</span>
                      <button
                        onClick={() => onOpenReservation('private-vault')}
                        className="text-xs uppercase font-mono text-[#dfba73] hover:underline cursor-pointer"
                      >
                        Inquire Vault
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

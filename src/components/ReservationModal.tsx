import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Sparkles, Check, Wine, Car, Shield, Download, Printer, ChevronRight, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExperience?: string;
}

export function ReservationModal({ isOpen, onClose, defaultExperience = 'tasting-odyssey' }: ReservationModalProps) {
  const [step, setStep] = useState<number>(1);
  const [experience, setExperience] = useState<string>(defaultExperience);
  const [partySize, setPartySize] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-08-30');
  const [timeSlot, setTimeSlot] = useState<string>('19:30');
  const [seatingZone, setSeatingZone] = useState<string>('main-salon');
  const [guestName, setGuestName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');
  const [specialOccasion, setSpecialOccasion] = useState<string>('None');
  const [valetRequired, setValetRequired] = useState<boolean>(true);
  const [sommelierConsultation, setSommelierConsultation] = useState<boolean>(true);
  const [confirmedBooking, setConfirmedBooking] = useState<ReservationData | null>(null);

  const experiences = [
    {
      id: 'tasting-odyssey',
      name: "The 8-Act Aurelia Odyssey",
      price: "$395 / Guest",
      desc: "Our flagship synchronized culinary journey in the Grand Dining Salon.",
      duration: "approx. 2.5 - 3 hours"
    },
    {
      id: 'chefs-counter',
      name: "Chef's Hearth Counter",
      price: "$495 / Guest",
      desc: "Front-row interactive seating facing Chef Julian Vance's Binchotan hearth.",
      duration: "approx. 3 hours • Limited to 8 seats"
    },
    {
      id: 'private-vault',
      name: "The Subterranean Vault",
      price: "$650 / Guest",
      desc: "Exclusive private cellar dining with bespoke Grand Cru vintage pairings.",
      duration: "approx. 3.5 hours"
    },
    {
      id: 'classic-dining',
      name: "À La Carte & Caviar Salon",
      price: "$150 Deposit / Guest",
      desc: "Select customized courses and caviar services at your own leisurely pace.",
      duration: "approx. 2 hours"
    }
  ];

  const timeSlots = [
    { time: '17:30', status: 'Available' },
    { time: '18:15', status: '2 Tables Left' },
    { time: '19:00', status: 'Prime Hour' },
    { time: '19:30', status: 'Limited' },
    { time: '20:15', status: 'Available' },
    { time: '21:00', status: 'Late Salon' }
  ];

  const seatingZones = [
    { id: 'main-salon', name: 'Grand Obsidian Salon', desc: 'Center room atmosphere with ambient chandelier glow' },
    { id: 'velvet-booth', name: 'Intimate Velvet Booth', desc: 'Seductive recessed booth for optimal privacy' },
    { id: 'chefs-counter', name: 'Hearth Chef Counter', desc: 'Direct engagement with the culinary brigade' },
    { id: 'terrace', name: 'Enclosed Solarium Vault', desc: 'Quiet architectural alcove overlooking the cellar' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !email || !phone) return;

    const randomId = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: ReservationData = {
      id: randomId,
      experience: experience as any,
      partySize,
      date,
      timeSlot,
      seatingZone: seatingZone as any,
      guestName,
      email,
      phone,
      dietaryNotes,
      specialOccasion,
      valetRequired,
      sommelierConsultation,
      createdAt: new Date().toISOString()
    };

    setConfirmedBooking(newBooking);
    setStep(4);

    // Trigger celebratory gold confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#dfba73', '#ffffff', '#8c6d32']
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-[#0f0e0c] border border-[#c5a059]/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.95)] my-8 max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#181612] border border-[#332f27] text-[#9b9383] hover:text-[#dfba73] hover:border-[#dfba73] flex items-center justify-center transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#171510] text-[#dfba73] text-[10px] font-mono uppercase tracking-widest mb-2">
            <Sparkles className="w-3 h-3 text-[#dfba73]" />
            <span>Table Concierge</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl text-gold-gradient font-bold tracking-wide">
            RESERVE YOUR TABLE
          </h2>
          <p className="text-xs sm:text-sm text-[#8e8779] font-mono tracking-widest uppercase mt-1">
            Three Michelin Stars • Aurelia Sanctuary
          </p>

          {/* Stepper indicators */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === s
                      ? 'w-10 bg-gold-gradient'
                      : step > s
                      ? 'w-6 bg-[#dfba73]/40'
                      : 'w-4 bg-[#26231c]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* STEP 1: EXPERIENCE SELECTION */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono tracking-[0.25em] text-[#c5a059] mb-4">
              1. Select Gastronomic Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  onClick={() => setExperience(exp.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    experience === exp.id
                      ? 'border-[#dfba73] bg-[#1a1712] shadow-[0_0_25px_rgba(197,160,89,0.25)]'
                      : 'border-[#26231c] bg-[#121215] hover:border-[#c5a059]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-cinzel text-base font-bold text-white">{exp.name}</h4>
                      {experience === exp.id && (
                        <div className="w-5 h-5 rounded-full bg-[#dfba73] flex items-center justify-center text-black">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div className="font-cinzel text-sm text-[#dfba73] font-semibold mb-2">{exp.price}</div>
                    <p className="font-cormorant text-xs text-[#a8a192] leading-relaxed mb-3">{exp.desc}</p>
                  </div>
                  <span className="text-[10px] text-[#787265] font-mono">{exp.duration}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DATE, TIME & PARTY SIZE */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xs uppercase font-mono tracking-[0.25em] text-[#c5a059]">
              2. Date, Time & Party Size
            </h3>

            {/* Party Size Selector */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-2">
                Number of Guests
              </label>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPartySize(num)}
                    className={`w-12 h-12 rounded-xl font-cinzel text-sm font-bold transition-all border ${
                      partySize === num
                        ? 'border-[#dfba73] bg-[#dfba73] text-black shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                        : 'border-[#29251e] bg-[#141210] text-[#cac4b7] hover:border-[#c5a059]/40'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Input */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-2">
                Reservation Date
              </label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#141210] border border-[#2b271f] text-white focus:outline-none focus:border-[#dfba73] font-mono text-sm"
              />
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-2">
                Available Seating Times
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setTimeSlot(slot.time)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      timeSlot === slot.time
                        ? 'border-[#dfba73] bg-[#1c1913] text-[#dfba73] shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                        : 'border-[#26231c] bg-[#121215] text-[#8e8779] hover:border-[#c5a059]/40'
                    }`}
                  >
                    <div className="font-cinzel text-base font-bold text-white">{slot.time}</div>
                    <div className="text-[10px] text-[#c5a059] font-mono">{slot.status}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-widest text-[#8e8779] hover:text-white font-mono"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-8 py-3 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Preferences</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PREFERENCES & GUEST CONTACT */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xs uppercase font-mono tracking-[0.25em] text-[#c5a059]">
              3. Seating Atmosphere & Contact
            </h3>

            {/* Seating Zone */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-2">
                Preferred Seating Ambience
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seatingZones.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSeatingZone(zone.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      seatingZone === zone.id
                        ? 'border-[#dfba73] bg-[#1a1712]'
                        : 'border-[#26231c] bg-[#121215] hover:border-[#c5a059]/40'
                    }`}
                  >
                    <div className="font-cinzel text-sm font-bold text-white">{zone.name}</div>
                    <div className="font-cormorant text-xs text-[#a09a8d]">{zone.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Montgomery Vance"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#141210] border border-[#2b271f] text-white focus:outline-none focus:border-[#dfba73] text-sm"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@exclusive.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#141210] border border-[#2b271f] text-white focus:outline-none focus:border-[#dfba73] text-sm"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-1.5">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (212) 555-0198"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#141210] border border-[#2b271f] text-white focus:outline-none focus:border-[#dfba73] text-sm"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-1.5">
                  Special Occasion
                </label>
                <select
                  value={specialOccasion}
                  onChange={(e) => setSpecialOccasion(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#141210] border border-[#2b271f] text-white focus:outline-none focus:border-[#dfba73] text-sm"
                >
                  <option value="None">Culinary Appreciation</option>
                  <option value="Anniversary">Romantic Anniversary</option>
                  <option value="Birthday">Milestone Birthday</option>
                  <option value="Proposal">Marriage Proposal</option>
                  <option value="Business">Executive Entertaining</option>
                </select>
              </div>
            </div>

            {/* Dietary & Allergies */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-[#9e9788] block mb-1.5">
                Dietary Restrictions / Allergies
              </label>
              <input
                type="text"
                placeholder="e.g. Shellfish allergy, Pescatarian, No alliums"
                value={dietaryNotes}
                onChange={(e) => setDietaryNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#141210] border border-[#2b271f] text-white focus:outline-none focus:border-[#dfba73] text-sm"
              />
            </div>

            {/* Complimentary Services Checkboxes */}
            <div className="p-4 rounded-xl bg-[#141210] border border-[#29251d] space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={valetRequired}
                  onChange={(e) => setValetRequired(e.target.checked)}
                  className="accent-[#dfba73] w-4 h-4 rounded"
                />
                <div className="flex items-center gap-2 text-xs text-[#d4cfc5]">
                  <Car className="w-4 h-4 text-[#dfba73]" />
                  <span>Complimentary Private Chauffeur / Valet Service on 74th St.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sommelierConsultation}
                  onChange={(e) => setSommelierConsultation(e.target.checked)}
                  className="accent-[#dfba73] w-4 h-4 rounded"
                />
                <div className="flex items-center gap-2 text-xs text-[#d4cfc5]">
                  <Wine className="w-4 h-4 text-[#dfba73]" />
                  <span>Request pre-arrival consultation with Master Sommelier Elena Rostova</span>
                </div>
              </label>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs uppercase tracking-widest text-[#8e8779] hover:text-white font-mono"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase tracking-[0.2em] font-bold shadow-[0_0_25px_rgba(197,160,89,0.4)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Reservation</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: LUXURY RESERVATION PASS CONFIRMATION */}
        {step === 4 && confirmedBooking && (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#181611] border border-[#dfba73] text-[#dfba73] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(197,160,89,0.3)]">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl text-gold-gradient font-bold">
              RESERVATION CONFIRMED
            </h3>
            <p className="font-cormorant text-base sm:text-lg text-[#d4cfc5] font-light max-w-md mx-auto">
              We look forward to hosting you for an unforgettable gastronomic ritual at Aurelia.
            </p>

            {/* Gold Foil Pass Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#191610] via-[#12110e] to-[#0a0a0c] border-2 border-[#dfba73] text-left shadow-[0_0_40px_rgba(197,160,89,0.25)]">
              {/* Top Crest */}
              <div className="flex items-center justify-between border-b border-[#3d3422] pb-4 mb-6">
                <div>
                  <span className="font-cinzel text-xl text-gold-gradient font-bold tracking-[0.2em]">AURELIA</span>
                  <div className="text-[10px] text-[#c5a059] font-mono">★★★ Three Michelin Stars</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#8e8779] font-mono uppercase">Booking Ref</span>
                  <div className="font-mono text-sm text-[#dfba73] font-bold">{confirmedBooking.id}</div>
                </div>
              </div>

              {/* Booking Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8374] block">Guest Name</span>
                  <span className="font-cinzel text-sm text-white font-bold">{confirmedBooking.guestName}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8374] block">Date</span>
                  <span className="font-mono text-sm text-white">{confirmedBooking.date}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8374] block">Time Slot</span>
                  <span className="font-mono text-sm text-white">{confirmedBooking.timeSlot}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8374] block">Party Size</span>
                  <span className="font-mono text-sm text-white">{confirmedBooking.partySize} Guests</span>
                </div>
              </div>

              {/* Experience Tier */}
              <div className="p-3 rounded-xl bg-[#15130f] border border-[#2d281f] flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#dfba73] block">Selected Experience</span>
                  <span className="font-cinzel text-sm text-white font-bold uppercase">{confirmedBooking.experience.replace('-', ' ')}</span>
                </div>
                <Award className="w-5 h-5 text-[#dfba73]" />
              </div>

              <div className="text-xs text-[#8f887b] font-mono flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Dress Code: Formal Elegance (Jackets required for gentlemen).</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-full border border-[#c5a059]/40 text-[#dfba73] hover:text-white text-xs uppercase font-mono tracking-widest flex items-center gap-2 bg-[#14120e]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Dining Pass</span>
              </button>
              <button
                onClick={onClose}
                className="px-8 py-2.5 rounded-full bg-gold-gradient text-black font-cinzel text-xs uppercase font-bold tracking-[0.2em]"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu as MenuIcon, X, Sparkles, Utensils, Calendar } from 'lucide-react';
import { luxuryAudio } from '../utils/audioAtmosphere';

interface NavbarProps {
  onOpenReservation: () => void;
}

export function Navbar({ onOpenReservation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = luxuryAudio.toggle();
    setIsAudioActive(active);
  };

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Dashboard", href: "#dashboard", isHighlight: true },
    { name: "The Tasting Odyssey", href: "#tasting-menu" },
    { name: "À La Carte", href: "#menu" },
    { name: "Parallax Gallery", href: "#gallery" },
    { name: "The Grand Cellar", href: "#cellar" },
    { name: "Accolades", href: "#accolades" },
    { name: "Visit & Hours", href: "#contact" }
  ];

  return (
    <>
      <header
        id="luxury-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#09090b]/90 backdrop-blur-md border-b border-[#c5a059]/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Michelin Stars */}
          <a href="#" className="group flex items-center gap-3 focus:outline-none">
            <div className="w-10 h-10 rounded-full border border-[#c5a059]/60 flex items-center justify-center bg-gradient-to-br from-[#1b1916] to-[#09090b] shadow-[0_0_15px_rgba(197,160,89,0.2)] group-hover:border-[#dfba73] group-hover:shadow-[0_0_20px_rgba(223,186,115,0.4)] transition-all">
              <span className="font-cinzel text-lg font-bold text-gold-gradient">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl tracking-[0.25em] font-semibold text-gold-gradient group-hover:opacity-90 transition-opacity">
                AURELIA
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059]/80 font-mono -mt-0.5">
                ★★★ Haute Gastronomie
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors py-1 relative group flex items-center gap-1.5 ${
                  link.isHighlight
                    ? 'text-[#dfba73] font-semibold'
                    : 'text-[#d4cfc5]/80 hover:text-[#dfba73]'
                }`}
              >
                {link.isHighlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfba73] animate-pulse"></span>
                )}
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Audio Ambiance Toggle */}
            <button
              id="ambient-sound-toggle"
              onClick={toggleSound}
              title={isAudioActive ? "Mute ambient lounge music" : "Play subtle ambient lounge music"}
              className={`px-3 py-2 rounded-full text-xs flex items-center gap-2 border transition-all duration-300 ${
                isAudioActive
                  ? 'border-[#dfba73] bg-[#c5a059]/15 text-[#dfba73] shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                  : 'border-[#332f28] bg-[#121215]/80 text-[#9b9385] hover:text-[#e8e4dc] hover:border-[#c5a059]/40'
              }`}
            >
              {isAudioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#dfba73]" />
                  <span className="hidden sm:inline text-[11px] tracking-wider uppercase font-mono">Ambiance On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px] tracking-wider uppercase font-mono">Sound</span>
                </>
              )}
            </button>

            {/* Reserve Table Button */}
            <button
              id="nav-reserve-btn"
              onClick={onOpenReservation}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#9a7b3c] via-[#dfba73] to-[#9a7b3c] group-hover:opacity-100 transition-opacity"></span>
              <span className="relative block px-4 sm:px-6 py-2 rounded-full bg-[#0d0d10] text-[#dfba73] text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 group-hover:bg-[#161412] group-hover:text-white flex items-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                <Calendar className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>Reserve</span>
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#332f28] text-[#c5a059] bg-[#121215]/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8 py-20 border-b border-[#c5a059]/30">
          <div className="text-center mb-8">
            <span className="font-cinzel text-3xl text-gold-gradient font-bold tracking-[0.2em]">AURELIA</span>
            <p className="text-xs text-[#c5a059]/70 tracking-[0.25em] uppercase mt-1">★★★ Three Michelin Stars</p>
          </div>
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.25em] text-[#e8e4dc] hover:text-[#dfba73] transition-colors py-2 border-b border-[#26231e]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(197,160,89,0.4)]"
            >
              Reserve a Table
            </button>
            <button
              onClick={() => {
                toggleSound();
              }}
              className="w-full py-3 rounded-full border border-[#c5a059]/40 text-[#dfba73] text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 bg-[#14120e]"
            >
              {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              {isAudioActive ? 'Ambiance Audio Active' : 'Enable Atmosphere Lounge Audio'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

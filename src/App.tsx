/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { GastronomyDashboard } from './components/GastronomyDashboard';
import { TastingMenuSection } from './components/TastingMenuSection';
import { ParallaxGallery } from './components/ParallaxGallery';
import { AlaCarteMenu } from './components/AlaCarteMenu';
import { CellarSection } from './components/CellarSection';
import { ReviewsAndAccolades } from './components/ReviewsAndAccolades';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string>('tasting-odyssey');

  const handleOpenReservation = (exp: string = 'tasting-odyssey') => {
    setSelectedExperience(exp);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e8e4dc] selection:bg-[#c5a059] selection:text-black font-sans-ui antialiased">
      {/* Floating Navbar */}
      <Navbar onOpenReservation={() => handleOpenReservation('tasting-odyssey')} />

      {/* Hero Section with Parallax Background */}
      <main id="main-content">
        <Hero onOpenReservation={() => handleOpenReservation('tasting-odyssey')} />

        {/* Philosophy & Chef Vance */}
        <PhilosophySection />

        {/* Interactive Epicurean Console & Sommelier Dashboard */}
        <GastronomyDashboard onOpenReservation={handleOpenReservation} />

        {/* 8-Act Tasting Odyssey */}
        <TastingMenuSection onOpenReservation={handleOpenReservation} />

        {/* Flagship Parallax Photo Gallery */}
        <ParallaxGallery />

        {/* Curated À La Carte & Caviar */}
        <AlaCarteMenu />

        {/* The Grand Cellar & Sommelier Vault */}
        <CellarSection onOpenReservation={handleOpenReservation} />

        {/* Accolades & Critic Reviews */}
        <ReviewsAndAccolades />

        {/* Location, Map & Sanctuary Hours */}
        <LocationAndHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        defaultExperience={selectedExperience}
      />
    </div>
  );
}


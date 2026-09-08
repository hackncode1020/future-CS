import React, { useState } from 'react';
import { GoldenParticlesCanvas } from './components/GoldenParticlesCanvas';
import { PasswordGate } from './components/PasswordGate';
import { OpeningReveal } from './components/OpeningReveal';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PersonalLetterSection } from './components/PersonalLetterSection';
import { MentorAppreciationSection } from './components/MentorAppreciationSection';
import { CSJourneySection } from './components/CSJourneySection';
import { BirthdayCountdownSection } from './components/BirthdayCountdownSection';
import { WishesSection } from './components/WishesSection';
import { FunnySurpriseSection } from './components/FunnySurpriseSection';
import { BestOfLuckSection } from './components/BestOfLuckSection';
import { FinalCelebrationSection } from './components/FinalCelebrationSection';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowReveal(true);
  };

  const handleRevealComplete = () => {
    setShowReveal(false);
    // Trigger initial celebration particle burst on entering
    setBurstCount((prev) => prev + 1);
  };

  const triggerCelebration = () => {
    setBurstCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#05070E] text-[#F3EFE6] relative overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#FFEAA7]">
      {/* Dynamic Golden Canvas Particles & Confetti */}
      <GoldenParticlesCanvas
        intensity={isUnlocked ? 'ambient' : 'subtle'}
        burstTrigger={burstCount}
      />

      {/* Password Protection Gate (Code: 1009) */}
      {!isUnlocked && <PasswordGate onUnlock={handleUnlock} />}

      {/* Opening Cinematic Sequence */}
      {isUnlocked && showReveal && (
        <OpeningReveal onComplete={handleRevealComplete} />
      )}

      {/* Main Luxury Birthday Experience */}
      {isUnlocked && !showReveal && (
        <main className="relative z-20">
          {/* Navigation Bar */}
          <Navigation onCelebrationTrigger={triggerCelebration} />

          {/* Hero Section */}
          <HeroSection
            onExploreClick={() => {
              document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Personal Handwritten / Editorial Letter */}
          <PersonalLetterSection />

          {/* Mentor Appreciation & "You Push People Forward" */}
          <MentorAppreciationSection />

          {/* The CS Journey & Motivation Section */}
          <CSJourneySection />

          {/* Birthday Countdown (10/09/2026) */}
          <BirthdayCountdownSection onCelebrate={triggerCelebration} />

          {/* Wishes Section */}
          <WishesSection />

          {/* Playful Funny Surprise Section */}
          <FunnySurpriseSection onCelebrate={triggerCelebration} />

          {/* Best of Luck & Interactive Secret Note */}
          <BestOfLuckSection onCelebrate={triggerCelebration} />

          {/* Final Celebration, Grand Message & Share Feature */}
          <FinalCelebrationSection onCelebrate={triggerCelebration} />
        </main>
      )}
    </div>
  );
}

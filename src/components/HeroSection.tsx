import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Award, Scroll, BookOpen } from 'lucide-react';
import { CSGovernanceSeal, CSStudyCompendium } from './CSArtwork';
import { playHarmonicChime } from '../utils/audio';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 overflow-hidden"
    >
      {/* Editorial background grid & soft radial vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating abstract document-inspired geometric shapes */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-6 sm:left-16 w-28 sm:w-40 h-36 sm:h-52 rounded-xl border border-[#D4AF37]/20 bg-[#0B101E]/40 backdrop-blur-sm -rotate-6 pointer-events-none hidden md:block shadow-2xl"
      >
        <div className="p-4 flex flex-col gap-2 opacity-50">
          <div className="w-12 h-1.5 bg-[#D4AF37] rounded" />
          <div className="w-full h-1 bg-slate-600 rounded" />
          <div className="w-4/5 h-1 bg-slate-600 rounded" />
          <div className="w-2/3 h-1 bg-slate-600 rounded" />
          <div className="mt-4 flex justify-between items-center">
            <div className="w-6 h-6 rounded-full border border-[#D4AF37]/60" />
            <div className="w-10 h-1 bg-[#D4AF37]/50 rounded" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-36 right-6 sm:right-16 w-32 sm:w-48 h-44 sm:h-60 rounded-xl border border-[#D4AF37]/20 bg-[#160D1E]/40 backdrop-blur-sm rotate-6 pointer-events-none hidden md:block shadow-2xl"
      >
        <div className="p-4 flex flex-col gap-2 opacity-50">
          <div className="w-16 h-1.5 bg-[#D4AF37] rounded" />
          <div className="w-full h-1 bg-slate-600 rounded" />
          <div className="w-5/6 h-1 bg-slate-600 rounded" />
          <div className="w-3/4 h-1 bg-slate-600 rounded" />
          <div className="mt-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <div className="w-12 h-1 bg-[#D4AF37]/40 rounded" />
          </div>
        </div>
      </motion.div>

      {/* Top pill badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 mb-4"
      >
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D4AF37]/35 bg-[#0C1220]/75 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-[#FFEAA7]" />
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#F5E6C8] uppercase font-semibold">
            CELEBRATING EXCELLENCE • 10.09.2026
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FFEAA7]" />
        </div>
      </motion.div>

      {/* Main Core Typography Stack */}
      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center my-auto">
        {/* HAPPY BIRTHDAY */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-cinzel text-base sm:text-xl md:text-2xl text-[#E8DFC9] uppercase font-semibold tracking-[0.3em] sm:tracking-[0.45em] mb-2"
        >
          HAPPY BIRTHDAY
        </motion.p>

        {/* NISHTHA */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-[clamp(2.8rem,9vw,8rem)] font-extrabold tracking-tight leading-none text-gold-gradient drop-shadow-[0_10px_35px_rgba(212,175,55,0.35)] mb-6 select-none"
        >
          NISHTHA
        </motion.h1>

        {/* FUTURE CS - THE ICONIC TITLE REVEAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-2xl px-4 my-3"
        >
          {/* Glowing accent border line */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111726]/80 via-[#0B101D]/90 to-[#070A12] border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] flex flex-col items-center">
            {/* Corner gold brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FFEAA7]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FFEAA7]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FFEAA7]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FFEAA7]" />

            <span className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-semibold mb-1">
              THE NEXT CHAPTER • COMPANY SECRETARY
            </span>

            <h2 className="font-cinzel text-[clamp(1.8rem,5.5vw,4.5rem)] font-black tracking-[0.12em] text-[#FFF9E6] leading-none drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)] text-center">
              FUTURE CS.
            </h2>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3" />

            {/* Signature Tagline */}
            <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#E8DFC9] text-center font-medium">
              “Happy Birthday, Future CS! 🎓🎂✨”
            </p>
          </div>
        </motion.div>

        {/* Narrative editorial tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed mt-4 px-4"
        >
          A tribute to dedication, boundless intellect, and the inspiring leadership you bring to every room.
          You are not just celebrating another birthday — you are preparing for the person you are becoming.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#letter"
            onClick={(e) => {
              e.preventDefault();
              playHarmonicChime('open');
              document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3DE8A] to-[#AA820A] text-[#080B13] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <Scroll className="w-4 h-4 text-[#080B13]" />
            <span>OPEN YOUR LETTER ✉️</span>
          </a>

          <a
            href="#journey"
            onClick={(e) => {
              e.preventDefault();
              playHarmonicChime('tick');
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-xl border border-[#D4AF37]/40 bg-[#0E1526]/80 text-[#F5E6C8] font-cinzel text-xs sm:text-sm tracking-[0.15em] hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>EXPLORE CS JOURNEY</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-20 mt-8 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="text-[10px] tracking-[0.3em] font-mono text-[#D4AF37]/80 uppercase">
          SCROLL TO UNVEIL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

interface OpeningRevealProps {
  onComplete: () => void;
}

export const OpeningReveal: React.FC<OpeningRevealProps> = ({ onComplete }) => {
  // Stage 0: Point of light expanding
  // Stage 1: Date "10 • 09 • 2026"
  // Stage 2: "A special day for someone who inspires more than she knows."
  // Stage 3: Massive "NISHTA"
  // Stage 4: "HAPPY BIRTHDAY, FUTURE CS! 🎓"
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    playHarmonicChime('reveal');

    const t1 = setTimeout(() => {
      setStage(1);
      playHarmonicChime('reveal');
    }, 1600);

    const t2 = setTimeout(() => {
      setStage(2);
    }, 3400);

    const t3 = setTimeout(() => {
      setStage(3);
      playHarmonicChime('open');
    }, 5600);

    const t4 = setTimeout(() => {
      setStage(4);
      playHarmonicChime('celebrate');
    }, 7800);

    const t5 = setTimeout(() => {
      onComplete();
    }, 11500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div
      id="opening-reveal-screen"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070E] text-[#F3EFE6] px-6 overflow-hidden select-none cursor-pointer"
      onClick={onComplete}
      title="Click anywhere to begin"
    >
      {/* Expanding golden point of light in stage 0 */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: stage === 0 ? [0, 1.5, 4, 12] : 25,
          opacity: stage === 0 ? [0, 1, 0.8, 0.2] : 0.08,
        }}
        transition={{ duration: 3.5, ease: 'easeOut' }}
        className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFF1B8] via-[#D4AF37] to-transparent blur-2xl pointer-events-none"
      />

      {/* Thin elegant architectural lines framing the screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute inset-6 sm:inset-12 border border-[#D4AF37]/20 pointer-events-none flex flex-col justify-between p-4"
      >
        <div className="flex justify-between items-center text-[10px] tracking-[0.3em] text-[#D4AF37]/40 uppercase font-mono">
          <span>ICSI • GOVERNANCE • INTEGRITY</span>
          <span>EST. 10.09.2026</span>
        </div>
        <div className="flex justify-between items-center text-[10px] tracking-[0.3em] text-[#D4AF37]/40 uppercase font-mono">
          <span>DEDICATION • EXCELLENCE</span>
          <span>FUTURE CS</span>
        </div>
      </motion.div>

      {/* Main cinematic text container */}
      <div className="relative z-20 max-w-4xl w-full text-center flex flex-col items-center justify-center min-h-[60vh]">
        {/* Date Reveal: 10 • 09 • 2026 */}
        <AnimatePresence>
          {stage >= 1 && stage < 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#0E1526]/60 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-cinzel text-sm sm:text-base tracking-[0.4em] text-[#F5E6C8] font-semibold">
                  10 • 09 • 2026
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2 text: "A special day for someone who inspires more than she knows." */}
        <AnimatePresence>
          {stage >= 2 && stage < 3 && (
            <motion.p
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1 }}
              className="font-serif-luxury italic text-2xl sm:text-4xl text-[#E8DFC9] max-w-xl mx-auto leading-relaxed px-4"
            >
              “A special day for someone
              <br />
              who inspires more than she knows.”
            </motion.p>
          )}
        </AnimatePresence>

        {/* Stage 3 & 4: Massive NISHTA & "HAPPY BIRTHDAY, FUTURE CS! 🎓" */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <motion.span
                initial={{ opacity: 0, letterSpacing: '0.4em' }}
                animate={{ opacity: 1, letterSpacing: '0.2em' }}
                transition={{ duration: 1 }}
                className="text-xs sm:text-sm uppercase text-[#D4AF37] font-semibold mb-2"
              >
                HONORING
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-gold-gradient drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                NISHTA
              </motion.h1>

              {stage >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="mt-6 flex flex-col items-center"
                >
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />
                  <h2 className="font-cinzel text-xl sm:text-3xl md:text-4xl text-[#FFF4D0] font-bold tracking-widest text-center">
                    HAPPY BIRTHDAY,
                    <br />
                    <span className="text-gold-light-gradient">FUTURE CS! 🎓</span>
                  </h2>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip button at bottom */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-10 right-10 z-30 flex items-center gap-2 text-xs font-mono text-[#D4AF37] tracking-widest px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#0E1526]/80 hover:bg-[#D4AF37]/20 transition-all duration-300"
      >
        <span>ENTER EXPERIENCE</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </motion.button>
    </div>
  );
};

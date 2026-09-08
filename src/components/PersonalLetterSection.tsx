import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Heart, Check, Volume2 } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

export const PersonalLetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // EXACT message provided by user - NEVER altered, corrected, or truncated
  const exactMessage = `Happy Birthday to my Amezing guide and mentor!🥳 Thank you for always pushing me to be my best and Your support during my failure📉 and the great direction you provide means the world to me😊. I am constantly inspired by your dedication. you are a Challenger who pushes my limits💪🏻.You are positive thinker who protect my energy✨. Wishing you endless success📈, happiness😊and good health🤞🏻 in the future. Have the best day filled with all the success you deserve!🧿🎉🎓. again Many many happy returns of the day Nishthhhaaaa!!!!🥳🎂🍫`;

  const handleOpenLetter = () => {
    playHarmonicChime('open');
    setIsOpen(true);
  };

  return (
    <section
      id="letter"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden"
    >
      {/* Subtle radial ambient warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1526] text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERSONAL DEDICATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold text-[#F5E6C8] tracking-wide"
          >
            A LETTER FOR YOU ✉️
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] font-light max-w-md mx-auto">
            Written from the heart to honor someone whose guidance and positivity change lives.
          </p>
        </div>

        {/* The Envelope & Letter Container */}
        <div className="w-full max-w-2xl relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* CLOSED LUXURY ENVELOPE */
              <motion.div
                key="envelope-closed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6 }}
                className="w-full relative group cursor-pointer"
                onClick={handleOpenLetter}
              >
                {/* Envelope Body */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#121A2E] via-[#0A0F1D] to-[#1A0A12] border-2 border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_25px_70px_rgba(212,175,55,0.25)]">
                  {/* Decorative diagonal folds of the envelope */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="absolute top-0 left-0 w-full h-full border-t-[100px] sm:border-t-[150px] border-t-[#18233D]/60 border-l-[150px] sm:border-l-[300px] border-l-transparent border-r-[150px] sm:border-r-[300px] border-r-transparent" />
                  </div>

                  {/* Corner accents */}
                  <div className="flex justify-between items-center text-xs font-mono text-[#D4AF37]/60 tracking-[0.2em]">
                    <span>CONFIDENTIAL & PERSONAL</span>
                    <span>10 • 09 • 2026</span>
                  </div>

                  {/* Center Wax Seal */}
                  <div className="my-auto flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#AA2E25] via-[#800020] to-[#4A0012] border-2 border-[#FFEAA7] shadow-[0_0_25px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center text-center text-[#FFEAA7] relative z-10"
                    >
                      <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest leading-none">
                        N
                      </span>
                      <span className="text-[9px] font-mono tracking-widest opacity-80 uppercase mt-0.5">
                        CS SEAL
                      </span>
                      {/* Wax drip details */}
                      <div className="absolute -bottom-1.5 w-4 h-3 rounded-full bg-[#800020] border-b border-[#FFEAA7]/60" />
                    </motion.div>

                    <div className="mt-4 text-center">
                      <span className="font-cinzel text-base sm:text-lg text-[#F5E6C8] font-medium tracking-widest block">
                        To Nishita ❤️
                      </span>
                      <span className="text-xs text-[#94A3B8] font-light mt-1 block">
                        Click the wax seal or button below to unseal
                      </span>
                    </div>
                  </div>

                  {/* Envelope Bottom Prompt */}
                  <div className="flex justify-center">
                    <button
                      id="open-letter-btn"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenLetter();
                      }}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open the letter ✉️</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* OPENED LUXURY LETTER (Parchment / Editorial Letter) */
              <motion.div
                key="letter-opened"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full relative"
              >
                {/* Golden light glow expanding behind letter */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FFEAA7]/10 via-[#D4AF37]/20 to-[#FFEAA7]/10 rounded-3xl blur-xl pointer-events-none" />

                <div className="relative luxury-paper rounded-2xl p-6 sm:p-10 md:p-12 text-[#1E293B] shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-[#D4AF37]/50">
                  {/* Subtle watermarked legal/governance emblem in background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                    <span className="font-cinzel text-9xl font-black">CS</span>
                  </div>

                  {/* Letter Header */}
                  <div className="flex justify-between items-start border-b border-[#D4AF37]/30 pb-6 mb-8">
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#8C6B1C] uppercase block mb-1">
                        PERSONAL TRIBUTE • 10.09.2026
                      </span>
                      <h3 className="font-serif-luxury italic text-3xl sm:text-4xl text-[#0F172A] font-bold tracking-wide">
                        To Nishita ❤️
                      </h3>
                    </div>

                    {/* Miniature Gold Wax Stamp */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800020] to-[#4A0012] border border-[#D4AF37] flex items-center justify-center text-[#FFEAA7] font-cinzel font-bold text-sm shadow-md">
                      CS
                    </div>
                  </div>

                  {/* EXACT MESSAGE BODY - WORD FOR WORD - UNCHANGED */}
                  <div className="space-y-6 font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#1E293B] leading-relaxed tracking-normal select-text">
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="whitespace-pre-line"
                    >
                      {exactMessage}
                    </motion.p>
                  </div>

                  {/* Letter Footer / Ribbon & Close Toggle */}
                  <div className="mt-10 pt-6 border-t border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#786443]">
                      <Heart className="w-4 h-4 text-[#800020] fill-[#800020]" />
                      <span>With deepest gratitude & admiration</span>
                    </div>

                    <button
                      onClick={() => {
                        playHarmonicChime('tick');
                        setIsOpen(false);
                      }}
                      className="text-xs font-cinzel tracking-widest text-[#8C6B1C] hover:text-[#0F172A] underline underline-offset-4 cursor-pointer"
                    >
                      Refold Letter ✉️
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Heart, GraduationCap, CheckCircle } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

export const InteractiveSecretNote: React.FC<{ onCelebrate: () => void }> = ({ onCelebrate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    playHarmonicChime('open');
    setIsOpen(true);
    onCelebrate();
  };

  return (
    <div className="w-full max-w-xl mx-auto my-12">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A1305] via-[#101524] to-[#1F0E18] border-2 border-[#D4AF37]/60 shadow-[0_15px_40px_rgba(212,175,55,0.25)] text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8C6B1C] text-[#0A0D14] flex items-center justify-center mb-6 shadow-lg">
              <Mail className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">
              A PRIVATE NOTE OF ENCOURAGEMENT
            </span>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F5E6C8] tracking-wider mb-6">
              ONE LAST NOTE…
            </h3>

            <button
              id="open-secret-note-btn"
              onClick={handleOpen}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3DE8A] to-[#AA820A] text-[#080B13] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>OPEN IT ✉️</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Expanding radial gold light */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#D4AF37]/20 via-[#FFEAA7]/30 to-[#D4AF37]/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative luxury-paper rounded-3xl p-8 sm:p-12 text-[#1A202C] shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-[#D4AF37]">
              <div className="flex justify-between items-center border-b border-[#D4AF37]/30 pb-4 mb-6">
                <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#8C6B1C] uppercase">
                  CONFIDENTIAL MESSAGE
                </span>
                <GraduationCap className="w-5 h-5 text-[#8C6B1C]" />
              </div>

              {/* Exact Text Required */}
              <div className="space-y-4 font-serif-luxury text-xl sm:text-2xl text-[#1E293B] leading-relaxed select-text">
                <p className="font-bold text-2xl sm:text-3xl text-[#0F172A] font-cinzel">
                  Nishita,
                </p>
                <p>
                  Your birthday is not just about another year.
                </p>
                <p>
                  It's about another chapter.
                </p>
                <p>
                  And I hope this chapter takes you closer to every dream you've worked for.
                </p>
                <div className="py-4 my-2 border-y border-[#D4AF37]/30 text-center">
                  <p className="font-cinzel font-black text-xl sm:text-2xl text-[#800020] tracking-wider uppercase">
                    BEST OF LUCK FOR YOUR
                    <br />
                    COMPANY SECRETARY JOURNEY! 🎓📚🍀
                  </p>
                </div>
                <p className="text-center font-cinzel font-bold text-2xl sm:text-3xl text-[#0F172A] tracking-wide pt-2">
                  YOU'VE GOT THIS. ❤️
                </p>
              </div>

              <div className="mt-8 pt-4 flex justify-end">
                <button
                  onClick={() => {
                    playHarmonicChime('tick');
                    setIsOpen(false);
                  }}
                  className="text-xs font-mono tracking-widest text-[#8C6B1C] hover:text-[#0F172A] underline cursor-pointer"
                >
                  Close Note
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const BestOfLuckSection: React.FC<{ onCelebrate: () => void }> = ({ onCelebrate }) => {
  return (
    <section
      id="bestofluck"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden"
    >
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* HUGE HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-mono tracking-[0.35em] text-[#D4AF37] uppercase block mb-3">
            AN ODE TO YOUR FUTURE
          </span>
          <h2 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black text-[#F5E6C8] tracking-tight leading-tight">
            BEST OF LUCK,
            <br />
            <span className="text-gold-gradient">FUTURE CS! 🍀🎓</span>
          </h2>
        </motion.div>

        {/* Powerful Message Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto my-10 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0D1424] via-[#070A12] to-[#140810] border border-[#D4AF37]/30 shadow-2xl"
        >
          <p className="font-serif-luxury text-2xl sm:text-4xl text-[#E8DFC9] leading-relaxed italic">
            “May every late-night study session,
            <br />
            every difficult chapter,
            <br />
            every challenge and every setback
            <br />
            <span className="text-[#FFEAA7] font-semibold not-italic">
              take you one step closer
              <br />
              to the professional you dream of becoming.”
            </span>
          </p>
        </motion.div>

        {/* Triplet Mantras: KEEP GOING / KEEP BELIEVING / KEEP PUSHING FORWARD */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-10 font-cinzel text-lg sm:text-2xl font-bold tracking-[0.2em] text-[#F5E6C8]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#0B101D]"
          >
            “KEEP GOING.”
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#0B101D]"
          >
            “KEEP BELIEVING.”
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#0B101D]"
          >
            “KEEP PUSHING FORWARD.”
          </motion.div>
        </div>

        {/* MASSIVE: FUTURE COMPANY SECRETARY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="my-14"
        >
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#1E283E]/40 via-[#070B14] to-[#1E283E]/40 border-2 border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.2)]">
            <h3 className="font-cinzel text-[clamp(2.2rem,7vw,6.5rem)] font-black tracking-tight text-gold-gradient leading-none uppercase">
              FUTURE
              <br />
              COMPANY
              <br />
              SECRETARY.
            </h3>
            <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />
            <p className="font-cinzel text-xl sm:text-3xl text-[#FFEAA7] font-semibold tracking-widest">
              “You've got this. ❤️”
            </p>
          </div>
        </motion.div>

        {/* INTERACTIVE SECRET MOMENT */}
        <InteractiveSecretNote onCelebrate={onCelebrate} />
      </div>
    </section>
  );
};

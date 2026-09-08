import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smile, Sparkles, BookOpen, ArrowDown, Check, Laugh } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

interface FunnySurpriseSectionProps {
  onCelebrate?: () => void;
}

export const FunnySurpriseSection: React.FC<FunnySurpriseSectionProps> = ({ onCelebrate }) => {
  // revealLevel:
  // 0: Initial state (Button: "MAKE ME LAUGH 😂")
  // 1: Joke 1 visible (Button: "ONE MORE 😂")
  // 2: Joke 2 visible (Button: "OKAY LAST ONE…")
  // 3: Joke 3 visible (Button: "WAIT… THERE'S ONE MORE 👀")
  // 4: Joke 4 visible (Button: "ENOUGH JOKES… BACK TO STUDY 📚😂")
  const [revealLevel, setRevealLevel] = useState<number>(0);
  const [showSecret, setShowSecret] = useState<boolean>(false);
  const [showStudyModal, setShowStudyModal] = useState<boolean>(false);
  const [showSilentEmoji, setShowSilentEmoji] = useState<boolean>(false);

  // Trigger delayed animation for Joke 1 "😶"
  useEffect(() => {
    if (revealLevel >= 1) {
      setShowSilentEmoji(false);
      const timer = setTimeout(() => {
        setShowSilentEmoji(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [revealLevel]);

  const handleNextJoke = () => {
    playHarmonicChime('reveal');
    if (onCelebrate) onCelebrate();
    setRevealLevel((prev) => Math.min(prev + 1, 4));
  };

  const handleBackToStudy = () => {
    playHarmonicChime('celebrate');
    setShowStudyModal(true);
  };

  const handleProceedToBestOfLuck = () => {
    setShowStudyModal(false);
    const nextSection = document.getElementById('bestofluck');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="funny-surprise"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden border-t border-[#D4AF37]/15"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle emojis in background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20">
        <motion.span
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-[8%] text-3xl"
        >
          📚
        </motion.span>
        <motion.span
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-44 right-[10%] text-3xl"
        >
          🎓
        </motion.span>
        <motion.span
          animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-24 left-[14%] text-3xl"
        >
          😂
        </motion.span>
        <motion.span
          animate={{ y: [0, 22, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-36 right-[12%] text-3xl"
        >
          ✨
        </motion.span>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1526] text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4"
          >
            <Laugh className="w-3.5 h-3.5" />
            <span>LIGHT-HEARTED TRUTH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl font-bold text-[#F5E6C8] tracking-wide"
          >
            “OKAY… ONE SERIOUS THING 😌”
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-3 font-serif-luxury italic text-xl sm:text-2xl text-[#FFEAA7] tracking-wider"
          >
            “Actually… not that serious. 😂”
          </motion.p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Initial Trigger Button */}
        {revealLevel === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center my-6"
          >
            <p className="text-sm text-[#94A3B8] font-light mb-6 max-w-md mx-auto">
              A quick salute to your mentorship, the 47+ chapters, and the future Company Secretary in the making!
            </p>
            <button
              id="make-me-laugh-btn"
              onClick={handleNextJoke}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3DE8A] to-[#AA820A] text-[#080B13] font-cinzel font-bold text-sm tracking-[0.2em] shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 mx-auto cursor-pointer"
            >
              <span>MAKE ME LAUGH 😂</span>
            </button>
          </motion.div>
        )}

        {/* Jokes Cards Container */}
        <div className="w-full space-y-6 my-4 max-w-2xl">
          {/* JOKE 1 */}
          <AnimatePresence>
            {revealLevel >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1424] via-[#0A0E18] to-[#140B18] border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-[#D4AF37]"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F5E6C8] tracking-wider flex items-center gap-2">
                    <span>MENTOR MODE: ON</span>
                    <span>👩💼</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">
                    CARD 01/04
                  </span>
                </div>

                <div className="font-serif-luxury text-lg sm:text-xl text-[#CBD5E1] space-y-2 leading-relaxed">
                  <p>Me: I think I understand everything. 😌</p>
                  <p className="text-[#FFEAA7] font-semibold">Nishtha: ‘Okay, explain it to me.’</p>
                  <div className="flex items-center gap-2">
                    <span>Me: …………………</span>
                    {showSilentEmoji ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.4, 1] }}
                        className="inline-block text-2xl"
                      >
                        😶
                      </motion.span>
                    ) : (
                      <span className="opacity-0">😶</span>
                    )}
                  </div>
                  <p className="text-[#F3EFE6] font-semibold pt-1">
                    And suddenly, I understand that I understand NOTHING. 😂
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* JOKE 2 */}
          <AnimatePresence>
            {revealLevel >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1424] via-[#0A0E18] to-[#140B18] border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-[#D4AF37]"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F5E6C8] tracking-wider flex items-center gap-2">
                    <span>FUTURE CS PROBLEM</span>
                    <span>🎓</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">
                    CARD 02/04
                  </span>
                </div>

                <div className="font-serif-luxury text-lg sm:text-xl text-[#CBD5E1] space-y-2 leading-relaxed">
                  <p className="text-[#94A3B8]">Everyone:</p>
                  <p className="italic">‘It's just one more chapter.’</p>
                  <p className="text-[#FFEAA7] font-semibold pt-1">Future CS Nishtha:</p>
                  <p className="text-[#FFF2CF] font-medium">
                    ‘One more chapter’ × 47 chapters later… 📚😭😂
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex flex-col gap-1 font-cinzel text-sm sm:text-base font-bold text-[#E2E8F0]">
                    <span className="text-[#F5E6C8]">Still studying.</span>
                    <span className="text-[#FFEAA7]">Still smiling.</span>
                    <span className="text-gold-gradient text-lg sm:text-xl">
                      Still becoming a CS. 😎🎓
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* JOKE 3 */}
          <AnimatePresence>
            {revealLevel >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1424] via-[#0A0E18] to-[#140B18] border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-[#D4AF37]"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F5E6C8] tracking-wider flex items-center gap-2">
                    <span>THE REAL EXAM</span>
                    <span>😭</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">
                    CARD 03/04
                  </span>
                </div>

                <div className="font-serif-luxury text-lg sm:text-xl text-[#CBD5E1] space-y-2 leading-relaxed">
                  <p className="text-[#FFEAA7] font-semibold">CS Exam:</p>
                  <p className="italic">‘Choose the correct answer.’</p>
                  <p className="pt-1 text-[#94A3B8]">Brain: ‘Easy.’</p>
                  <p className="text-[#FFEAA7] font-semibold pt-1">Question paper:</p>
                  <p className="italic">‘Are you sure about that?’ 👀</p>
                  <p className="text-rose-200">Brain: ‘……No.’ 😂</p>

                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/25 text-center">
                    <p className="font-cinzel font-black text-lg sm:text-xl text-gold-gradient tracking-wide">
                      BUT WE KNOW YOU'LL CRACK IT. 💪🏻🎓
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* JOKE 4 */}
          <AnimatePresence>
            {revealLevel >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1424] via-[#0A0E18] to-[#140B18] border-2 border-[#D4AF37]/50 shadow-[0_10px_35px_rgba(212,175,55,0.2)] relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F5E6C8] tracking-wider flex items-center gap-2">
                    <span>ONE DAY…</span>
                    <span>👀</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">
                    CARD 04/04
                  </span>
                </div>

                <div className="font-serif-luxury text-lg sm:text-xl text-[#CBD5E1] space-y-2.5 leading-relaxed">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-[#94A3B8] uppercase block">
                      Right now:
                    </span>
                    <p className="italic text-[#E2E8F0]">‘I'm preparing for CS.’</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase block">
                      Soon:
                    </span>
                    <p className="font-semibold text-[#FFF2CF]">‘I'm a Company Secretary.’ 🎓✨</p>
                  </div>

                  <div className="pt-2">
                    <p className="text-[#94A3B8]">Everyone: ‘Ma'am, please help us with this.’ 😂</p>
                    <p className="text-[#FFEAA7] font-semibold mt-1">
                      Nishtha: ‘First, book an appointment.’ 😎📋
                    </p>
                  </div>

                  {/* Future CS Loading bar */}
                  <div className="mt-5 p-4 rounded-xl bg-[#060912] border border-[#D4AF37]/30 text-center">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#FFEAA7] block mb-2">
                      FUTURE CS LOADING… ██████████ 99%
                    </span>
                    <div className="w-full h-2 bg-[#1A2338] rounded-full overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: '10%' }}
                        animate={{ width: '99%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#AA820A] via-[#D4AF37] to-[#FFF2CF] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Progression Button */}
        {revealLevel > 0 && (
          <div className="mt-6 flex flex-col items-center gap-4">
            {revealLevel === 1 && (
              <button
                id="joke-one-more-btn"
                onClick={handleNextJoke}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>ONE MORE 😂</span>
              </button>
            )}

            {revealLevel === 2 && (
              <button
                id="joke-last-one-btn"
                onClick={handleNextJoke}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>OKAY LAST ONE…</span>
              </button>
            )}

            {revealLevel === 3 && (
              <button
                id="joke-wait-more-btn"
                onClick={handleNextJoke}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>WAIT… THERE'S ONE MORE 👀</span>
              </button>
            )}

            {revealLevel === 4 && (
              <button
                id="back-to-study-btn"
                onClick={handleBackToStudy}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1A180E] via-[#2D220A] to-[#1A180E] border-2 border-[#D4AF37] text-[#FFEAA7] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:bg-[#D4AF37] hover:text-[#080B13] transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>ENOUGH JOKES… BACK TO STUDY 📚😂</span>
              </button>
            )}
          </div>
        )}

        {/* SECRET MINI SURPRISE TRIGGER */}
        <div className="mt-10 text-center">
          {!showSecret ? (
            <button
              id="secret-mini-surprise-btn"
              onClick={() => {
                playHarmonicChime('reveal');
                setShowSecret(true);
              }}
              className="text-xs font-mono text-[#D4AF37]/70 hover:text-[#FFEAA7] tracking-widest cursor-pointer underline underline-offset-4 transition-colors"
            >
              Psst… one last thing 👀
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0C1220] border border-[#D4AF37]/40 shadow-xl max-w-md mx-auto text-center"
            >
              <p className="font-serif-luxury text-base sm:text-lg text-[#F5E6C8] leading-relaxed">
                “Nishtha, if success had a LinkedIn profile,
                <br />
                your connection request would already be accepted. 😂🎓”
              </p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto my-2" />
              <p className="font-cinzel text-xs sm:text-sm font-bold text-gold-gradient tracking-widest uppercase">
                “Future CS. Current Legend. 😎✨”
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* SPECIAL FUNNY MODAL: "ENOUGH JOKES… BACK TO STUDY" */}
      <AnimatePresence>
        {showStudyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#121A2D] via-[#0A0F1D] to-[#1A0A14] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)] text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] mx-auto flex items-center justify-center text-2xl mb-4">
                🎂
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F5E6C8] mb-4">
                “Fine fine… go become a Company Secretary. 😌🎓”
              </h3>

              <p className="font-serif-luxury italic text-lg sm:text-xl text-[#FFEAA7] leading-relaxed mb-8">
                “But today you're allowed to celebrate first. 🎂❤️”
              </p>

              <button
                id="proceed-after-study-joke-btn"
                onClick={handleProceedToBestOfLuck}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONTINUE THE CELEBRATION ✨</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

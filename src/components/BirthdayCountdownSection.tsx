import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, PartyPopper } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: 'before' | 'today' | 'after';
}

export const BirthdayCountdownSection: React.FC<{ onCelebrate: () => void }> = ({ onCelebrate }) => {
  const [overrideToday, setOverrideToday] = useState(false);
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'before',
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      // Target: September 10, 2026 (Months are 0-indexed: 8 = September)
      const targetYear = 2026;
      const targetMonth = 8; // September
      const targetDay = 10;

      const birthdayStart = new Date(targetYear, targetMonth, targetDay, 0, 0, 0).getTime();
      const birthdayEnd = new Date(targetYear, targetMonth, targetDay, 23, 59, 59).getTime();
      const currentTime = now.getTime();

      if (overrideToday) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: 'today',
        });
        return;
      }

      if (currentTime >= birthdayStart && currentTime <= birthdayEnd) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: 'today',
        });
      } else if (currentTime > birthdayEnd) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          status: 'after',
        });
      } else {
        const diff = Math.max(0, birthdayStart - currentTime);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
          status: 'before',
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [overrideToday]);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden">
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1526] text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>10 • 09 • 2026</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl font-bold text-[#F5E6C8] tracking-wide mb-3"
        >
          {countdown.status === 'today'
            ? 'A GLORIOUS MOMENT'
            : countdown.status === 'after'
            ? 'THE MILESTONE UNFOLDS'
            : 'COUNTDOWN TO THE CELEBRATION'}
        </motion.h2>

        <p className="text-sm sm:text-base text-[#94A3B8] font-light max-w-md mx-auto mb-12">
          Every second brings us closer to honoring an extraordinary journey.
        </p>

        {/* Display depending on Status */}
        {countdown.status === 'today' ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1E2840] via-[#121A2D] to-[#1F0D15] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)] flex flex-col items-center"
          >
            <Sparkles className="w-10 h-10 text-[#FFEAA7] mb-4 animate-bounce" />
            <h3 className="font-cinzel text-3xl sm:text-6xl font-black text-gold-gradient tracking-wide mb-4">
              IT'S YOUR DAY, NISHITA! 🎂✨
            </h3>
            <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#E8DFC9] max-w-lg mb-8">
              Today, the world celebrates your presence, your passion, and the bright future you are forging.
            </p>
            <button
              onClick={() => {
                playHarmonicChime('celebrate');
                onCelebrate();
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-sm tracking-[0.2em] shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <PartyPopper className="w-4 h-4" />
              <span>TRIGGER BIRTHDAY SPARKS</span>
            </button>
          </motion.div>
        ) : countdown.status === 'after' ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-10 rounded-3xl bg-[#0D1424] border border-[#D4AF37]/40 shadow-2xl flex flex-col items-center"
          >
            <h3 className="font-cinzel text-2xl sm:text-5xl font-black text-gold-gradient tracking-wide mb-3">
              THE NEXT CHAPTER HAS BEGUN.
            </h3>
            <p className="font-serif-luxury text-lg sm:text-xl text-[#CBD5E1]">
              Walking boldly towards the corporate secretary benchmark.
            </p>
          </motion.div>
        ) : (
          /* BEFORE: LUXURY COUNTDOWN TILES */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              { label: 'DAYS', val: countdown.days },
              { label: 'HOURS', val: countdown.hours },
              { label: 'MINUTES', val: countdown.minutes },
              { label: 'SECONDS', val: countdown.seconds },
            ].map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative group hover:border-[#D4AF37]"
              >
                {/* Gold corner brackets */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/40" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#D4AF37]/40" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#D4AF37]/40" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/40" />

                <span className="font-cinzel text-4xl sm:text-6xl font-black text-[#FFF2CF] tracking-tight leading-none group-hover:text-gold-light-gradient transition-colors">
                  {String(unit.val).padStart(2, '0')}
                </span>

                <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mt-3 font-semibold">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Subtle toggle to preview the birthday arrival view */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              playHarmonicChime('tick');
              setOverrideToday(!overrideToday);
            }}
            className="text-[11px] font-mono tracking-wider text-[#94A3B8]/70 hover:text-[#D4AF37] transition-colors underline cursor-pointer"
          >
            {overrideToday ? 'Reset to live countdown' : "Preview 'It's Your Day' celebration state"}
          </button>
        </div>
      </div>
    </section>
  );
};

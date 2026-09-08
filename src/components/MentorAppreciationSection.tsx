import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Target, Shield, HeartHandshake, Zap } from 'lucide-react';
import { CSGovernanceSeal } from './CSArtwork';

export const MentorAppreciationSection: React.FC = () => {
  const mentorWords = [
    { word: 'GUIDE.', icon: Compass, desc: 'Illuminating the path forward with clarity' },
    { word: 'MENTOR.', icon: Sparkles, desc: 'Investing wisdom and genuine care' },
    { word: 'CHALLENGER.', icon: Target, desc: 'Pushing boundaries beyond comfortable limits' },
    { word: 'INSPIRATION.', icon: Zap, desc: 'Demonstrating tireless dedication daily' },
    { word: 'SUPPORT.', icon: HeartHandshake, desc: 'Standing resolute during every low' },
    { word: 'DEDICATION.', icon: Shield, desc: 'Unyielding resolve to master every challenge' },
  ];

  return (
    <section
      id="mentor"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden"
    >
      {/* Background vignette & faint grid */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Subtitle tag */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1526] text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HONORING LEADERSHIP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5E6C8] tracking-wide"
          >
            THE PERSON BEHIND THE DREAM
          </motion.h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Word by word staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20">
          {mentorWords.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                whileHover={{ y: -4, borderColor: 'rgba(212,175,55,0.6)' }}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1424] to-[#070B14] border border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#D4AF37]/60 tracking-widest">
                    0{idx + 1}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#162035] border border-[#D4AF37]/30 flex items-center justify-center text-[#FFEAA7] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#FFF2CF] group-hover:text-gold-light-gradient transition-colors">
                    {item.word}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-light mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High emotional statement block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative my-16 p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121A2D]/80 via-[#0A0E1A]/90 to-[#180A12]/80 border-2 border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(212,175,55,0.12)] text-center overflow-hidden"
        >
          {/* Subtle background seal */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none translate-x-1/4">
            <CSGovernanceSeal size={320} />
          </div>

          <p className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl text-[#E8DFC9] italic leading-relaxed max-w-2xl mx-auto">
            “Some people simply give advice.
            <br />
            <span className="text-[#FFEAA7] font-semibold not-italic font-cinzel text-xl sm:text-3xl md:text-4xl block mt-3">
              Some people change the way you see your own potential.”
            </span>
          </p>

          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto my-6" />

          <p className="font-cinzel text-lg sm:text-2xl text-gold-gradient font-bold tracking-[0.2em] uppercase">
            “You are one of those people.”
          </p>
        </motion.div>

        {/* SECTION: YOU PUSH PEOPLE FORWARD */}
        <div className="mt-28 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.35em] text-[#D4AF37] uppercase mb-4"
          >
            PILLAR OF STRENGTH
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-3xl sm:text-6xl font-black text-[#F5E6C8] tracking-tight leading-tight mb-8"
          >
            “YOU PUSH ME
            <br />
            <span className="text-gold-gradient">TO BE BETTER.”</span>
          </motion.h3>

          <div className="space-y-6 max-w-xl mx-auto text-left sm:text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-cinzel text-lg sm:text-2xl text-[#E2E8F0] tracking-wide"
            >
              “Even during failure.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif-luxury italic text-xl sm:text-3xl text-[#94A3B8] leading-relaxed"
            >
              “You remind people that one setback does not define the journey.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-cinzel text-base sm:text-xl text-[#FFEAA7] tracking-[0.15em] uppercase font-bold pt-4"
            >
              “That's what makes a great mentor.”
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

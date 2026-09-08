import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Smile, Heart, Eye, Shield, Zap, Moon, Compass, Trophy } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

export const WishesSection: React.FC = () => {
  const wishes = [
    { title: 'ENDLESS SUCCESS 📈', icon: TrendingUp, desc: 'Unbounded achievements in corporate law and governance' },
    { title: 'HAPPINESS 😊', icon: Smile, desc: 'Every day radiating with authentic joy and laughter' },
    { title: 'GOOD HEALTH 🤞🏻', icon: Heart, desc: 'Boundless vitality to power every study session and ambition' },
    { title: 'WISDOM', icon: Eye, desc: 'Sharp discernment to navigate complex legal horizons' },
    { title: 'STRENGTH', icon: Shield, desc: 'Steadfast fortitude in moments of challenge' },
    { title: 'CONFIDENCE', icon: Zap, desc: 'Knowing your worth as an indomitable leader' },
    { title: 'PEACE', icon: Moon, desc: 'Calm serenity of mind through every season' },
    { title: 'GROWTH', icon: Compass, desc: 'Continual expansion of wisdom, mastery, and grace' },
    { title: 'SUCCESS', icon: Trophy, desc: 'The triumphant realization of your CS dream' },
  ];

  return (
    <section
      id="wishes"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden"
    >
      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1526] text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HEARTFELT BLESSINGS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-6xl font-black text-[#F5E6C8] tracking-wider"
          >
            WISHING YOU…
          </motion.h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Wishes Grid with elegant cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {wishes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => playHarmonicChime('reveal')}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0E1528] to-[#070A12] border border-[#D4AF37]/30 shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer group hover:border-[#D4AF37] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141F35] border border-[#D4AF37]/40 flex items-center justify-center text-[#FFEAA7] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37]/50 tracking-widest">
                    #{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F5E6C8] tracking-wide group-hover:text-gold-gradient transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-light mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

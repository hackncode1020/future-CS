import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle2, Flame, Trophy, Scale, FileText, Landmark } from 'lucide-react';
import { CSStudyCompendium, CSCorporateSkyline } from './CSArtwork';

export const CSJourneySection: React.FC = () => {
  const steps = [
    {
      stage: 'LEARN',
      title: 'Foundation & Principles',
      desc: 'Mastering the Companies Act, secretarial standards, and foundational jurisprudence.',
      icon: BookOpen,
      tag: 'STAGE 01',
    },
    {
      stage: 'PREPARE',
      title: 'Rigorous Executive Study',
      desc: 'Late-night revisions, deep compliance frameworks, tax structures, and economic laws.',
      icon: FileText,
      tag: 'STAGE 02',
    },
    {
      stage: 'PERSIST',
      title: 'Unwavering Discipline',
      desc: 'Staying committed through long hours, complex syllabus modules, and demanding standards.',
      icon: Flame,
      tag: 'STAGE 03',
    },
    {
      stage: 'OVERCOME',
      title: 'Trial Through Fire',
      desc: 'Turning every tough chapter, doubt, and practice mock into sharpened professional resilience.',
      icon: Scale,
      tag: 'STAGE 04',
    },
    {
      stage: 'ACHIEVE',
      title: 'The CS Milestone',
      desc: 'Earning the prestigious ICSI credential as a certified corporate conscience and governance leader.',
      icon: Trophy,
      tag: 'DESTINATION',
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#070A12] overflow-hidden"
    >
      {/* Background corporate skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-20">
        <CSCorporateSkyline />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1526] text-[11px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>THE NEXT CHAPTER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-7xl font-black text-[#F5E6C8] tracking-tight leading-none"
          >
            FUTURE
            <br />
            COMPANY
            <br />
            <span className="text-gold-gradient">SECRETARY</span>
          </motion.h2>

          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-light max-w-md mx-auto">
            The roadmap of grit, discipline, and uncompromising excellence.
          </p>
        </div>

        {/* The Animated Journey: LEARN -> PREPARE -> PERSIST -> OVERCOME -> ACHIEVE */}
        <div className="relative my-16 max-w-2xl mx-auto">
          {/* Vertical progress spine line */}
          <div className="absolute top-8 bottom-8 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#AA820A] to-[#D4AF37]/20" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isFinal = idx === steps.length - 1;

              return (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative flex items-start gap-6 sm:gap-8 group"
                >
                  {/* Step Node Marker */}
                  <div
                    className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isFinal
                        ? 'bg-gradient-to-br from-[#D4AF37] to-[#AA820A] text-[#0A0D14] shadow-[0_0_25px_rgba(212,175,55,0.6)]'
                        : 'bg-[#0E1526] border border-[#D4AF37]/40 text-[#FFEAA7] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Step Content Card */}
                  <div className="flex-1 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0D1322] to-[#070B14] border border-[#D4AF37]/20 shadow-xl group-hover:border-[#D4AF37]/40 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                        {step.tag}
                      </span>
                      <span className="font-cinzel text-xs text-[#E2E8F0] tracking-widest font-semibold">
                        STEP {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F5E6C8] tracking-wider mb-1">
                      {step.stage}
                    </h3>

                    <h4 className="text-sm font-semibold text-[#FFEAA7] mb-2 font-cinzel">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CS Visual Art Section: Compendium Artwork */}
        <div className="mt-20 flex flex-col items-center">
          <CSStudyCompendium className="w-full max-w-sm" />
        </div>

        {/* CS MOTIVATION SECTION */}
        <div className="mt-24 pt-20 border-t border-[#D4AF37]/20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.35em] text-[#D4AF37] uppercase mb-8"
          >
            WORDS FOR THE JOURNEY
          </motion.div>

          <div className="space-y-12 max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl bg-[#0B101D]/60 border border-[#D4AF37]/30 backdrop-blur-sm"
            >
              <p className="font-serif-luxury text-2xl sm:text-4xl text-[#E8DFC9] italic leading-relaxed">
                “Every page you study
                <br />
                <span className="text-[#FFEAA7] font-semibold">
                  is building the professional you are becoming.”
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-8 rounded-3xl bg-[#0B101D]/60 border border-[#D4AF37]/30 backdrop-blur-sm"
            >
              <p className="font-serif-luxury text-2xl sm:text-4xl text-[#E8DFC9] italic leading-relaxed">
                “Every difficult topic
                <br />
                <span className="text-[#FFEAA7] font-semibold">
                  is another challenge you are learning to overcome.”
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-[#1A1020] via-[#0D1424] to-[#070A12] border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(212,175,55,0.18)]"
            >
              <p className="font-serif-luxury text-2xl sm:text-4xl text-[#F3EFE6] leading-relaxed mb-4">
                “Every setback is temporary.”
              </p>
              <p className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-extrabold text-gold-gradient tracking-wide uppercase">
                “Your dedication is not.”
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

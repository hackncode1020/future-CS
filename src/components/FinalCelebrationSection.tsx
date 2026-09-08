import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Share2, Copy, Check, Heart, PartyPopper } from 'lucide-react';
import { CSGovernanceSeal } from './CSArtwork';
import { playHarmonicChime } from '../utils/audio';

export const FinalCelebrationSection: React.FC<{ onCelebrate: () => void }> = ({ onCelebrate }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const shareText = `Happy Birthday Nishtha! 🎂✨\nA special birthday surprise for an amazing guide, mentor\nand future Company Secretary. 🎓❤️`;

  const handleShare = async () => {
    playHarmonicChime('celebrate');
    onCelebrate();

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Happy Birthday Nishtha 🎂 | Future CS 🎓✨',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // Fallback or user canceled share
      }
    } else {
      handleCopyMessage();
    }
  };

  const handleCopyLink = () => {
    playHarmonicChime('tick');
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyMessage = () => {
    playHarmonicChime('tick');
    navigator.clipboard.writeText(shareText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section
      id="celebration"
      className="relative py-32 sm:py-44 px-4 sm:px-6 lg:px-8 bg-[#05070E] overflow-hidden"
    >
      {/* Radiant golden light beams and circular aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/10 via-[#D4AF37]/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <CSGovernanceSeal size={150} />
        </motion.div>

        {/* REVEAL: HAPPY BIRTHDAY NISHTHA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-8"
        >
          <p className="font-cinzel text-lg sm:text-2xl text-[#E8DFC9] tracking-[0.4em] uppercase font-semibold">
            HAPPY BIRTHDAY
          </p>

          <h2 className="font-cinzel text-5xl sm:text-8xl md:text-9xl font-black text-gold-gradient tracking-tight leading-none">
            NISHTHA
          </h2>
        </motion.div>

        {/* FUTURE CS 🎓✨ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-8 px-8 py-3 rounded-2xl bg-[#0D1526] border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.3)] inline-flex items-center gap-3"
        >
          <Sparkles className="w-5 h-5 text-[#FFEAA7]" />
          <span className="font-cinzel text-xl sm:text-3xl font-extrabold text-[#FFEAA7] tracking-[0.2em]">
            FUTURE CS 🎓✨
          </span>
          <Sparkles className="w-5 h-5 text-[#FFEAA7]" />
        </motion.div>

        {/* Many many happy returns & blessings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="space-y-4 max-w-2xl mx-auto mb-16"
        >
          <p className="font-serif-luxury text-2xl sm:text-4xl text-[#F5E6C8] font-semibold italic">
            “Many many happy returns of the day, Nishtha! 🥳🎂🍫”
          </p>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#94A3B8] leading-relaxed">
            “May this year bring you closer to everything you've been working for.”
          </p>
        </motion.div>

        {/* Interactive Confetti Sparker */}
        <div className="mb-20">
          <button
            id="final-celebrate-btn"
            onClick={() => {
              playHarmonicChime('celebrate');
              onCelebrate();
            }}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6C8] to-[#AA820A] text-[#0A0D14] font-cinzel font-black text-sm tracking-[0.25em] shadow-[0_10px_35px_rgba(212,175,55,0.45)] hover:scale-105 transition-all cursor-pointer flex items-center gap-3"
          >
            <PartyPopper className="w-5 h-5 text-[#0A0D14]" />
            <span>SHOWER BIRTHDAY SPARKS 🎊</span>
          </button>
        </div>

        {/* FINAL MESSAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0A101E] via-[#05070E] to-[#120810] border-2 border-[#D4AF37]/40 shadow-2xl mb-20 text-center"
        >
          <p className="font-cinzel text-xl sm:text-3xl font-extrabold text-[#F5E6C8] tracking-[0.25em] leading-relaxed uppercase mb-6">
            “DREAM BIG.
            <br />
            WORK HARD.
            <br />
            BELIEVE IN YOURSELF.”
          </p>

          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto my-6" />

          <p className="font-serif-luxury italic text-2xl sm:text-4xl text-[#FFEAA7] mb-8">
            “YOUR NEXT CHAPTER IS WAITING.”
          </p>

          <h3 className="font-cinzel text-3xl sm:text-6xl font-black text-gold-gradient tracking-tight mb-8">
            FUTURE
            <br />
            COMPANY SECRETARY.
          </h3>

          <p className="font-cinzel text-xl sm:text-2xl text-[#F3EFE6] font-bold tracking-widest">
            “BEST OF LUCK, NISHTHA! 🍀🎓✨”
          </p>
        </motion.div>

        {/* SHARE FEATURE */}
        <div id="share" className="w-full max-w-md mx-auto">
          <div className="p-8 rounded-2xl bg-[#0B101E] border border-[#D4AF37]/30 shadow-xl flex flex-col items-center">
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">
              SEND YOUR BLESSINGS
            </span>

            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#F5E6C8] mb-6">
              SHARE THIS BIRTHDAY SURPRISE ❤️
            </h4>

            <button
              id="share-surprise-btn"
              onClick={handleShare}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-xs tracking-[0.2em] shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer mb-3"
            >
              <Share2 className="w-4 h-4" />
              <span>SHARE EXPERIENCE</span>
            </button>

            {/* Fallback copy buttons */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-2">
              <button
                id="copy-link-btn"
                onClick={handleCopyLink}
                className="py-2.5 px-3 rounded-lg border border-[#D4AF37]/30 bg-[#121A2D] text-[11px] font-mono tracking-wider text-[#FFEAA7] hover:border-[#D4AF37] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'COPIED!' : 'COPY LINK'}</span>
              </button>

              <button
                id="copy-message-btn"
                onClick={handleCopyMessage}
                className="py-2.5 px-3 rounded-lg border border-[#D4AF37]/30 bg-[#121A2D] text-[11px] font-mono tracking-wider text-[#FFEAA7] hover:border-[#D4AF37] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Heart className="w-3.5 h-3.5" />}
                <span>{copiedMessage ? 'COPIED!' : 'COPY MSG'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Editorial Marker */}
        <footer className="mt-28 pt-8 border-t border-[#D4AF37]/15 text-center text-xs font-mono text-[#64748B] tracking-widest space-y-2">
          <p>CRAFTED WITH ADMIRATION • DEDICATED TO NISHTHA</p>
          <p className="text-[#D4AF37]/70">HAPPY BIRTHDAY, FUTURE COMPANY SECRETARY 🎓</p>
        </footer>
      </div>
    </section>
  );
};

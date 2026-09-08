import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Sparkles, KeyRound } from 'lucide-react';
import { playHarmonicChime } from '../utils/audio';

interface PasswordGateProps {
  onUnlock: () => void;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first pin input on load
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (errorMessage) setErrorMessage(null);

    // Only allow single digit
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned) {
      const nextPin = [...pin];
      nextPin[index] = '';
      setPin(nextPin);
      return;
    }

    const digit = cleaned[cleaned.length - 1];
    const nextPin = [...pin];
    nextPin[index] = digit;
    setPin(nextPin);

    // Play subtle soft tick
    playHarmonicChime('tick');

    // Auto focus next input
    if (index < 3 && digit) {
      inputRefs.current[index + 1]?.focus();
    }

    // If 4 digits entered, auto-check
    const currentCode = nextPin.join('');
    if (currentCode.length === 4) {
      validateCode(currentCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'Enter') {
      validateCode(pin.join(''));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (!pasted) return;

    const nextPin = ['', '', '', ''];
    for (let i = 0; i < pasted.length; i++) {
      nextPin[i] = pasted[i];
    }
    setPin(nextPin);
    if (pasted.length === 4) {
      validateCode(pasted);
    } else {
      inputRefs.current[Math.min(pasted.length, 3)]?.focus();
    }
  };

  const validateCode = (code: string) => {
    if (code === '1009') {
      setIsUnlocking(true);
      setErrorMessage(null);
      playHarmonicChime('unlock');

      // Allow luxury unlock sequence to play out
      setTimeout(() => {
        onUnlock();
      }, 1600);
    } else {
      setIsShaking(true);
      setErrorMessage("Hmm… that's not the secret code. Try again. ✨");
      setTimeout(() => {
        setIsShaking(false);
        setPin(['', '', '', '']);
        inputRefs.current[0]?.focus();
      }, 600);
    }
  };

  const handleUnlockClick = (e: React.FormEvent) => {
    e.preventDefault();
    validateCode(pin.join(''));
  };

  return (
    <div
      id="password-gate-screen"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070E] px-4 overflow-hidden select-none"
    >
      {/* Subtle radial golden glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-[#05070E]/80 to-[#05070E] pointer-events-none" />

      {/* Decorative luxury architectural corner borders */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/30 pointer-events-none hidden sm:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#D4AF37]/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#D4AF37]/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/30 pointer-events-none hidden sm:block" />

      {/* Golden Expanding light explosion on unlock */}
      <AnimatePresence>
        {isUnlocking && (
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 18, opacity: [0, 0.95, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-40 w-32 h-32 rounded-full bg-gradient-to-r from-[#FFF0B3] via-[#D4AF37] to-[#F5E6C8] pointer-events-none blur-xl"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-md mx-auto text-center"
      >
        {/* Lock emblem container */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <motion.div
            animate={{
              scale: isUnlocking ? [1, 1.25, 0.9] : [1, 1.05, 1],
              rotate: isUnlocking ? 360 : 0,
            }}
            transition={{
              duration: isUnlocking ? 1.2 : 4,
              repeat: isUnlocking ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#151D30] to-[#0A0E18] border border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center text-[#D4AF37]"
          >
            {isUnlocking ? (
              <Unlock className="w-9 h-9 text-[#FFEAA7] animate-pulse" />
            ) : (
              <Lock className="w-8 h-8 text-[#D4AF37]" />
            )}
          </motion.div>

          {/* Golden halo rings */}
          <div className="absolute inset-0 -m-2 rounded-2xl border border-[#D4AF37]/20 animate-pulse pointer-events-none" />
        </div>

        {/* Ambient editorial texts */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/80 font-medium mb-3"
        >
          A little surprise is waiting for you…
        </motion.p>

        <h1 className="font-cinzel text-2xl sm:text-3xl text-[#F5E6C8] font-semibold tracking-wider mb-2">
          Enter the secret code.
        </h1>

        <p className="text-sm text-[#94A3B8] font-light max-w-xs mx-auto mb-8 leading-relaxed">
          Four digits to unlock a personal celebration crafted for your journey.
        </p>

        {/* Form container */}
        <form onSubmit={handleUnlockClick} className="flex flex-col items-center">
          <motion.div
            animate={isShaking ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6"
          >
            {[0, 1, 2, 3].map((idx) => {
              const hasVal = Boolean(pin[idx]);
              return (
                <div key={idx} className="relative">
                  <input
                    ref={(el) => (inputRefs.current[idx] = el)}
                    id={`pin-input-${idx}`}
                    type="password"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={pin[idx]}
                    disabled={isUnlocking}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={handlePaste}
                    aria-label={`Digit ${idx + 1}`}
                    className={`w-14 h-16 sm:w-16 sm:h-20 text-center text-2xl sm:text-3xl font-mono rounded-xl bg-[#0B101D] border transition-all duration-300 focus:outline-none ${
                      hasVal
                        ? 'border-[#D4AF37] text-[#FFEAA7] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                        : 'border-[#232D42] text-transparent hover:border-[#3A4A6D]'
                    } ${
                      errorMessage
                        ? 'border-red-400/80 shadow-[0_0_15px_rgba(248,113,113,0.3)]'
                        : ''
                    }`}
                  />
                  {/* Subtle placeholder dot if empty */}
                  {!hasVal && (
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#4A5568] text-xl font-mono">
                      •
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Inline Error Message */}
          <div className="h-7 mb-4">
            <AnimatePresence>
              {errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs sm:text-sm text-amber-200/90 font-medium tracking-wide flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Unlock Action Button */}
          <motion.button
            id="unlock-surprise-btn"
            type="submit"
            disabled={isUnlocking}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[240px] px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#AA820A] text-[#0A0D14] font-cinzel font-bold text-sm tracking-[0.2em] shadow-[0_10px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>UNLOCK THE SURPRISE</span>
            <span className="text-base group-hover:rotate-12 transition-transform duration-300">
              🔐
            </span>
          </motion.button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#64748B]">
          <KeyRound className="w-3.5 h-3.5 text-[#D4AF37]/50" />
          <span>A dedicated celebration for an aspiring leader</span>
        </div>
      </motion.div>
    </div>
  );
};

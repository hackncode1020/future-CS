import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, GraduationCap } from 'lucide-react';
import { isSoundEnabled, toggleSound, playHarmonicChime } from '../utils/audio';

interface NavigationProps {
  onCelebrationTrigger: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onCelebrationTrigger }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'letter', 'mentor', 'journey', 'wishes', 'bestofluck', 'celebration'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playHarmonicChime('tick');
    }
  };

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'LETTER', href: '#letter' },
    { label: 'MENTOR', href: '#mentor' },
    { label: 'CS JOURNEY', href: '#journey' },
    { label: 'WISHES', href: '#wishes' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    playHarmonicChime('tick');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#05070E]/85 backdrop-blur-lg border-b border-[#D4AF37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0A0E1A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)]">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#F5E6C8] group-hover:text-gold-light-gradient transition-colors">
              NISHITA
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]/80 uppercase font-mono">
              FUTURE CS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-xs font-cinzel tracking-[0.2em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#FFEAA7] font-semibold'
                    : 'text-[#94A3B8] hover:text-[#F3EFE6]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Controls: Sound & Confetti Burst */}
        <div className="flex items-center gap-3">
          <button
            id="sound-toggle-btn"
            onClick={handleSoundToggle}
            className="w-9 h-9 rounded-full border border-[#D4AF37]/30 bg-[#0E1526]/80 flex items-center justify-center text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all cursor-pointer"
            title={soundOn ? 'Mute ambient chimes' : 'Enable ambient chimes'}
            aria-label="Toggle Sound"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </button>

          <button
            id="confetti-burst-btn"
            onClick={() => {
              playHarmonicChime('celebrate');
              onCelebrationTrigger();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-[#1A1505] to-[#2A200B] text-xs font-cinzel tracking-wider text-[#FFEAA7] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CELEBRATE ✨</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-[#D4AF37]/30 bg-[#0E1526] flex items-center justify-center text-[#D4AF37]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D4AF37]/20 bg-[#070B14]/95 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-cinzel tracking-[0.25em] text-[#E2E8F0] hover:text-[#FFEAA7] py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                playHarmonicChime('celebrate');
                onCelebrationTrigger();
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full py-3 rounded-lg border border-[#D4AF37] bg-[#D4AF37]/10 text-[#FFEAA7] font-cinzel text-xs tracking-widest flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>SPARKLE CELEBRATION 🎊</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

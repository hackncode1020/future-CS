import React from 'react';

// Pure CSS / SVG artworks inspired by Corporate Governance, Legal Charters, and ICSI CS studies

export const CSGovernanceSeal: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 140,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9DF" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#997514" />
          <stop offset="100%" stopColor="#F5E6C8" />
        </linearGradient>
        <radialGradient id="sealBack" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E283D" />
          <stop offset="80%" stopColor="#0B101E" />
          <stop offset="100%" stopColor="#05070E" />
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer scalloped notched seal ring */}
      <circle cx="100" cy="100" r="92" stroke="url(#goldGrad)" strokeWidth="2.5" strokeDasharray="6 3" />
      <circle cx="100" cy="100" r="84" fill="url(#sealBack)" stroke="url(#goldGrad)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="76" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />

      {/* Circular Emblem Text Track */}
      <path
        id="textCircle"
        d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
        fill="none"
      />
      <text fill="#E6CA65" fontSize="8.5" fontFamily="Cinzel, serif" letterSpacing="2.5">
        <textPath href="#textCircle" startOffset="50%" textAnchor="middle">
          • COMPANY SECRETARY • GOVERNANCE • INTEGRITY •
        </textPath>
      </text>

      {/* Center Core: Scales of Corporate Governance & Pillars */}
      <g transform="translate(100, 105)" filter="url(#glow)">
        {/* Central Pillar / Gavel handle */}
        <line x1="0" y1="-32" x2="0" y2="18" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="-34" r="3.5" fill="#FFF9DF" />
        <rect x="-14" y="18" width="28" height="4" rx="1.5" fill="url(#goldGrad)" />
        <rect x="-18" y="22" width="36" height="3" rx="1" fill="#997514" />

        {/* Balance Beam */}
        <line x1="-24" y1="-20" x2="24" y2="-20" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Left Pan */}
        <line x1="-22" y1="-20" x2="-28" y2="-6" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8" />
        <line x1="-22" y1="-20" x2="-16" y2="-6" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8" />
        <path d="M-30,-6 Q-22,-1 -14,-6 Z" fill="url(#goldGrad)" opacity="0.9" />

        {/* Right Pan */}
        <line x1="22" y1="-20" x2="16" y2="-6" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8" />
        <line x1="22" y1="-20" x2="28" y2="-6" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8" />
        <path d="M14,-6 Q22,-1 30,-6 Z" fill="url(#goldGrad)" opacity="0.9" />

        {/* Laurel Branches */}
        <path
          d="M-38,6 C-34,-14 -18,-24 0,-24 C18,-24 34,-14 38,6"
          stroke="url(#goldGrad)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>
    </svg>
  );
};

export const CSStudyCompendium: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bookCover1" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E283E" />
          <stop offset="100%" stopColor="#0B101D" />
        </linearGradient>
        <linearGradient id="bookCover2" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A1525" />
          <stop offset="100%" stopColor="#2A0B14" />
        </linearGradient>
        <linearGradient id="bookGold" x1="0" y1="0" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF2BF" />
          <stop offset="100%" stopColor="#AA820A" />
        </linearGradient>
        <linearGradient id="pageGrad" x1="0" y1="0" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5EFE0" />
          <stop offset="100%" stopColor="#E2D6BE" />
        </linearGradient>
      </defs>

      {/* Book 1 (Base - Companies Act & Corporate Governance) */}
      <g transform="translate(40, 110)">
        {/* Shadow */}
        <ellipse cx="100" cy="56" rx="90" ry="12" fill="#000000" opacity="0.6" filter="blur(6px)" />
        
        {/* Cover Base */}
        <rect x="10" y="25" width="180" height="26" rx="3" fill="url(#bookCover1)" stroke="#334155" strokeWidth="1" />
        <rect x="25" y="28" width="160" height="20" rx="1" fill="url(#pageGrad)" />
        {/* Page lines */}
        <line x1="28" y1="33" x2="182" y2="33" stroke="#CBD5E1" strokeWidth="0.75" />
        <line x1="28" y1="38" x2="182" y2="38" stroke="#CBD5E1" strokeWidth="0.75" />
        <line x1="28" y1="43" x2="182" y2="43" stroke="#CBD5E1" strokeWidth="0.75" />
        
        {/* Top Cover of bottom book */}
        <rect x="8" y="22" width="184" height="6" rx="2" fill="url(#bookCover1)" stroke="url(#bookGold)" strokeWidth="0.8" />
        {/* Gold Spine accents */}
        <line x1="12" y1="24" x2="12" y2="48" stroke="url(#bookGold)" strokeWidth="2" />
        <line x1="18" y1="24" x2="18" y2="48" stroke="url(#bookGold)" strokeWidth="1" />
        {/* Embossed text title on spine */}
        <text x="50" y="42" fill="#D4AF37" fontSize="8" fontFamily="Cinzel, serif" letterSpacing="2">
          COMPANIES ACT • VOL. I
        </text>
      </g>

      {/* Book 2 (Middle - Secretarial Audit & Compliance) */}
      <g transform="translate(55, 82)">
        <rect x="10" y="20" width="165" height="22" rx="3" fill="url(#bookCover2)" stroke="#7F1D1D" strokeWidth="1" />
        <rect x="24" y="22" width="148" height="17" rx="1" fill="url(#pageGrad)" />
        <line x1="26" y1="26" x2="170" y2="26" stroke="#CBD5E1" strokeWidth="0.75" />
        <line x1="26" y1="31" x2="170" y2="31" stroke="#CBD5E1" strokeWidth="0.75" />

        {/* Top cover */}
        <rect x="8" y="17" width="169" height="5" rx="2" fill="url(#bookCover2)" stroke="url(#bookGold)" strokeWidth="0.8" />
        {/* Gold Spine ribbon */}
        <line x1="12" y1="18" x2="12" y2="40" stroke="url(#bookGold)" strokeWidth="2" />
        <text x="45" y="34" fill="#FDE68A" fontSize="7.5" fontFamily="Cinzel, serif" letterSpacing="1.5">
          SECRETARIAL STANDARDS
        </text>

        {/* Silk Bookmark ribbon dropping down */}
        <path d="M120, 22 Q126, 45 130, 68 L136, 62 L142, 68 Q135, 45 125, 22 Z" fill="#D4AF37" opacity="0.95" />
      </g>

      {/* Open Legal Dossier / Board Resolution on top */}
      <g transform="translate(68, 28)">
        {/* Left Page */}
        <path
          d="M70, 70 C40, 65 20, 58 10, 55 L30, 15 C45, 18 65, 24 70, 26 Z"
          fill="#FAF6EE"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        {/* Right Page */}
        <path
          d="M70, 70 C100, 65 120, 58 130, 55 L110, 15 C95, 18 75, 24 70, 26 Z"
          fill="#FFFDF9"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        {/* Stylized Document Lines */}
        <line x1="25" y1="30" x2="60" y2="36" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="28" y1="37" x2="58" y2="43" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="30" y1="44" x2="55" y2="49" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />

        <line x1="78" y1="36" x2="115" y2="30" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="80" y1="43" x2="112" y2="37" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Quill Pen resting on the page */}
        <path
          d="M135, 5 Q110, 30 85, 48 L80, 52 L83, 47 Q115, 24 140, 2 Z"
          fill="url(#bookGold)"
        />
        <circle cx="95" cy="56" r="6" fill="#800020" stroke="#D4AF37" strokeWidth="1" />
      </g>
    </svg>
  );
};

export const CSCorporateSkyline: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 600 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="100%">
          <stop offset="0%" stopColor="#1E293B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#05070E" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="bldgLine" x1="0" y1="0" x2="0" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#334155" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Grid of Corporate Heights */}
      <g opacity="0.4">
        {/* Skyscraper 1 */}
        <rect x="40" y="70" width="55" height="170" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        <line x1="67" y1="40" x2="67" y2="70" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="67" cy="38" r="2" fill="#D4AF37" />

        {/* Skyscraper 2 (HQ Tower) */}
        <rect x="110" y="30" width="80" height="210" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        {/* Architectural diagonal bracing */}
        <line x1="110" y1="30" x2="190" y2="90" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
        <line x1="190" y1="30" x2="110" y2="90" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
        <line x1="110" y1="90" x2="190" y2="150" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
        <line x1="190" y1="90" x2="110" y2="150" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />

        {/* Spire Tower */}
        <polygon points="210,240 235,50 250,240" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        <line x1="235" y1="15" x2="235" y2="50" stroke="#FFEAA7" strokeWidth="1.5" />

        {/* Center High-Rise Corporate Boardroom */}
        <rect x="265" y="55" width="70" height="185" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        <circle cx="300" cy="85" r="14" stroke="#D4AF37" strokeWidth="0.75" opacity="0.6" />

        {/* Right Skylines */}
        <rect x="350" y="90" width="60" height="150" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        <rect x="425" y="45" width="75" height="195" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        <polygon points="462,10 435,45 490,45" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
        <rect x="515" y="110" width="50" height="130" fill="url(#skyGrad)" stroke="url(#bldgLine)" strokeWidth="1" />
      </g>

      {/* Horizon Baseline */}
      <line x1="0" y1="239" x2="600" y2="239" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
    </svg>
  );
};

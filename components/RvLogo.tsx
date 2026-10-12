import React from 'react';

interface RvLogoProps {
  className?: string;
  variant?: 'full' | 'header' | 'icon';
  size?: number;
}

export default function RvLogo({ className = '', variant = 'full', size = 80 }: RvLogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none ${className}`}
        aria-label="RV Events Logo"
      >
        <defs>
          <linearGradient id="goldGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA7C11" />
            <stop offset="100%" stopColor="#F5D889" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" stroke="url(#goldGradIcon)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="url(#goldGradIcon)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="37" stroke="url(#goldGradIcon)" strokeWidth="1" />
        {/* RV Monogram */}
        <text
          x="48"
          y="62"
          textAnchor="middle"
          fill="url(#goldGradIcon)"
          fontFamily="serif"
          fontWeight="bold"
          fontSize="36"
          fontStyle="italic"
          letterSpacing="1"
        >
          RV
        </text>
      </svg>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldGradH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#B38728" />
              <stop offset="100%" stopColor="#F5D889" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" stroke="url(#goldGradH)" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="41" stroke="url(#goldGradH)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="37" stroke="url(#goldGradH)" strokeWidth="1" />
          <text
            x="48"
            y="62"
            textAnchor="middle"
            fill="url(#goldGradH)"
            fontFamily="serif"
            fontWeight="bold"
            fontSize="36"
            fontStyle="italic"
          >
            RV
          </text>
        </svg>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-[#F5D889] leading-tight">
            RV EVENTS
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/80 font-sans">
            Farrukhabad
          </span>
        </div>
      </div>
    );
  }

  // Full heraldic emblem reproducing the official logo
  return (
    <svg
      width={size * 1.5}
      height={size * 1.5}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      aria-label="RV Events and Management Official Emblem"
    >
      <defs>
        <linearGradient id="goldEmblem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5C2" />
          <stop offset="25%" stopColor="#F5D889" />
          <stop offset="55%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#AA7C11" />
          <stop offset="100%" stopColor="#FFDF73" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Ornamental Frame Border */}
      <path
        d="M 30 110 L 140 110 M 260 110 L 370 110"
        stroke="url(#goldEmblem)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 30 110 L 30 220 C 30 320, 160 365, 200 370 C 240 365, 370 320, 370 220 L 370 110"
        stroke="url(#goldEmblem)"
        strokeWidth="3.5"
        fill="#050505"
      />

      {/* Corner Decorative Studs */}
      <circle cx="50" cy="130" r="12" fill="url(#goldEmblem)" />
      <circle cx="350" cy="130" r="12" fill="url(#goldEmblem)" />

      {/* Central Medallion Circle */}
      <circle cx="200" cy="135" r="75" stroke="url(#goldEmblem)" strokeWidth="4" fill="#080808" />
      <circle cx="200" cy="135" r="67" stroke="url(#goldEmblem)" strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="200" cy="135" r="60" stroke="url(#goldEmblem)" strokeWidth="1.5" />

      {/* Monogram RV inside circle */}
      <text
        x="195"
        y="155"
        textAnchor="middle"
        fill="url(#goldEmblem)"
        fontFamily="serif"
        fontWeight="bold"
        fontSize="58"
        fontStyle="italic"
        letterSpacing="2"
      >
        RV
      </text>

      {/* Baroque Filigree Flourishes below circle */}
      {/* Left scroll */}
      <path
        d="M 195 210 C 170 215, 120 215, 90 195 C 60 175, 45 190, 55 210 C 65 230, 105 245, 140 225 C 160 215, 185 220, 195 228"
        stroke="url(#goldEmblem)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="75" cy="205" r="7" fill="url(#goldEmblem)" />

      {/* Right scroll */}
      <path
        d="M 205 210 C 230 215, 280 215, 310 195 C 340 175, 355 190, 345 210 C 335 230, 295 245, 260 225 C 240 215, 215 220, 205 228"
        stroke="url(#goldEmblem)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="325" cy="205" r="7" fill="url(#goldEmblem)" />

      {/* Center leaves cluster */}
      <path
        d="M 200 210 C 190 225, 185 245, 200 250 C 215 245, 210 225, 200 210 Z"
        fill="url(#goldEmblem)"
      />
      <path
        d="M 185 220 C 170 230, 160 245, 175 250 C 190 248, 190 235, 185 220 Z"
        fill="url(#goldEmblem)"
      />
      <path
        d="M 215 220 C 230 230, 240 245, 225 250 C 210 248, 210 235, 215 220 Z"
        fill="url(#goldEmblem)"
      />

      {/* Script Text: Events and management */}
      <text
        x="200"
        y="280"
        textAnchor="middle"
        fill="url(#goldEmblem)"
        fontFamily="serif"
        fontStyle="italic"
        fontSize="24"
        letterSpacing="0.5"
      >
        Events and management
      </text>

      {/* Location text with horizontal bar accents: — Farrukhabad — */}
      <rect x="120" y="303" width="22" height="5" rx="2" fill="url(#goldEmblem)" />
      <text
        x="200"
        y="310"
        textAnchor="middle"
        fill="url(#goldEmblem)"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="17"
        letterSpacing="1"
      >
        Farrukhabad
      </text>
      <rect x="258" y="303" width="22" height="5" rx="2" fill="url(#goldEmblem)" />

      {/* Phone number: 8090123175 */}
      <text
        x="200"
        y="336"
        textAnchor="middle"
        fill="url(#goldEmblem)"
        fontFamily="serif"
        fontStyle="italic"
        fontWeight="bold"
        fontSize="21"
        letterSpacing="2"
      >
        8090123175
      </text>
    </svg>
  );
}

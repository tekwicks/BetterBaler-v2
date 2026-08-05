import React from 'react';

interface BetterBalerLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark' | 'auto';
}

export const BetterBalerLogo: React.FC<BetterBalerLogoProps> = ({
  className = '',
  height = 44,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <svg
      height={height}
      viewBox="0 0 440 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="BetterBaler.org Official Logo"
    >
      <defs>
        {/* Sun Glow / Gradient */}
        <radialGradient id="balerSunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>

        {/* Wave Gradients */}
        <linearGradient id="balerWaveCrest" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        <linearGradient id="balerWaveDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0B2265" />
        </linearGradient>

        <linearGradient id="balerSweepUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="30%" stopColor="#0284C7" />
          <stop offset="80%" stopColor="#003399" />
          <stop offset="100%" stopColor="#001845" />
        </linearGradient>
      </defs>

      {/* LEFT EMBLEM GROUP */}
      <g id="EmblemGroup">
        {/* 1. Philippine Sun in Background (Top-Left) */}
        <g transform="translate(105, 78)">
          {/* Sun Rays */}
          <path d="M -9 -34 L 0 -68 L 9 -34 Z" fill="#F59E0B" />
          <path d="M -9 34 L 0 68 L 9 34 Z" fill="#F59E0B" />
          <path d="M 34 -9 L 68 0 L 34 9 Z" fill="#F59E0B" />
          <path d="M -34 -9 L -68 0 L -34 9 Z" fill="#F59E0B" />
          <path d="M 22 -28 L 50 -50 L 28 -22 Z" fill="#F59E0B" />
          <path d="M -22 -28 L -50 -50 L -28 -22 Z" fill="#F59E0B" />
          <path d="M 22 28 L 50 50 L 28 22 Z" fill="#F59E0B" />
          <path d="M -22 28 L -50 50 L -28 22 Z" fill="#F59E0B" />
          {/* Inner Sun Disc */}
          <circle cx="0" cy="0" r="38" fill="url(#balerSunGlow)" stroke="#D97706" strokeWidth="2.5" />
        </g>

        {/* 2. Sierra Madre Mountain Peaks */}
        <g>
          {/* Mountain Silhouette */}
          <path
            d="M 12 135 L 50 82 L 80 106 L 115 52 L 155 98 L 195 135 Z"
            fill="#0B2265"
          />
          {/* White Mountain Snow/Rock Highlights */}
          <path
            d="M 115 52 L 102 85 L 115 78 L 122 96 L 115 52 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
          <path
            d="M 50 82 L 42 102 L 52 96 L 56 110 L 50 82 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path
            d="M 155 98 L 146 118 L 156 112 L 162 128 L 155 98 Z"
            fill="#E0F2FE"
            opacity="0.85"
          />
        </g>

        {/* 3. Pacific Ocean Swirling Waves */}
        <g>
          {/* Main Deep Blue Wave Base */}
          <path
            d="M 10 138 C 45 110, 100 115, 135 140 C 160 158, 175 130, 150 115 C 120 98, 75 115, 45 145 C 28 162, 18 185, 35 200 C 55 215, 115 205, 160 180 L 148 165 C 110 190, 60 198, 48 188 C 38 178, 45 160, 62 148 C 82 135, 115 125, 140 135 C 160 143, 150 162, 130 152 Z"
            fill="url(#balerWaveDeep)"
          />

          {/* Light Blue Dynamic Wave Curl Crest */}
          <path
            d="M 15 162 C 30 142, 65 145, 95 168 C 120 188, 140 168, 125 152 C 105 132, 70 142, 45 168 C 28 185, 42 210, 80 215 C 120 220, 155 195, 172 178 L 162 165 C 145 182, 115 205, 80 200 C 55 196, 45 182, 55 172 Z"
            fill="url(#balerWaveCrest)"
          />

          {/* White Spray Curl Details */}
          <path
            d="M 75 165 C 92 148, 115 152, 108 168 C 100 180, 85 175, 75 165 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </g>
      </g>

      {/* RIGHT TEXT GROUP & SWEEPING UNDERLINE */}
      {/* 4. Sweeping Ocean Underline (Under Baler.org extending to right) */}
      <path
        d="M 22 182 C 100 230, 230 215, 340 185 C 385 172, 425 192, 432 196 C 390 200, 310 228, 210 218 C 130 210, 50 205, 22 182 Z"
        fill="url(#balerSweepUnderline)"
      />

      {/* 5. Text "Better" */}
      <text
        x="156"
        y="92"
        fill={isDark ? '#FFFFFF' : '#000000'}
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="50"
        letterSpacing="-1"
      >
        Better
      </text>

      {/* 6. Text "Baler.org" */}
      <text
        x="154"
        y="158"
        fill={isDark ? '#FFFFFF' : '#000000'}
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="66"
        letterSpacing="-2"
      >
        Baler.org
      </text>
    </svg>
  );
};

export default BetterBalerLogo;

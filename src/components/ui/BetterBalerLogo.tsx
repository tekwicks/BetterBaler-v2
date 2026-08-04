import React from 'react';

interface BetterBalerLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark' | 'auto';
}

export const BetterBalerLogo: React.FC<BetterBalerLogoProps> = ({
  className = '',
  height = 42,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <svg
      height={height}
      viewBox="0 0 360 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="Better Baler Official Logo"
    >
      <defs>
        {/* Sun Glow / Gradient */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF176" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>

        {/* Wave Gradients */}
        <linearGradient id="waveLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        <linearGradient id="waveDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#003D8D" />
        </linearGradient>

        <linearGradient id="bottomSweep" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#002266" />
          <stop offset="50%" stopColor="#0051BA" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Group 1: Philippine Sun in Background (Right) */}
      <g transform="translate(265, 55)">
        {/* 8 Sun Rays */}
        {/* Top Ray */}
        <path d="M -8 -30 L 0 -58 L 8 -30 Z" fill="#F59E0B" />
        <path d="M 0 -58 L 0 -30" stroke="#FBBF24" strokeWidth="2" />

        {/* Bottom Ray */}
        <path d="M -8 30 L 0 58 L 8 30 Z" fill="#F59E0B" />

        {/* Right Ray */}
        <path d="M 30 -8 L 58 0 L 30 8 Z" fill="#F59E0B" />

        {/* Left Ray */}
        <path d="M -30 -8 L -58 0 L -30 8 Z" fill="#F59E0B" />

        {/* Top-Right Ray */}
        <path d="M 18 -24 L 42 -42 L 24 -18 Z" fill="#F59E0B" />

        {/* Top-Left Ray */}
        <path d="M -18 -24 L -42 -42 L -24 -18 Z" fill="#F59E0B" />

        {/* Bottom-Right Ray */}
        <path d="M 18 24 L 42 42 L 24 18 Z" fill="#F59E0B" />

        {/* Bottom-Left Ray */}
        <path d="M -18 24 L -42 42 L -24 18 Z" fill="#F59E0B" />

        {/* Central Sun Circle */}
        <circle cx="0" cy="0" r="32" fill="url(#sunGlow)" stroke="#D97706" strokeWidth="2" />
      </g>

      {/* Group 2: Sierra Madre Mountain Peaks */}
      <g>
        {/* Main Mountain Base */}
        <path
          d="M 210 92 L 235 52 L 255 68 L 282 32 L 315 62 L 348 92 Z"
          fill="#0B2265"
        />

        {/* Mountain Ridge Highlights (White/Light blue) */}
        <path
          d="M 282 32 L 272 56 L 282 52 L 288 65 L 282 32 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />
        <path
          d="M 235 52 L 228 68 L 236 64 L 240 75 L 235 52 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
        <path
          d="M 315 62 L 308 76 L 316 72 L 320 84 L 315 62 Z"
          fill="#E0F2FE"
          opacity="0.85"
        />
      </g>

      {/* Group 3: Surfing Ocean Waves (Right Side) */}
      <g>
        {/* Base Ocean Deep Wave Layer */}
        <path
          d="M 220 102 C 240 90, 270 85, 300 95 C 330 105, 345 90, 340 75 C 330 62, 305 70, 285 85 C 260 100, 235 105, 220 102 Z"
          fill="url(#waveDeep)"
        />

        {/* Dynamic Curling Wave crest */}
        <path
          d="M 240 115 C 270 95, 310 90, 335 105 C 350 115, 355 100, 345 88 C 332 75, 308 85, 280 102 C 255 118, 230 120, 210 118 Z"
          fill="url(#waveLight)"
        />

        {/* Wave Curl Accent Tip */}
        <path
          d="M 305 92 C 322 80, 338 82, 335 92 C 330 100, 318 98, 305 92 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </g>

      {/* Group 4: Sweeping Bottom Wave Line under Text */}
      <path
        d="M 12 148 C 70 122, 160 120, 240 128 C 300 134, 338 120, 352 102 C 328 128, 260 152, 170 148 C 100 145, 40 155, 12 148 Z"
        fill="url(#bottomSweep)"
      />

      {/* Group 5: Text "Better" */}
      <text
        x="18"
        y="58"
        fill={isDark ? '#FFFFFF' : '#002B7F'}
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="54"
        letterSpacing="-1.5"
      >
        Better
      </text>

      {/* Group 6: Text "BALER" */}
      <text
        x="15"
        y="126"
        fill={isDark ? '#FF3B30' : '#D91022'}
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="80"
        letterSpacing="-3"
      >
        BALER
      </text>
    </svg>
  );
};

export default BetterBalerLogo;

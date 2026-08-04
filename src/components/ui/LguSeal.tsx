import React from 'react';

interface LguSealProps {
  className?: string;
  size?: number;
}

export const LguSeal: React.FC<LguSealProps> = ({ className = "h-12 w-12", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Seal of the Municipality of Baler"
    >
      {/* Outer Golden Ring */}
      <circle cx="50" cy="50" r="48" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      <circle cx="50" cy="50" r="44" fill="#1E3A8A" />
      
      {/* Inner White Ring */}
      <circle cx="50" cy="50" r="42" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="36" fill="#1E40AF" />

      {/* Top Banner Text Circle Arc */}
      <path
        id="textPathUpper"
        d="M 18,50 A 32,32 0 1,1 82,50"
        fill="none"
      />
      <text fill="#FFFFFF" fontSize="6 font-weight=bold" fontWeight="700" letterSpacing="0.5">
        <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
          BAYAN NG BALER • AURORA
        </textPath>
      </text>

      {/* Shield Base */}
      <path
        d="M 28 32 C 28 32, 50 28, 50 28 C 50 28, 72 32, 72 32 C 72 56, 68 68, 50 78 C 32 68, 28 56, 28 32 Z"
        fill="#FFFFFF"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />

      {/* Shield Upper Half (Blue - Sky) & Lower Half (Waves) */}
      <path
        d="M 30 34 C 30 34, 50 30, 50 30 C 50 30, 70 34, 70 34 L 70 50 L 30 50 Z"
        fill="#2563EB"
      />
      <path
        d="M 30 50 L 70 50 C 70 50, 67 65, 50 74 C 33 65, 30 50, 30 50 Z"
        fill="#0284C7"
      />

      {/* Philippine Sun in Sky */}
      <circle cx="50" cy="40" r="5" fill="#FBBF24" />
      {/* Sun rays */}
      <path d="M 50 32 L 50 34 M 50 46 L 50 48 M 42 40 L 44 40 M 56 40 L 58 40" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />

      {/* Baler Surfing Waves in Lower Shield */}
      <path
        d="M 32 56 Q 38 52, 44 56 T 56 56 T 68 56"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 34 62 Q 40 58, 46 62 T 58 62 T 66 62"
        fill="none"
        stroke="#E0F2FE"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Stars */}
      <polygon points="34,36 35,38 37,38 35.5,39 36,41 34,40 32,41 32.5,39 31,38 33,38" fill="#FBBF24" />
      <polygon points="66,36 67,38 69,38 67.5,39 68,41 66,40 64,41 64.5,39 63,38 65,38" fill="#FBBF24" />
      <polygon points="50,70 51,71.5 53,71.5 51.5,72.5 52,74 50,73 48,74 48.5,72.5 47,71.5 49,71.5" fill="#FBBF24" />
    </svg>
  );
};

export default LguSeal;

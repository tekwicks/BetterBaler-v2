import React from 'react';

interface BetterBalerLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark' | 'auto';
  withBackground?: boolean;
  src?: string;
}

export const BetterBalerLogo: React.FC<BetterBalerLogoProps> = ({
  className = '',
  height = 44,
  src = '/logo.png',
}) => {
  return (
    <img
      src={src}
      alt="BetterBaler.org Official Logo"
      height={height}
      className={`inline-block object-contain ${className}`}
      style={{ height: height }}
    />
  );
};

export default BetterBalerLogo;

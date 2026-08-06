import React from 'react';

interface LguSealProps {
  className?: string;
  size?: number;
}

export const LguSeal: React.FC<LguSealProps> = ({ className = "h-12 w-12", size = 48 }) => {
  return (
    <img
      src="/logoBaler.png"
      alt="Seal of the Municipality of Baler"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
};

export default LguSeal;

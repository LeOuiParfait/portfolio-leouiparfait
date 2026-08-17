import React from 'react';

interface BowDividerProps {
  isDarkMode?: boolean;
  className?: string;
}

export const BowDivider: React.FC<BowDividerProps> = ({
  isDarkMode = true,
  className = 'mt-10 sm:mt-14',
}) => {
  const stroke = isDarkMode ? '#c8c0f5' : '#8b9a82';

  return (
    <div className={`flex items-center max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>
      <span className={`flex-1 h-px ${isDarkMode ? 'bg-[#c8c0f5]/40' : 'bg-[#8b9a82]/40'}`} />
      <svg
        className="w-24 sm:w-36 mx-3 sm:mx-5 shrink-0"
        viewBox="0 0 170 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M85 45 C 40 5, 5 20, 15 45 C 5 70, 40 85, 85 45"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M85 45 C 130 5, 165 20, 155 45 C 165 70, 130 85, 85 45"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <circle cx="85" cy="45" r="4" fill={stroke} />
        <path d="M85 45 L 60 88" stroke={stroke} strokeWidth="1.5" />
        <path d="M85 45 L 110 88" stroke={stroke} strokeWidth="1.5" />
      </svg>
      <span className={`flex-1 h-px ${isDarkMode ? 'bg-[#c8c0f5]/40' : 'bg-[#8b9a82]/40'}`} />
    </div>
  );
};

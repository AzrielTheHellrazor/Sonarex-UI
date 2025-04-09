import React from "react";

interface LogoProps {
  variant?: "minimalist" | "dynamic";
  className?: string;
}

export const Logo = ({ variant = "minimalist", className }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {variant === "minimalist" ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A2FF" />
              <stop offset="100%" stopColor="#0A2463" />
            </linearGradient>
          </defs>
          <path
            d="M5,20 Q10,2 20,20 T35,20"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="32" cy="18" r="1.5" fill="#00A2FF" />
          <circle cx="34" cy="18" r="1.5" fill="#00A2FF" opacity="0.7" />
          <circle cx="36" cy="18" r="1.5" fill="#00A2FF" opacity="0.4" />
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="#6E3AFF"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20,5 A15,15 0 0,1 35,20 A15,15 0 0,1 20,35 A15,15 0 0,1 5,20 A15,15 0 0,1 20,5"
            stroke="#00F0A0"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,3"
          />
          <path
            d="M12,12 L28,28 M28,12 L12,28"
            stroke="#FFD700"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span className="text-2xl font-bold bg-gradient-to-r from-sonarex-blue to-sonarex-navy bg-clip-text text-transparent">
        Sonarex
      </span>
    </div>
  );
};

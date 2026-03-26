// components/WindowControls.tsx
import React from "react";

const WindowControls: React.FC = () => {
  return (
    // 'group' klasa na glavnom kontejneru prati hover preko cele sekcije
    <div className="flex items-center space-x-2 px-4 pt-4 pb-8 group w-fit">
      {/* Red / Close */}
      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center">
        {/* Prilagođen SVG za X */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 10 10"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path
            stroke="#4c0000"
            strokeWidth="1.2"
            strokeLinecap="round"
            d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
          />
        </svg>
      </div>

      {/* Yellow / Minimize */}
      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 flex items-center justify-center">
        {/* Prilagođen SVG za Minus */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 10 10"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path
            stroke="#995700"
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M1 5h8"
          />
        </svg>
      </div>

      {/* Green / Fullscreen */}
      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 flex items-center justify-center">
        {/* Prilagođen SVG za dijagonalne strelice (tačan macOS oblik) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 10 10"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path fill="#006500" d="M1 1h4.5L1 5.5V1zm8 8H4.5L9 4.5V9z" />
        </svg>
      </div>
    </div>
  );
};

export default WindowControls;

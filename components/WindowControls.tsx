// components/WindowControls.tsx
import React from "react";

const WindowControls: React.FC = () => {
  return (
    // Uklonjeni su pt-4, pb-8 i px-4. Roditelj će sada kontrolisati centriranje!
    <div className="flex items-center space-x-3 group w-fit">
      {/* Red / Close - Vraćeno na normalnu debljinu (strokeWidth="1.2") */}
      <div className="w-4.5 h-4.5 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 10 10"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path
            stroke="#4c0000"
            strokeWidth="1.2" // Normalno
            strokeLinecap="round"
            d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
          />
        </svg>
      </div>

      {/* Yellow / Minimize - Vraćeno na normalnu debljinu (strokeWidth="1.5") */}
      <div className="w-4.5 h-4.5 rounded-full bg-[#FFBD2E] border border-black/10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 10 10"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path
            stroke="#995700"
            strokeWidth="1.5" // Normalno
            strokeLinecap="round"
            d="M1 5h8"
          />
        </svg>
      </div>

      {/* Green / Fullscreen - Ostaje BOLD */}
      <div className="w-4.5 h-4.5 rounded-full bg-[#27C93F] border border-black/10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 10 10"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          {/* Zadržan bold efekat pomoću stroke-a preko fill-a */}
          <path
            fill="#006500"
            stroke="#006500"
            strokeWidth="0.8"
            strokeLinejoin="round"
            d="M1 1h4.5L1 5.5V1zm8 8H4.5L9 4.5V9z"
          />
        </svg>
      </div>
    </div>
  );
};

export default WindowControls;

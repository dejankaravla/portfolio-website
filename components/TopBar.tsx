// components/TopBar.tsx
import React from "react";
import Image from "next/image";

const TopBar: React.FC = () => {
  return (
    // Fiksna visina h-[72px] i shrink-0 su obavezni ovde!
    <header className="w-full flex justify-end items-center px-4 border-b border-white/10 h-[72px] shrink-0 bg-transparent">
      {/* Kontejner slike: 40x40px, rounded-full, overflow-hidden */}
      <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden flex items-center justify-center shrink-0 relative">
        <Image
          src="/profile-image.jpg"
          alt="Profile avatar"
          width={100}
          height={100}
          // Vraćena tvoja originalna klasa h-[60px] (što je isto što i h-15)!
          className="object-cover object-center w-full h-[40px] max-w-none absolute"
        />
      </div>
    </header>
  );
};

export default TopBar;

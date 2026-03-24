// components/TopBar.tsx
import React from "react";
import Image from "next/image";

const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-end items-center px-4 py-3 border-b border-white/10 h-18">
      <div className="w-10 h-10 rounded-full border-2 border-white-400 overflow-hidden">
        <Image
          src="/profile-image.jpg" // Zameni putanjom do svoje prave profilne slike u public folderu
          alt="Profile avatar"
          width={100}
          height={100}
          className="object-cover w-full h-15"
        />
      </div>
    </header>
  );
};

export default TopBar;

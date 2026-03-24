// components/HeroCard.tsx
import React from "react";
import Image from "next/image";

const HeroCard: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)] animate-gradient-bg rounded-[2rem] p-8 lg:p-8 mb-12 flex flex-col md:flex-row justify-between items-center shadow-lg relative overflow-hidden">
      {" "}
      {/* Levi deo sa tekstom */}
      <div className="max-w-[600px] z-10">
        <h1 className="text-3xl lg:text-[2rem] font-bold text-white mb-1 tracking-tight">
          Dejan Karavla
        </h1>

        <p className="text-sm lg:text-[15px] text-white/95 mb-8 leading-relaxed font-medium">
          Innovative Front-End Developer with expertise in building responsive,
          high-performance web applications using React. Passionate about
          merging user-centric design with cutting-edge technology to solve
          complex problems. Proven ability to lead cross-functional teams,
          mentor junior developers, and deliver scalable solutions aligned with
          Agile workflows.
        </p>

        {/* Jedno plavo dugme sa skroz zaobljenim ivicama */}
        <button className="bg-[#1A73E8] hover:bg-[#155ebd] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all shadow-md">
          Download Resume
        </button>
      </div>
      {/* Desni deo sa slikom */}
      <div className="z-10 relative mt-8 md:mt-0 flex-shrink-0 hidden md:block">
        <Image
          src="/front-end-developer.png"
          alt="Front End Developer Illustration"
          width={340} // Povećao sam sliku da bi proporcije bile kao na tvom dizajnu
          height={340}
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>
    </div>
  );
};

export default HeroCard;

// components/HeroCard.tsx
import React from "react";
import Image from "next/image";

const HeroCard: React.FC = () => {
  return (
    // Dodato: flex-col-reverse (tekst dole, slika gore na mobilnom), text-center md:text-left
    <div className="bg-[linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)] animate-gradient-bg rounded-[2rem] p-6 md:p-8 mb-12 flex flex-col-reverse md:flex-row justify-between items-center shadow-lg relative overflow-hidden text-center md:text-left">
      {/* Levi deo sa tekstom */}
      <div className="max-w-[600px] z-10 mt-8 md:mt-0 flex flex-col items-center md:items-start">
        <h1 className="text-3xl lg:text-[2rem] font-bold text-white mb-2 md:mb-1 tracking-tight">
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

        <a
          href="/Dejan_Karavla_CV.pdf"
          download="Dejan_Karavla_CV.pdf"
          className="inline-block bg-[#1A73E8] hover:bg-[#155ebd] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all shadow-md"
        >
          Download Resume
        </a>
      </div>

      {/* Desni deo sa slikom */}
      {/* Uklonjen 'hidden', dodate responzivne dimenzije za w i h kontejnera */}
      <div className="z-10 relative flex-shrink-0 w-[200px] h-[200px] md:w-[340px] md:h-[340px]">
        <Image
          src="/front-end-developer.png"
          alt="Front End Developer Illustration"
          fill // Koristimo fill umesto fiksnih width i height za lakšu responzivnost
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>
    </div>
  );
};

export default HeroCard;

import React from "react";
import Image from "next/image";

// Tvoji podaci za edukaciju (slobodno prepravi sa svojim pravim faksom/školom)
const educations = [
  {
    id: 1,
    degree: "Bachelor of Management and Economics",
    institution: "Megatrend University",
    logo: "/megatrend-logo.png", // Putanja do grba/logoa
    date: "2008 – 2012",
  },
  // Ako imaš srednju školu ili master, samo dodaj novi objekat ovde
];

const EducationsSection: React.FC = () => {
  return (
    <div className="mt-16 w-full">
      <h3 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Educations
      </h3>

      <div className="flex flex-col space-y-5">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col md:flex-row md:items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6 lg:p-7 shadow-lg transition-all hover:bg-white/10 hover:border-white/20"
          >
            {/* Levi deo: Logo i Tekst */}
            <div className="flex items-center space-x-5 mb-4 md:mb-0">
              {/* Logo Kontejner */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Informacije o diplomi */}
              <div>
                <h4 className="text-[16px] lg:text-[17px] font-bold text-white mb-1 leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-[13px] lg:text-[14px] text-white/70 font-medium">
                  {edu.institution}
                </p>
              </div>
            </div>

            {/* Desni deo: Datum */}
            <div className="text-[13px] lg:text-[14px] text-white/90 font-medium tracking-wide">
              {edu.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationsSection;

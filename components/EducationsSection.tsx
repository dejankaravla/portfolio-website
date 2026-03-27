import React from "react";
import Image from "next/image";

const educations = [
  {
    id: 1,
    degree: "Bachelor of Management and Economics",
    institution: "Megatrend University",
    logo: "/megatrend-logo.png",
    date: "2008 – 2012",
  },
];

const EducationsSection: React.FC = () => {
  return (
    // mt-10 za mobilni, mt-16 za desktop
    <div className="mt-10 md:mt-16 w-full">
      <h3 className="text-[1rem] font-bold text-white mb-4 md:mb-6 tracking-wide">
        My Educations
      </h3>

      <div className="flex flex-col space-y-4 md:space-y-5">
        {educations.map((edu) => (
          <div
            key={edu.id}
            // p-5 za mobilni, p-6/7 za desktop
            className="flex flex-col md:flex-row md:items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-5 md:p-6 lg:p-7 shadow-lg transition-all hover:bg-white/10 hover:border-white/20"
          >
            {/* Levi deo: Logo i Tekst */}
            {/* space-x-4 na mobilnom */}
            <div className="flex items-center space-x-4 md:space-x-5 mb-3 md:mb-0">
              {/* Logo Kontejner - malo manji na telefonu */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Informacije o diplomi */}
              <div>
                <h4 className="text-[15px] md:text-[16px] lg:text-[17px] font-bold text-white mb-1 leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] text-white/70 font-medium">
                  {edu.institution}
                </p>
              </div>
            </div>

            {/* Desni deo: Datum */}
            <div className="text-[12px] md:text-[13px] lg:text-[14px] text-white/90 font-medium tracking-wide">
              {edu.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationsSection;

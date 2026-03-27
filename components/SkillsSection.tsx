// components/SkillsSection.tsx
import React from "react";

const skills = [
  { name: "HTML", icon: "/icons/html5.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css.svg", color: "#663399" },
  { name: "SCSS", icon: "/icons/sass.svg", color: "#CC6699" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "ReactJS", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "NextJS", icon: "/icons/nextjs.svg", color: "#000000" },
  { name: "React Native", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "NodeJS", icon: "/icons/nodejs.svg", color: "#5FA04E" },
  { name: "NestJS", icon: "/icons/nestjs.svg", color: "#E0234E" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#4169E1" },
  { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "Cursor", icon: "/icons/cursor.svg", color: "#000000" },
  { name: "Claude Code", icon: "/icons/claude.svg", color: "#D97757" },
  { name: "Google Gemeni", icon: "/icons/googlegemini.svg", color: "#8E75B2" },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="mt-8 md:mt-12 w-full">
      <h3 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Skills
      </h3>

      {/* Smanjen gap na gap-3 za mobilne, vraćen na gap-4/5 za desktop */}
      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            // Kartice su malo manje na telefonu (85x85) i zaobljene sa zaobljenjem 2xl, a na kompu 100x100
            className="flex flex-col items-center justify-center w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl sm:rounded-3xl shadow-lg group"
          >
            {/* Ikonice su malo manje na telefonu (w-8 h-8) */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3"
              style={{
                backgroundColor: skill.color,
                WebkitMaskImage: `url(${skill.icon})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${skill.icon})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />

            {/* Tekst je trunčicu manji na mobilnom da ne prelama čudno */}
            <span className="text-[10px] sm:text-[12px] font-bold text-white text-center px-1 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

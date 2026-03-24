// components/SkillsSection.tsx
import React from "react";
import Image from "next/image";

// Tvoja lista veština
const skills = [
  { name: "HTML", icon: "/icons/html5.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css.svg", color: "#663399" },
  { name: "SCSS", icon: "/icons/sass.svg", color: "#CC6699" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "ReactJS", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "NextJS", icon: "/icons/nextjs.svg", color: "#000000" },
  { name: "React Native", icon: "/icons/react.svg", color: "#61DAFB" }, // Možeš koristiti isti React logo
  { name: "NodeJS", icon: "/icons/nodejs.svg", color: "#5FA04E" },
  { name: "NestJS", icon: "/icons/nestjs.svg", color: "#E0234E" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#4169E1" },
  { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "Cursor", icon: "/icons/cursor.svg", color: "#000000" },
  { name: "Claude Code", icon: "/icons/claude.svg", color: "#D97757" },
  { name: "Google Gemeni", icon: "/icons/googlegemini.svg", color: "#8E75B2" }, // Možeš naći neku "brain" ili "sparkles" SVG ikonicu
];

const SkillsSection: React.FC = () => {
  return (
    <div className="mt-12 w-full">
      <h3 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Skills
      </h3>

      <div className="flex flex-wrap gap-4 lg:gap-5 justify-center">
        {skills.map((skill, index) => (
          // Dodao sam 'group' klasu ovde da bismo lakše kontrolisali hover efekte unutrašnjih elemenata
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[100px] h-[100px] bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl shadow-lg group"
          >
            {/* CSS Maska umesto <Image /> komponente */}
            <div
              className="w-10 h-10 mb-3"
              style={{
                backgroundColor: skill.color,
                // Webkit prefiksi su obavezni zbog podrške u različitim pretraživačima (Chrome, Safari)
                WebkitMaskImage: `url(${skill.icon})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                // Standardne maske
                maskImage: `url(${skill.icon})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />

            <span className="text-[12px] font-bold text-white text-center px-1 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

// components/ProjectThumbnail.tsx
import React from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import ProjectCover, { WindowDots } from "./ProjectCover";

// Kartica je ~300px na desktopu, bez sizes Next skida sliku za ceo ekran
const cardSizes = "(min-width: 1024px) 300px, (min-width: 768px) 30vw, 85vw";

const ProjectThumbnail: React.FC<{ project: Project }> = ({ project }) => {
  const src = project.thumbnail ?? project.image;
  const alt = `${project.title} preview`;

  return (
    <div className="@container relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-black/40">
      {project.cover ? (
        <ProjectCover cover={project.cover} />
      ) : src && project.frame === "photo" ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={cardSizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : src ? (
        <>
          {/* Zamućena kopija slike kao pozadina, umesto praznog prostora oko prozora */}
          <Image
            src={src}
            alt=""
            aria-hidden
            fill
            sizes="96px"
            className="object-cover scale-125 blur-2xl saturate-150 opacity-70"
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* justify-center-safe: centrira, a ako je slika viša od kartice kreće od vrha i "viri" ispod */}
          <div className="absolute inset-0 flex flex-col items-center justify-center-safe px-[7%] pt-[7%] pb-[5%]">
            {project.frame === "phone" ? (
              <div className="relative h-[118%] shrink-0 aspect-[9/20] rounded-[3cqw] bg-black p-[0.8cqw] ring-1 ring-white/20 shadow-[0_2cqw_5cqw_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-[1.2cqw]">
                <div className="relative size-full overflow-hidden rounded-[2.3cqw]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 160px, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full shrink-0 rounded-[1.4cqw] overflow-hidden bg-[#111318] ring-1 ring-white/15 shadow-[0_2cqw_5cqw_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-[1.2cqw]">
                <div className="flex items-center h-[4.4cqw] px-[2cqw] bg-[#1d1f26]">
                  <WindowDots />
                </div>
                {/* width/height su samo početni odnos; h-auto posle učitavanja uzima pravi odnos slike */}
                <Image
                  src={src}
                  alt={alt}
                  width={1600}
                  height={900}
                  sizes={cardSizes}
                  className="block w-full h-auto"
                />
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProjectThumbnail;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";
import { X, ExternalLink, Github } from "lucide-react"; // Uvezene ikonice za popup

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  // Dodajemo stanje za odabrani projekat (za popup)
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filterOptions = ["All", ...skills];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  // Zaključavamo skrol na glavnoj stranici kada je popup otvoren
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <div className="mt-16 relative">
      <h3 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Projects
      </h3>

      {/* Filter Buttons */}
      <div className="flex items-center space-x-3.5 mb-10 pb-2 overflow-x-auto custom-scrollbar">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
              activeFilter === filter
                ? "bg-white text-black font-semibold shadow-md"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)} // KLIK OTVARA POPUP
            className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col cursor-pointer"
          >
            {/* Project Image */}
            <div className="aspect-[4/3] w-full relative overflow-hidden border-b border-white/5 bg-white/5">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- POPUP (MODAL) SEKCIJA --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Zatamnjena pozadina koja zatvara popup na klik */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Glavni prozor popupa */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 custom-scrollbar animate-in fade-in zoom-in-95 duration-200">
            {/* Dugme za zatvaranje */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Glavna slika u popupu */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Naslov, Tagovi i Linkovi */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dugmići (Prikazuju se samo ako URL postoji) */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl text-white text-sm font-medium transition-all"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 bg-white text-black hover:bg-gray-200 rounded-xl text-sm font-bold transition-all shadow-lg"
                  >
                    <ExternalLink size={18} />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>

            {/* Opis */}
            {selectedProject.description && (
              <div className="mb-10">
                <h3 className="text-lg font-bold text-white mb-3">About</h3>
                <p className="text-gray-300 leading-relaxed text-[15px] whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>
            )}

            {/* Galerija (Prikazuje se samo ako ima slika u nizu) */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.gallery.map((img: string, i: number) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
                    >
                      <Image
                        src={img}
                        alt={`${selectedProject.title} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;

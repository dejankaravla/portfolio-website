"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";
import { X, ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filterOptions = ["All", ...skills]; // Pretpostavka da je skills niz objekata iz tvog prethodnog fajla

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    // Smanjena mt-16 na mt-10 za mobilne
    <div className="mt-10 md:mt-16 relative">
      <h3 className="text-[1rem] font-bold text-white mb-4 md:mb-6 tracking-wide">
        My Projects
      </h3>

      {/* Filter Buttons - smanjena donja margina na mb-6 za mobilne */}
      <div className="flex items-center space-x-3 md:space-x-3.5 mb-6 md:mb-10 pb-2 overflow-x-auto custom-scrollbar">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
              activeFilter === filter
                ? "bg-white text-black font-semibold shadow-md"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid - Već savršeno radi zbog grid-cols-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col cursor-pointer"
          >
            <div className="aspect-[4/3] w-full relative overflow-hidden border-b border-white/5 bg-white/5">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h3 className="text-[17px] md:text-lg font-bold text-white mb-3 md:mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-1 md:px-3 md:py-1 rounded-full border border-white/10"
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
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsSection;

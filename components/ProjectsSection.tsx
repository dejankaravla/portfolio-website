"use client"; // Obavezno dodati za interaktivnost u Next.js-u

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { skills } from "@/lib/skills";

const ProjectsSection: React.FC = () => {
  // 1. Dodajemo stanje za praćenje aktivnog filtera
  const [activeFilter, setActiveFilter] = useState("All");

  // 2. Dodajemo opciju "All" na početak niza veština za filtriranje
  const filterOptions = [...skills];

  // 3. Logika za filtriranje projekata
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <div className="mt-16">
      <h3 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Projects
      </h3>

      {/* Filter Buttons */}
      <div className="flex items-center space-x-3.5 mb-10 pb-2 overflow-x-auto custom-scrollbar">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)} // Menja aktivni filter na klik
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
            className="bg-black/20 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col"
          >
            {/* Project Image */}
            <div className="aspect-video w-full relative overflow-hidden border-b border-white/5 bg-white/5">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              {/* 4. REŠENJE ZA TAGOVE: flex-wrap i gap-2 umesto space-x */}
              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {project.tags.map((tag) => (
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

        {/* Poruka ako nema projekata za izabrani filter */}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-10 text-center text-gray-500 text-sm border border-dashed border-white/10 rounded-2xl">
            No projects found for the {activeFilter} category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;

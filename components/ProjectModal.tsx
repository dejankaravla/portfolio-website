// components/ProjectModal.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Zaključavamo skrol glavne stranice dok je modal otvoren
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Zatamnjena pozadina koja zatvara popup na klik */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* 1. SPOLJNI KONTEJNER: 
        Dodato 'overflow-hidden' (da skrol ne probija ivice) 
        Dodato 'py-4 md:py-6' (da udaljimo skrol od gornjeg i donjeg zaobljenja)
        Dodato 'pr-1 md:pr-2' (da skrolbar diše i ne lepi se skroz udesno)
      */}
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden flex flex-col py-4 md:py-6 pr-1 md:pr-2">
        {/* Dugme za zatvaranje (Sada je fiksirano u gornjem desnom uglu i NE SKROLUJE!) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/40 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors z-20 cursor-pointer border border-white/5"
        >
          <X size={20} />
        </button>

        {/* 2. UNUTRAŠNJI KONTEJNER: 
          Ovde je smešten skrol ('overflow-y-auto') i on se sada savršeno uklapa.
        */}
        <div className="overflow-y-auto custom-scrollbar w-full h-full px-6 md:px-10 pb-4">
          {/* Glavna slika u popupu */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10 mt-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Naslov, Tagovi i Linkovi */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
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
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl text-white text-sm font-medium transition-all"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
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
          {project.description && (
            <div className="mb-10">
              <h3 className="text-lg font-bold text-white mb-3">About</h3>
              <p className="text-gray-300 leading-relaxed text-[15px] whitespace-pre-line">
                {project.description}
              </p>
            </div>
          )}

          {/* Galerija (Prikazuje se samo ako ima slika u nizu) */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img: string, i: number) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} gallery image ${i + 1}`}
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
    </div>
  );
};

export default ProjectModal;

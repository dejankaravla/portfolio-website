// components/ProjectModal.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    // Smanjen padding oko modala na mobilnom (p-2 umesto p-4) da modal bude širi
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl max-h-[95vh] bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden flex flex-col py-4 md:py-6 pr-1 md:pr-2">
        {/* X Dugme: malo smanjeno i pomereno na mobilnom */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 p-1.5 md:p-2 bg-black/40 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors z-20 cursor-pointer border border-white/5"
        >
          <X size={18} className="md:w-5 md:h-5" />
        </button>

        {/* Skrolabilni kontejner: Smanjen padding na mobilnom (px-4 umesto px-6) */}
        <div className="overflow-y-auto custom-scrollbar w-full h-full px-4 md:px-10 pb-4">
          <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8 border border-white/10 mt-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 md:gap-6 mb-8">
            <div>
              {/* Naslov je manji na mobilnom (text-2xl) */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[11px] md:text-xs font-semibold text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 md:gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 md:px-4 py-2 md:py-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl text-white text-[13px] md:text-sm font-medium transition-all"
                >
                  <Github size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 md:px-4 py-2 md:py-2.5 bg-white text-black hover:bg-gray-200 rounded-xl text-[13px] md:text-sm font-bold transition-all shadow-lg"
                >
                  <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>

          {project.description && (
            <div className="mb-8 md:mb-10">
              <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">
                About
              </h3>
              <p className="text-gray-300 leading-relaxed text-[14px] md:text-[15px] whitespace-pre-line">
                {project.description}
              </p>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
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

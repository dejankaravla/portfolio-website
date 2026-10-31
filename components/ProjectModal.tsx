// components/ProjectModal.tsx
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectCover from "./ProjectCover";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Glavna slika + galerija u jednom pregledaču
  const images = project.image
    ? [project.image, ...(project.gallery ?? [])]
    : [];
  const count = images.length;
  const [active, setActive] = useState(0);

  const showPrev = useCallback(
    () => setActive((i) => (i - 1 + count) % count),
    [count]
  );
  const showNext = useCallback(
    () => setActive((i) => (i + 1) % count),
    [count]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Fokus ide na X dugme, a po zatvaranju se vraća na karticu koja je otvorila modal
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "auto";
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (count > 1 && e.key === "ArrowLeft") showPrev();
      if (count > 1 && e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, count, showPrev, showNext]);

  return (
    // Smanjen padding oko modala na mobilnom (p-2 umesto p-4) da modal bude širi
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-5xl max-h-[95vh] bg-[#111111]/90 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col py-4 md:py-6 pr-1 md:pr-2"
      >
        {/* X Dugme: malo smanjeno i pomereno na mobilnom */}
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 p-1.5 md:p-2 bg-black/40 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors z-20 cursor-pointer border border-white/5"
        >
          <X size={18} className="md:w-5 md:h-5" />
        </button>

        {/* Skrolabilni kontejner: Smanjen padding na mobilnom (px-4 umesto px-6) */}
        <div className="overflow-y-auto custom-scrollbar w-full h-full px-4 md:px-10 pb-4">
          {/* Pregledač: cela slika bez sečenja (object-contain) preko zamućene kopije */}
          <div
            className={`@container relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 mt-2 bg-black/60 ${
              count > 1 ? "mb-3 md:mb-4" : "mb-6 md:mb-8"
            }`}
          >
            {project.cover ? (
              <ProjectCover
                cover={project.cover}
                label={`${project.title} illustration`}
              />
            ) : (
              count > 0 && (
                <>
                  {/* Bez key-a: browser drži staru sliku dok se nova ne učita, pa nema praznog bljeska */}
                  <Image
                    src={images[active]}
                    alt=""
                    aria-hidden
                    fill
                    sizes="96px"
                    className="object-cover scale-125 blur-2xl opacity-40"
                  />
                  <Image
                    src={images[active]}
                    alt={`${project.title} screenshot ${active + 1} of ${count}`}
                    fill
                    sizes="(min-width: 1024px) 944px, 92vw"
                    className="object-contain"
                  />
                </>
              )
            )}

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={showPrev}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={showNext}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-[11px] md:text-xs font-semibold text-white/85 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {active + 1} / {count}
                </span>
              </>
            )}
          </div>

          {count > 1 && (
            <div className="flex gap-2 md:gap-3 overflow-x-auto custom-scrollbar pb-2 mb-6 md:mb-8">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 w-20 md:w-28 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    i === active
                      ? "border-white"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 md:gap-6 mb-8">
            <div>
              {/* Naslov je manji na mobilnom (text-2xl) */}
              <h2
                id={titleId}
                className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4"
              >
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">
                About
              </h3>
              <p className="text-gray-300 leading-relaxed text-[14px] md:text-[15px] whitespace-pre-line">
                {project.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

// src/app/page.tsx

import WindowControls from "@/components/WindowControls";
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import TopBar from "@/components/TopBar"; // Uvezi novu komponentu
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JobsSection from "@/components/JobSection";
import EducationsSection from "@/components/Education";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center p-6  font-sans text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Glavni prozor */}
      <div className="w-full max-w-[1300px] h-[95vh] bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex overflow-hidden">
        {/* Sidebar Kolona - fiksna širina, nema skrola */}
        <aside className="flex flex-col border-r border-white/5 flex-shrink-0">
          <div className="p-4 border-b border-white/10 h-18">
            <WindowControls />
          </div>
          <Sidebar />
        </aside>

        {/* Glavni Sadržaj - Flex kolona */}
        <main className="flex-1 flex flex-col min-w-0 h-full relative">
          {/* TopBar je sada van scroll area, na vrhu desne strane */}
          <div className="z-20">
            <TopBar />
          </div>

          {/* Samo ovaj deo sme da ima overflow-y-auto */}
          <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
            <div className="p-8 lg:p-12 space-y-20">
              <section id="profile">
                <HeroCard />
              </section>
              <section id="skills">
                <SkillsSection />
              </section>
              <section id="experience">
                <JobsSection />
              </section>
              <section id="projects">
                <ProjectsSection />
              </section>
              <section id="education">
                <EducationsSection />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import WindowControls from "@/components/WindowControls";
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import TopBar from "@/components/TopBar";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JobsSection from "@/components/JobsSection";
import EducationsSection from "@/components/EducationsSection";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center md:p-6 font-sans text-white">
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
      <div className="w-full md:max-w-[1300px] h-full md:h-[95vh] bg-black/30 backdrop-blur-xl md:border border-white/10 md:rounded-3xl shadow-2xl flex overflow-hidden">
        {/* Sidebar Kolona */}
        <aside className="flex flex-col border-r border-white/5 flex-shrink-0 w-[60px] md:w-72 transition-all duration-300">
          {/* LEVI HEADER: Zakucana visina h-[72px]! Na mobilnom je prazno, na desktopu su WindowControls */}
          <div className="flex items-center px-4 h-[72px] shrink-0 border-b border-white/10">
            <div className="hidden md:block">
              <WindowControls />
            </div>
          </div>

          <Sidebar />
        </aside>

        {/* Glavni Sadržaj */}
        <main className="flex-1 flex flex-col min-w-0 h-full relative">
          {/* DESNI HEADER (TopBar) - Direktno ubačen, visina mu je isto h-[72px] */}
          <TopBar />

          {/* Sadržaj koji se skroluje */}
          <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
            <div className="p-4 md:p-8 lg:p-12 space-y-12 md:space-y-20">
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

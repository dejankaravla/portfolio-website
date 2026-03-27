import React from "react";
import Image from "next/image";

const jobs = [
  {
    id: 1,
    company: "Digital Mind",
    logo: "/digital_mind_doo_logo.png",
    date: "Jan 2021 - Present",
    duration: "5 yrs 2 mos",
    description:
      "Independent Front-End Developer specializing in building responsive, high-performance web applications and crafting intuitive user interfaces.",
    bullets: [
      "Developing 3AS, a decentralized platform for the Agentic Internet, utilizing Next.js, TypeScript, and MongoDB to build scalable solutions.",
      "Spearheaded the development of the Shapa mobile app, focusing on user engagement and performance optimization using React Native, NestJS, and PostgreSQL.",
      "Contributed to the Solsea NFT marketplace, helping it scale to over 1M users in six months using ReactJS, FeathersJS, and MongoDB.",
      "Enhanced the Cadastry L0 blockchain platform and led frontend development for VR All Art, creating interactive digital experiences.",
    ],
  },
  {
    id: 2,
    company: "Freelancing",
    logo: "/code-logo.png",
    date: "Jan 2020 - Sep 2021",
    duration: "1 yr 8 mo",
    description:
      "Development of Communication Networks and Industrial Smart Solutions.",
    bullets: [
      "Translated complex designs into pixel-perfect, interactive web and mobile interfaces, ensuring cross-browser compatibility and responsiveness.",
      "Developed dynamic and engaging user experiences using modern frontend technologies including JavaScript, ReactJS, and SCSS.",
      "Collaborated closely with clients to deliver visually appealing, accessible, and user-centric frontend solutions tailored to their specific business needs.",
    ],
  },
];

const JobsSection: React.FC = () => {
  return (
    // Malo manja gornja margina na mobilnom (mt-12 umesto mt-16)
    <div className="mt-12 md:mt-16 w-full">
      <h3 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Jobs
      </h3>

      {/* Smanjen padding na p-5/p-6 za mobilne, vraćen na p-8/p-10 za desktop */}
      <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl">
        {/* Smanjen razmak između poslova (space-y-8 na mobilnom) */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          {jobs.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Header posla */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-3.5 md:space-x-4 mb-2 md:mb-0">
                  {/* Smanjio sam logo kontejner minimalno za telefon (w-10 h-10 vs w-12 h-12) */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-md shrink-0">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h4 className="text-[16px] md:text-[17px] font-bold text-white">
                    {job.company}
                  </h4>
                </div>

                <div className="text-[13px] md:text-sm text-white/70 font-medium tracking-wide">
                  {job.date} <span className="mx-1.5 opacity-50">•</span>{" "}
                  {job.duration}
                </div>
              </div>

              {/* Kratak opis */}
              <p className="text-[13.5px] md:text-[14px] text-white/90 mb-4 md:mb-5 font-medium leading-relaxed">
                {job.description}
              </p>

              {/* Lista zaduženja */}
              <ul className="space-y-3 md:space-y-3.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3.5 mt-[6px] w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 opacity-80"></span>
                    <span className="text-[13px] md:text-[13.5px] text-white/80 leading-relaxed font-medium">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Smanjena margina linije za razdvajanje na mobilnom (mt-8) */}
              {index !== jobs.length - 1 && (
                <div className="w-full h-[1px] bg-white/5 mt-8 md:mt-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsSection;

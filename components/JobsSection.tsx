import React from "react";
import Image from "next/image";

// Trajanje se računa pri buildu, pa se samo ažurira posle svakog deploya
const getDuration = (start: Date, end: Date = new Date()) => {
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
};

const jobs = [
  {
    id: 3,
    company: "Cognios",
    role: "Co-founder & CEO",
    logo: "/cognios-logo.jpg",
    logoFill: true, // Crni logo popunjava celu pločicu, bez belog okvira
    date: "Apr 2026 - Present",
    duration: getDuration(new Date(2026, 3)),
    description:
      "Co-founder and CEO of Cognios, an AI tutoring platform where real experts turn their knowledge into adaptive AI tutors and learners achieve provable progress. Leading product direction while staying hands-on in the codebase.",
    bullets: [
      "Building the platform with Next.js, TypeScript, MongoDB, and the Vercel AI SDK, delivering live AI tutoring grounded in each expert's own material.",
      "Shipped the creator pipeline that turns uploaded documents, video, and text into structured lessons and mastery checks, reviewed by the creator and the platform before going live.",
      "Designed mastery-based progression with shareable progress records and certificates, so learners move forward by showing what they understand.",
      "Launched tiered learner subscriptions with Stripe and a creator revenue share that pays experts 75% of eligible revenue every month.",
    ],
  },
  {
    id: 1,
    company: "Digital Mind",
    role: "Full Stack Engineer",
    logo: "/digital_mind_doo_logo.png",
    date: "Jan 2021 - Present", // Vraćeno na tvoj originalni datum
    duration: getDuration(new Date(2021, 0)),
    description:
      "Full Stack Engineer responsible for architecting and developing scalable web, mobile, and decentralized applications, handling everything from intuitive frontend interfaces to robust backend services.",
    bullets: [
      "Developing 3AS, a decentralized platform for the Agentic Internet, utilizing Next.js, TypeScript, and MongoDB to build scalable solutions.",
      "Spearheaded the development of the Shapa mobile app, focusing on user engagement and performance optimization using React Native, NestJS, and PostgreSQL.",
      "Contributed to the Solsea NFT marketplace, helping it scale to over 1M users in six months using ReactJS, FeathersJS, and MongoDB.",
      "Enhanced the Cadastry L0 blockchain platform and led frontend development for VR All Art, creating interactive digital experiences.",
    ],
  },
  {
    id: 2,
    company: "Freelance Front-End Developer", // Dodato zvanje da zvuči profesionalnije
    logo: "/code-logo.png",
    date: "Jan 2020 - Sep 2021",
    duration: getDuration(new Date(2020, 0), new Date(2021, 8)),
    description:
      "Independent Front-End Developer focused on creating custom, responsive websites and digital solutions for small businesses.",
    bullets: [
      "Developed visually appealing and interactive websites from scratch, helping local businesses establish a strong online presence.",
      "Translated client ideas and wireframes into fully responsive web interfaces using HTML, SCSS, JavaScript, and ReactJS.",
      "Managed end-to-end frontend development, communicating directly with clients to ensure the final product met their specific business needs.",
    ],
  },
];

const JobsSection: React.FC = () => {
  return (
    // Malo manja gornja margina na mobilnom (mt-12 umesto mt-16)
    <div className="mt-12 md:mt-16 w-full">
      <h2 className="text-[1rem] font-bold text-white mb-6 tracking-wide">
        My Jobs
      </h2>

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
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-md shrink-0 ${
                      job.logoFill ? "bg-black" : "bg-white p-1"
                    }`}
                  >
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={48}
                      height={48}
                      className={`w-full h-full ${job.logoFill ? "object-cover" : "object-contain"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] md:text-[17px] font-bold text-white">
                      {job.company}
                    </h3>
                    {job.role && (
                      <p className="text-[12.5px] md:text-[13px] text-white/60 font-medium">
                        {job.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[13px] md:text-sm text-white/70 font-medium tracking-wide">
                  {job.date} <span className="mx-1.5 opacity-50">•</span>{" "}
                  {job.duration}
                </div>
              </div>

              {/* Kratak opis */}
              <p className="text-[13.5px] md:text-[14px] text-white/90 mb-4 md:mb-5 font-bold leading-relaxed">
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

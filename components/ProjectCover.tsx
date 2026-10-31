// components/ProjectCover.tsx
import React from "react";
import type { ProjectCover as Cover } from "@/lib/projects";

// Ilustracije za projekte bez screenshota. Sve mere su u cqw (procenat širine roditelja),
// pa ista ilustracija izgleda isto na kartici i u modalu. Roditelj mora imati klasu @container.

export const WindowDots: React.FC = () => (
  <div className="flex gap-[0.9cqw] shrink-0">
    <span className="size-[1.3cqw] rounded-full bg-[#FF5F56]" />
    <span className="size-[1.3cqw] rounded-full bg-[#FFBD2E]" />
    <span className="size-[1.3cqw] rounded-full bg-[#27C93F]" />
  </div>
);

const Window: React.FC<{
  title?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, className = "", children }) => (
  <div
    className={`relative rounded-[1.6cqw] overflow-hidden bg-[#111318]/95 ring-1 ring-white/10 shadow-[0_2cqw_5cqw_rgba(0,0,0,0.5)] ${className}`}
  >
    <div className="flex items-center gap-[2cqw] h-[4.4cqw] px-[2cqw] bg-white/[0.04] border-b border-white/5">
      <WindowDots />
      {title && (
        <span className="text-[1.5cqw] text-white/40 font-medium">{title}</span>
      )}
    </div>
    {children}
  </div>
);

const ApiCover: React.FC<{ cover: Extract<Cover, { kind: "api" }> }> = ({
  cover,
}) => {
  const entries = Object.entries(cover.response);

  return (
    <Window title="terminal" className="w-[74%]">
      <div className="px-[3cqw] py-[2.4cqw] font-mono text-[2cqw] leading-[1.75] text-white/80">
        <p>
          <span className="text-white/35">$ </span>
          <span className="font-bold" style={{ color: cover.accent }}>
            {cover.method}
          </span>{" "}
          {cover.path}
        </p>
        <p className="text-[#27C93F] mb-[0.8cqw]">
          200 OK <span className="text-white/35">· {cover.latency}</span>
        </p>
        <p className="text-white/45">{"{"}</p>
        {entries.map(([key, value], i) => (
          <p key={key} className="pl-[3cqw]">
            <span style={{ color: cover.accent }}>&quot;{key}&quot;</span>
            <span className="text-white/45">: </span>
            <span
              className={
                typeof value === "string" ? "text-[#a5e3a1]" : "text-[#ffb86c]"
              }
            >
              {typeof value === "string" ? `"${value}"` : String(value)}
            </span>
            {i < entries.length - 1 && <span className="text-white/45">,</span>}
          </p>
        ))}
        <p className="text-white/45">{"}"}</p>
      </div>
    </Window>
  );
};

// Fiksne visine stubića, da grafikon izgleda isto na svakom renderu
const chartBars = [38, 52, 44, 68, 57, 74, 62, 86, 70, 92, 78, 96];

const DashboardCover: React.FC<{
  cover: Extract<Cover, { kind: "dashboard" }>;
}> = ({ cover }) => (
  <Window title={cover.title} className="w-[84%]">
    <div className="flex h-[38cqw]">
      <div className="w-[22%] border-r border-white/5 p-[1.6cqw] space-y-[0.8cqw]">
        {cover.nav.map((item, i) => (
          <div
            key={item}
            className={`flex items-center gap-[1cqw] rounded-[0.8cqw] px-[1cqw] py-[0.8cqw] text-[1.45cqw] ${
              i === 0 ? "bg-white/10 text-white" : "text-white/45"
            }`}
          >
            <span
              className="size-[1.2cqw] rounded-[0.3cqw] shrink-0"
              style={{
                background: i === 0 ? cover.accent : "rgba(255,255,255,0.2)",
              }}
            />
            {item}
          </div>
        ))}
      </div>

      <div className="flex-1 p-[2cqw] flex flex-col gap-[1.6cqw]">
        <div className="grid grid-cols-3 gap-[1.4cqw]">
          {cover.stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1cqw] bg-white/[0.05] ring-1 ring-white/5 px-[1.6cqw] py-[1.3cqw]"
            >
              <p className="text-[1.2cqw] text-white/45 uppercase tracking-wide">
                {label}
              </p>
              <p className="text-[2.8cqw] font-bold text-white leading-tight">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex-1 rounded-[1cqw] bg-white/[0.03] ring-1 ring-white/5 px-[1.6cqw] pt-[2.4cqw] flex items-end gap-[0.9cqw]">
          {chartBars.map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[0.5cqw]"
              style={{
                height: `${height}%`,
                background: `linear-gradient(to top, ${cover.accent}26, ${cover.accent})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </Window>
);

const ExtensionCover: React.FC<{
  cover: Extract<Cover, { kind: "extension" }>;
}> = ({ cover }) => (
  <Window title={cover.site} className="w-[84%]">
    <div className="relative h-[38cqw] p-[3cqw]">
      {/* Skica stranice iza popup-a */}
      <div className="w-[52%] space-y-[1.4cqw]">
        <div className="h-[3cqw] w-[70%] rounded-[0.6cqw] bg-white/10" />
        <div className="h-[1.3cqw] w-full rounded-[0.6cqw] bg-white/5" />
        <div className="h-[1.3cqw] w-[85%] rounded-[0.6cqw] bg-white/5" />
        <div className="grid grid-cols-2 gap-[1.4cqw] pt-[1.6cqw]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[8cqw] rounded-[1cqw] bg-white/[0.04] ring-1 ring-white/5"
            />
          ))}
        </div>
      </div>

      {/* Popup ekstenzije */}
      <div className="absolute top-[1.6cqw] right-[2.6cqw] w-[36%] rounded-[1.4cqw] bg-[#171a22] ring-1 ring-white/15 shadow-[0_2cqw_4cqw_rgba(0,0,0,0.6)] p-[2cqw] space-y-[1.5cqw]">
        <div className="flex items-center gap-[1.2cqw]">
          <span
            className="size-[3.4cqw] rounded-[0.9cqw] flex items-center justify-center text-[1.4cqw] font-black text-black"
            style={{ background: cover.accent }}
          >
            {cover.name.slice(0, 1)}
          </span>
          <div>
            <p className="text-[1.7cqw] font-bold text-white leading-tight">
              {cover.name}
            </p>
            <p className="text-[1.2cqw] text-white/45">{cover.action}</p>
          </div>
        </div>
        {cover.rows.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-[1cqw] text-[1.35cqw] border-t border-white/5 pt-[1.2cqw]"
          >
            <span className="text-white/45">{label}</span>
            <span className="text-white font-semibold">{value}</span>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-[1cqw] pt-[0.4cqw] text-[1.35cqw] text-center">
          <span className="rounded-[0.8cqw] bg-white/10 text-white/70 py-[0.9cqw]">
            Reject
          </span>
          <span
            className="rounded-[0.8cqw] font-bold text-black py-[0.9cqw]"
            style={{ background: cover.accent }}
          >
            Approve
          </span>
        </div>
      </div>
    </div>
  </Window>
);

const ProjectCover: React.FC<{ cover: Cover; label?: string }> = ({
  cover,
  label,
}) => (
  <div
    role={label ? "img" : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    className="absolute inset-0 overflow-hidden bg-[#0a0c12] flex items-center justify-center select-none"
  >
    {/* Mreža i obojeni sjaj u pozadini */}
    <div
      className="absolute inset-0 opacity-70"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "5cqw 5cqw",
      }}
    />
    <div
      className="absolute left-1/2 top-[-35%] -translate-x-1/2 w-[85%] aspect-square rounded-full blur-[9cqw] opacity-35"
      style={{ background: cover.accent }}
    />

    <div className="relative w-full flex justify-center transition-transform duration-500 ease-out group-hover:-translate-y-[1cqw]">
      {cover.kind === "api" && <ApiCover cover={cover} />}
      {cover.kind === "dashboard" && <DashboardCover cover={cover} />}
      {cover.kind === "extension" && <ExtensionCover cover={cover} />}
    </div>
  </div>
);

export default ProjectCover;

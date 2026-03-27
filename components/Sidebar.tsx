"use client";

import React, { useState } from "react";
import {
  Briefcase,
  FileText,
  Linkedin,
  Github,
  Mail,
  Phone,
  School2,
  Code2,
  Flag,
} from "lucide-react";

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  onClick?: (href: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  icon,
  label,
  href,
  active = false,
  onClick,
}) => (
  <a
    aria-label={label}
    href={href}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        onClick(href);
      }
    }}
    target={!onClick && href.startsWith("http") ? "_blank" : "_self"}
    rel={!onClick && href.startsWith("http") ? "noopener noreferrer" : ""}
    // Na mobilnom centriramo ikonicu i sklanjamo margine/padding tekst
    className={`flex items-center justify-center md:justify-start md:space-x-3.5 p-2.5 md:px-3 md:py-2.5 rounded-xl transition-colors ${
      active
        ? "bg-white/10 text-white shadow-sm"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    <div className="flex items-center justify-center shrink-0">{icon}</div>
    {/* Labela je sakrivena na mobilnom (hidden md:block) */}
    <span className="hidden md:block text-sm font-medium">{label}</span>
  </a>
);

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("#profile");

  const handleScroll = (href: string) => {
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  return (
    // Uklonio sam w-72 odavde jer sada page.tsx kontroliše širinu kontejnera
    <aside className="w-full flex flex-col justify-between py-3 overflow-y-auto custom-scrollbar h-full">
      <div className="px-2 md:px-4 flex flex-col flex-grow">
        {/* Categories */}
        <div className="mb-6 md:mb-4 border-b border-white/5 md:border-none pb-4 md:pb-0">
          {/* Naslov kategorije sakriven na mobilnom */}
          <h3 className="hidden md:block text-md font-semibold text-gray-200 tracking-wider mb-2 px-3">
            Categories
          </h3>
          <nav className="space-y-1 md:space-y-1.5 flex flex-col items-center md:items-stretch">
            <NavLink
              icon={<Flag size={20} />}
              label="Profile"
              href="#profile"
              active={activeLink === "#profile"}
              onClick={handleScroll}
            />
            <NavLink
              icon={<FileText size={20} />}
              label="Skills"
              href="#skills"
              active={activeLink === "#skills"}
              onClick={handleScroll}
            />
            <NavLink
              icon={<Briefcase size={20} />}
              label="Experience"
              href="#experience"
              active={activeLink === "#experience"}
              onClick={handleScroll}
            />
            <NavLink
              icon={<Code2 size={20} />}
              label="Projects"
              href="#projects"
              active={activeLink === "#projects"}
              onClick={handleScroll}
            />
            <NavLink
              icon={<School2 size={20} />}
              label="Education"
              href="#education"
              active={activeLink === "#education"}
              onClick={handleScroll}
            />
          </nav>
        </div>

        {/* Social Links */}
        <div className="mt-2 md:mt-0">
          <h3 className="hidden md:block text-md font-semibold text-gray-200 tracking-wider mb-2 px-3">
            Social Link
          </h3>
          <nav className="space-y-1 md:space-y-1.5 flex flex-col items-center md:items-stretch">
            <NavLink
              icon={<Linkedin size={20} />}
              label="LinkedIn"
              href="https://www.linkedin.com/in/dejankaravla"
            />
            <NavLink
              icon={<Github size={20} />}
              label="GitHub"
              href="https://github.com/dejankaravla"
            />
            <NavLink
              icon={<Phone size={20} />}
              label="Phone"
              href="tel:+38162361667"
            />
            <NavLink
              icon={<Mail size={20} />}
              label="Email"
              href="mailto:karavla013@gmail.com"
            />
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

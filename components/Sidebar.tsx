"use client"; // Obavezno za interaktivnost (klikove i stanje)

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

// Tipovi za linkove: dodajemo href i opcionu onClick funkciju
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
    href={href}
    onClick={(e) => {
      // Ako postoji onClick (kategorije), zaustavi defaultni skok i uradi glatko skrolovanje
      if (onClick) {
        e.preventDefault();
        onClick(href);
      }
    }}
    // Ako su u pitanju eksterni linkovi (npr. GitHub), neka otvara u novom tabu
    target={!onClick && href.startsWith("http") ? "_blank" : "_self"}
    rel={!onClick && href.startsWith("http") ? "noopener noreferrer" : ""}
    className={`flex items-center space-x-3.5 px-3 py-2.5 rounded-xl transition-all duration-200 ${
      active
        ? "bg-white/10 text-white shadow-sm"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </a>
);

const Sidebar: React.FC = () => {
  // Stanje za praćenje aktivnog taba
  const [activeLink, setActiveLink] = useState("#profile");

  // Funkcija za glatko skrolovanje
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
    <aside className="w-72 flex flex-col justify-between py-3 overflow-hidden">
      {/* Top Section: Search + Nav */}
      <div className="px-4 flex flex-col flex-grow">
        {/* Categories */}
        <div className="mb-10">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 px-3">
            Categories
          </h3>
          <nav className="space-y-1.5">
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
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5 px-3">
            Social Link
          </h3>
          <nav className="space-y-1.5">
            {/* Za ove linkove ne šaljemo onClick kako bi radili kao normalni linkovi */}
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

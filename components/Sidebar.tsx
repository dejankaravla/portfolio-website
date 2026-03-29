"use client";

import React, { useState, useEffect, useRef } from "react";
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
    href={href}
    aria-label={label}
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        onClick(href);
      }
    }}
    target={!onClick && href.startsWith("http") ? "_blank" : "_self"}
    rel={!onClick && href.startsWith("http") ? "noopener noreferrer" : ""}
    className={`flex items-center justify-center md:justify-start md:space-x-3.5 p-2.5 md:px-3 md:py-2.5 rounded-xl transition-colors ${
      active
        ? "bg-white/10 text-white shadow-sm"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    <div className="flex items-center justify-center shrink-0">{icon}</div>
    <span className="hidden md:block text-sm font-medium">{label}</span>
  </a>
);

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("#profile");

  // Osigurač koji pamti da li skrolujemo klikom
  const isClickScrolling = useRef(false);
  // Pamti tajmer kako bismo detektovali kada se skrol ZAUSTAVIO
  const scrollTimeout = useRef<any>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    if (!scrollContainer) return;

    const sectionIds = [
      "profile",
      "skills",
      "experience",
      "projects",
      "education",
    ];

    const onScroll = () => {
      // 1. Očisti prethodni tajmer pri svakom milimetru skrola
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // 2. Postavi novi tajmer. Ako prođe 100ms BEZ ijednog novog pomeraja, skrol je GOTOV.
      scrollTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 100);

      // 3. Ako je skrol započet klikom, ignoriši promenu boja usput!
      if (isClickScrolling.current) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      // Zaštita za dno ekrana (Education)
      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 10) {
        setActiveLink("#education");
        return;
      }

      // Normalno praćenje skrola
      const viewportMiddle = window.innerHeight / 2;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            setActiveLink(`#${id}`);
          }
        }
      }
    };

    scrollContainer.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleNavClick = (href: string) => {
    // Odmah aktiviramo kliknuti link i palimo osigurač
    isClickScrolling.current = true;
    setActiveLink(href);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      // Ovog puta NEMA setTimeout-a ovde, jer 'onScroll' sada sam prepoznaje kada je skrol gotov!
    } else {
      isClickScrolling.current = false;
    }
  };

  return (
    <aside className="w-full flex flex-col justify-between py-3 overflow-y-auto custom-scrollbar h-full">
      <div className="px-2 md:px-4 flex flex-col flex-grow">
        {/* Categories */}
        <div className="mb-6 md:mb-4 border-b border-white/5 md:border-none pb-4 md:pb-0">
          <h3 className="hidden md:block text-md font-semibold text-gray-200 tracking-wider mb-2 px-3">
            Categories
          </h3>
          <nav className="space-y-1 md:space-y-1.5 flex flex-col items-center md:items-stretch">
            <NavLink
              icon={<Flag size={20} />}
              label="Profile"
              href="#profile"
              active={activeLink === "#profile"}
              onClick={handleNavClick}
            />
            <NavLink
              icon={<FileText size={20} />}
              label="Skills"
              href="#skills"
              active={activeLink === "#skills"}
              onClick={handleNavClick}
            />
            <NavLink
              icon={<Briefcase size={20} />}
              label="Experience"
              href="#experience"
              active={activeLink === "#experience"}
              onClick={handleNavClick}
            />
            <NavLink
              icon={<Code2 size={20} />}
              label="Projects"
              href="#projects"
              active={activeLink === "#projects"}
              onClick={handleNavClick}
            />
            <NavLink
              icon={<School2 size={20} />}
              label="Education"
              href="#education"
              active={activeLink === "#education"}
              onClick={handleNavClick}
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

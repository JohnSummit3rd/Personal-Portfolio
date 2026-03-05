import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon.svg"
import hamburgerIcon from "../assets/hamburger-icon.svg"
import darkHamburgerIcon from "../assets/hamburger-icon-dark.svg"
import closeIcon from "../assets/close.svg"
import darkCloseIcon from "../assets/close-dark.svg"
import githubIcon from "../assets/github.svg"
import darkGithubIcon from "../assets/github-dark.svg"
import linkedinIcon from "../assets/linkedin.svg"
import darkLinkedinIcon from "../assets/linkedin-dark.svg"





function Navbar({ toggleLightMode, lightMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const linkClasses = (to) => `light:text-[#4b5563] group hover:scale-110 transition-transform duration-300 md:text-lg lg:text-xl ${location.pathname === to ? "text-white underline decoration-[#3ecaff] underline-offset-10" : "text-[#abb2bf] hover:text-white light:hover:text-[#1e2228] hover:underline decoration-[#3ecaff] underline-offset-10"
    }`;

  return (
    <>
      <nav className="w-full font-fira fixed top-0 bg-[#282c33] flex justify-between px-[20px] py-[20px] light:bg-[#f3f6fa] relative z-20">
        <div className="flex">
          <img
            className="w-[30px] h-[30px] md:hidden cursor-pointer hover:scale-110  transition-transform duration-300"
            src={lightMode ? darkHamburgerIcon : hamburgerIcon}
            alt="hamburger"
            onClick={toggleNavbar}
          />
          <Link to="/">
            <h1 className="text-2xl font-medium ml-3 text-white light:text-[#1e2228]">AaronZhang<span className="text-[#7ec0ee] light:text-[#5aa0cc]">./</span></h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[#abb2bf] pr-[20px]">
          <Link to="/" className={linkClasses("/")}>
            <span><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>home</span>
          </Link>

          <Link to="/projects" className={linkClasses("/projects")}>
            <span><span className="text-[#7ec0ee]  group-hover:text-[#3ecaff]">//</span>projects</span>
          </Link>

          <Link to="/about-me" className={linkClasses("/about-me")}>
            <span><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>about-me</span>
          </Link>

          <Link to="/contact" className={linkClasses("/contact")}>
            <span><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>contact</span>
          </Link>

          {/* Light/Dark Toggle */}
          <img
            className="w-[30px] h-[30px]"
            src={lightMode ? moonIcon : sunIcon}
            alt="light-dark"
            onClick={toggleLightMode}
          />
        </div>

        <img
          className="w-[30px] h-[30px] md:hidden"
          src={lightMode ? moonIcon : sunIcon}
          alt="light-dark"
          onClick={toggleLightMode}
        />
      </nav>
      <div className="md:hidden">
        {/* OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ease-out ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={toggleNavbar}
        />

        {/* SIDE MENU */}
        <div className={`fixed top-0 left-0 h-full bg-[#282c33] light:bg-[#f3f6fa] h-[50px] w-[80%] z-40 flex flex-col p-5 text-[#abb2bf] transform transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <img
            className="w-[20px] h-[20px] mb-10 cursor-pointer hover:scale-110 transition-transform duration-200"
            src={lightMode ? darkCloseIcon : closeIcon}
            alt="close"
            onClick={toggleNavbar}
          />
          <Link className="mb-5 group" to="/" onClick={toggleNavbar}>
            <span className="inline-block hover:scale-110 cursor-pointer hover:text-white light:hover:text-[#1e2228] transition-transform duration-200 light:text-[#4b5563]"><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>home</span>
          </Link>
          <Link className="mb-5 group" to="/projects" onClick={toggleNavbar}>
            <span className="inline-block hover:scale-110 cursor-pointer hover:text-white light:hover:text-[#1e2228] transition-transform duration-200 light:text-[#4b5563]"><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>projects</span>
          </Link>
          <Link className="mb-5 group" to="/about-me" onClick={toggleNavbar}>
            <span className="inline-block hover:scale-110 cursor-pointer hover:text-white light:hover:text-[#1e2228] transition-transform duration-200 light:text-[#4b5563]"><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>about-me</span>
          </Link>
          <Link className="mb-15 group" to="/contact" onClick={toggleNavbar}>
            <span className="inline-block hover:scale-110 cursor-pointer hover:text-white light:hover:text-[#1e2228] transition-transform duration-200 light:text-[#4b5563]"><span className="text-[#7ec0ee] group-hover:text-[#3ecaff]">//</span>contact</span>
          </Link>
          <div className="flex w-[60%] justify-between">
            <a className="w-[40px] h-[40px] hover:scale-110 cursor-pointer transition-transform duration-200" href="https://github.com/JohnSummit3rd">
              <img src={lightMode ? darkGithubIcon : githubIcon} alt="github" />
            </a>
            <a className="w-[40px] h-[40px] text-yellow-500 hover:scale-110 cursor-pointer transition-transform duration-200" href="https://www.linkedin.com/in/aaron-zhang4812/">
              <img src={lightMode ? darkLinkedinIcon : linkedinIcon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
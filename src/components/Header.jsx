import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-dusk/80 to-navy/80 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto flex max-w-368 items-center justify-between py-5 px-4 md:px-6 lg:px-8">
          <div className="text-lg font-bold text-sage">Chien.Dev</div>

          <nav className="hidden md:flex gap-10 text-sage">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sage hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <svg
              className={`w-7 h-7 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-navy backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top z-50 ${
            isOpen
              ? "opacity-100 scale-y-100 translate-y-0 visible"
              : "opacity-0 scale-y-95 -translate-y-2 invisible"
          }`}
        >
          <nav className="flex flex-col py-6 space-y-2 text-sage items-center">
            {["About", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => setIsOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="group flex items-center py-3 text-lg font-medium transition-all duration-300 hover:text-white hover:bg-white/5 rounded-lg hover:translate-x-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sage mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
    </>
  );
};

export default Header;

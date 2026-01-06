import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = ["About", "Skills", "Projects", "Blogs", "Contact"];

  const handleNavClick = (e, item) => {
    const targetId = item.toLowerCase();
    
    // If in home page, smooth animation
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    } 

    // If in another page, move to id
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-dusk/80 to-navy/80 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto flex max-w-368 items-center justify-between py-5 px-4 md:px-6 lg:px-8">
          <Link to="/" className="text-lg font-bold text-sage cursor-pointer">
            Chien.Dev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-sage">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-sage">
            <svg className={`w-7 h-7 transition-transform ${isOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-navy transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <nav className="flex flex-col py-6 space-y-2 text-sage items-center">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="py-3 text-lg hover:text-white"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />}
    </>
  );
};

export default Header;
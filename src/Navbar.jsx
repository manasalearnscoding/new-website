import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./assets/Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 50));
      setShowBackToTop(currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const menuItems = [
    { id: "section1", label: "About Me" },
    { id: "section2", label: "Skills" },
    // { id: "section3", label: "Projects" },
  ];

  return (
    <>
      <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {Array(3).fill(<div className="line"></div>)}
        </div>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={800}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Navbar;
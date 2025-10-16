import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <nav className="site-nav">
        <div className="nav-left">
          <h1 className="nav-logo">
            <span className="flip">FLIP</span>
            <span className="studio">STUDIO</span>
          </h1>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`overlay-menu ${open ? "show" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l} onClick={() => setOpen(false)}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

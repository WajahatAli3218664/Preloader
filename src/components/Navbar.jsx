import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
            {links.map((l) => {
              const path = l === 'Home' ? '/' : `/${l.toLowerCase()}`;
              return (
                <li key={l}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>
                    {l}
                  </NavLink>
                </li>
              );
            })}
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
          {links.map((l) => {
            const path = l === 'Home' ? '/' : `/${l.toLowerCase()}`;
            return (
              <li key={l} onClick={() => setOpen(false)}>
                <NavLink to={path}>{l}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
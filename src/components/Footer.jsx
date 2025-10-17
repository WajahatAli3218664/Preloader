import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container foot-grid footer-inner">
        <div className="brand">
          <div className="logo-line">
            <span className="flip">FLIP</span>
            <span className="studio">STUDIO</span>
          </div>
          <p className="muted">Design-led motion, product and frontend engineering.</p>
        </div>

        <div className="links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <p><a href="mailto:hello@flipstudio.example">hello@flipstudio.example</a></p>
          <p className="muted">We usually reply within 48 hours.</p>
        </div>
      </div>

      <div className="foot-bottom container">
        <div>© {new Date().getFullYear()} FlipStudio</div>
        <div className="small muted">Built with care · Accessibility & performance focused</div>
      </div>
    </footer>
  );
}

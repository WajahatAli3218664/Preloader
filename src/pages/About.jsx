import React from 'react';
import './About.css';

function Person({ name, role, bio }) {
  return (
    <div className="team-person">
      <div className="avatar" aria-hidden="true">{name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
      <div>
        <strong>{name}</strong>
        <div className="role">{role}</div>
        <p className="person-bio">{bio}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <div className="container">
          <div className="eyebrow">Who we are</div>
          <h1 className="hero-title">FlipStudio — Design, Motion & Product</h1>
          <p className="hero-lead">We help ambitious teams turn ideas into polished, usable products with delightful motion and strong brand voice.</p>
          <div className="hero-cta">
            <a className="btn primary" href="mailto:hello@flipstudio.example">Start a conversation</a>
            <a className="btn ghost" href="/">See our work</a>
          </div>
        </div>
      </header>

      <section className="container about-overview two-col">
        <div className="overview-left">
          <h2>Our mission</h2>
          <p>We marry research, motion, and engineering to craft products that people remember and enjoy using. Our work focuses on clarity, performance, and human moments.</p>

          <div className="how-we-work">
            <h2>How we work</h2>
            <ol className="process">
              <li><strong>Discover</strong> — research and align on goals.</li>
              <li><strong>Design</strong> — craft UI, motion, and interaction patterns.</li>
              <li><strong>Build</strong> — ship fast, iterate from feedback.</li>
            </ol>
          </div>
        </div>

        <aside className="overview-right">
          <h2>What we do</h2>
          <div className="services-grid">
            <div className="service">
              <h3>Product Design</h3>
              <p>End-to-end product design from discovery to high-fidelity prototypes.</p>
            </div>
            <div className="service">
              <h3>Motion Design</h3>
              <p>Micro-interactions and motion systems that improve clarity and delight.</p>
            </div>
            <div className="service">
              <h3>Frontend Engineering</h3>
              <p>Performance-first implementations with a focus on accessibility and maintainability.</p>
            </div>
            <div className="service">
              <h3>Brand & Identity</h3>
              <p>Logo, typography, and systems that scale across touchpoints.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="container timeline">
        <h2>Our story</h2>
        <ul>
          <li><strong>2018</strong> — Founded as a two-person creative studio.</li>
          <li><strong>2020</strong> — Expanded to include motion specialists and engineers.</li>
          <li><strong>2023</strong> — Focused on product work and launched our suite of design tokens.</li>
        </ul>
      </section>

      <section className="container team">
        <h2>Meet the team</h2>
        <div className="team-grid">
          <Person name="Amina Khan" role="Founder, Product" bio="Leads product strategy and design systems." />
          <Person name="Rahul Verma" role="Motion Lead" bio="Crafts motion systems and UX animation." />
          <Person name="Sara Liu" role="Frontend Engineer" bio="Builds accessible, high-performance frontends." />
        </div>
      </section>

      <section className="container cta-band">
        <div className="cta-inner">
          <h3>Ready to work together?</h3>
          <p>We're available for product work, motion systems and design partnerships.</p>
          <a className="btn primary" href="mailto:hello@flipstudio.example">Get in touch</a>
        </div>
      </section>

    </main>
  );
}


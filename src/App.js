import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import "./components/Preloader.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Parallax mouse move for hero
  // removed experimental mouse-parallax (caused jitter). Kept scroll-reveal only.

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);


  return (
    <Router>
      {!loaded && <Preloader />}

      <div className={`site ${loaded ? "visible" : "hidden"}`}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <div className="hero-animated">
                  <h1 className="main-logo">
                    <span className="flip">FLIP</span>
                    <span className="studio">STUDIO</span>
                  </h1>

                  <div className="hero-lines">
                    {['Design with intent', 'Motion that guides', 'Code that performs'].map((t, i) => (
                      <p key={t} className="hero-line" data-reveal style={{ '--reveal-delay': `${i * 120}ms` }}>{t}</p>
                    ))}
                  </div>
                </div>

                <section className="home-services" style={{ marginTop: 28 }}>
                  <h2>Services</h2>
                  <div className="service-row">
                    {[
                      { title: 'Product Design', desc: 'Research-driven interfaces and design systems.' },
                      { title: 'Motion & Animation', desc: 'Micro-interactions and system motion.' },
                      { title: 'Frontend Engineering', desc: 'Performant, accessible production code.' },
                    ].map((s, i) => (
                      <div key={s.title} className="service service-card" data-reveal style={{ '--reveal-delay': `${i * 140}ms` }}>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="home-feature" style={{ marginTop: 36 }}>
                  <div className="featured-card" data-reveal style={{ '--reveal-delay': '420ms' }}>
                    <div className="featured-thumb" aria-hidden></div>
                    <div className="featured-meta">
                      <h3>Featured project — Aurora Dashboard</h3>
                      <p className="intro-text">A data-rich product that combines charts, motion and an editorial approach to help teams act on insights faster.</p>
                      <a className="btn ghost" href="/projects">View case study</a>
                    </div>
                  </div>
                </section>

                <section className="trusted" style={{ marginTop: 46 }}>
                  <h3 data-reveal style={{ '--reveal-delay': '560ms' }}>Trusted by</h3>
                  <div className="logos" data-reveal style={{ '--reveal-delay': '680ms' }}>
                    {['Astra', 'Orbit', 'Pulse', 'Nova'].map((n) => (
                      <div className="logo-pill" key={n} aria-hidden>{n}</div>
                    ))}
                  </div>
                </section>

                <section className="testimonials" style={{ marginTop: 46 }}>
                  <h3 data-reveal style={{ '--reveal-delay': '760ms' }}>What clients say</h3>
                  <div className="test-grid">
                    {[{
                      quote: 'FlipStudio helped us reframe our dashboard — clarity + speed.',
                      who: 'Product Lead, Astra'
                    },{
                      quote: 'Their motion system made the app feel alive and obvious.',
                      who: 'Design Director, Orbit'
                    },{
                      quote: 'Fast, thoughtful engineers and designers — highly recommend.',
                      who: 'CTO, Nova'
                    }].map((t, i) => (
                      <blockquote className="testi" key={i} data-reveal style={{ '--reveal-delay': `${820 + i*120}ms` }}>
                        <p>“{t.quote}”</p>
                        <footer>- {t.who}</footer>
                      </blockquote>
                    ))}
                  </div>
                </section>

                <div style={{ marginTop: 28 }}>
                  <a className="btn primary" href="/projects">See full projects</a>
                </div>
              </main>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  <Footer />
    </Router>
  );
}

export default App;
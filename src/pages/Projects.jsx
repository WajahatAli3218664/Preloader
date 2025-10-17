import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: 'Aurora Dashboard', tag: 'Product Design', desc: 'A data-forward dashboard with motion-first interactions.', tech: 'React, D3, Typescript', takeaways: 'Improved data density and discoverability.' },
  { id: 2, title: 'Nova Shop', tag: 'E-commerce', desc: 'A performant storefront with expressive micro-interactions.', tech: 'React, Next.js, Stripe', takeaways: 'Reduced cart abandonment by 18%.' },
  { id: 3, title: 'Pulse Player', tag: 'Mobile', desc: 'An audio-first mobile experience with delightful gestures.', tech: 'React Native, Lottie', takeaways: '30% increase in weekly retention.' },
  { id: 4, title: 'Atlas CMS', tag: 'Platform', desc: 'A lightweight CMS with fast inline editing and motion previews.', tech: 'Node, React, GraphQL', takeaways: 'Streamlined editorial workflows.' },
  { id: 5, title: 'Beacon Landing', tag: 'Branding', desc: 'A conversion-focused landing page with motion-led storytelling.', tech: 'HTML, CSS, JS', takeaways: 'Peak conversion lift +12%.' },
];

export default function Projects() {
  return (
    <main className="projects-page container">
      <header className="projects-hero">
        <h1>Selected projects</h1>
        <p className="lead">Case studies and glimpses of work — focused on design, motion and performance.</p>
      </header>

      <section className="projects-grid">
        {projects.map((p, i) => (
          <article key={p.id} className="project-card" style={{ ['--delay']: `${i * 120}ms` }}>
            <div className="thumb" aria-hidden="true">{p.title.split(' ').map(w => w[0]).join('')}</div>
            <div className="meta">
              <div className="tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.tech && <div className="tech">Tech: {p.tech}</div>}
              {p.takeaways && <div className="takeaway">{p.takeaways}</div>}
              <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>View case study</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

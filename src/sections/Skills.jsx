import React from 'react';
import { siPostgresql } from 'simple-icons/icons';
import { skills } from '../data/portfolioData';
import '../styles/Skills.css';

function renderSkillIcon(icon) {
  switch (icon) {
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label="PostgreSQL">
          <path fill={`#${siPostgresql.hex}`} d={siPostgresql.path} />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="#4479A1">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.5-6-2v-1.77c1.47.78 3.61 1.27 6 1.27s4.53-.49 6-1.27V17c0 .5-2.13 2-6 2zm0-4.5c-3.87 0-6-1.5-6-2v-1.77c1.47.78 3.61 1.27 6 1.27s4.53-.49 6-1.27V12.5c0 .5-2.13 2-6 2z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="#24292e">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case 'python':
      return <img src="/icons/python-original.svg" alt="Python logo" />;
    case 'excel':
      return (
        <svg viewBox="0 0 48 48">
          <path fill="#21A366" d="M26 5h17a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H26z" />
          <path fill="#107C41" d="M4 10.5 26 6v36L4 37.5z" />
          <path fill="#33C481" d="M26 13h19v7H26zm0 15h19v7H26z" />
          <path
            fill="#fff"
            d="m9.2 17 4.3-.3 2.8 5.3 2.8-6 4.3-.4-4.9 9 5 9.1-4.6-.3-2.9-5.8-3 5.4-4.5-.3 5.2-8.3z"
          />
        </svg>
      );
    case 'powerbi':
      return <img src="/icons/powerbi.svg" alt="Power BI logo" />;
    case 'tableau':
      return <img src="/icons/tableau.svg" alt="Tableau logo" />;
    case 'presentation':
      return (
        <svg viewBox="0 0 48 48">
          <rect x="5" y="7" width="38" height="27" rx="3" fill="#559A94" />
          <path d="M12 14h24v13H12z" fill="#fff" />
          <path d="M16 23h4v2h-4zm0-4h4v2h-4zm7 2h3v6h-3zm5-4h3v10h-3z" fill="#559A94" />
          <path d="M24 34v7m-7 0h14" fill="none" stroke="#29445F" strokeLinecap="round" strokeWidth="3" />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--muted-teal)" strokeWidth="1.8">
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 11h1m4 0h1m-6 4h1m4 0h1" />
        </svg>
      );
    case 'analysis':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--muted-teal)" strokeWidth="1.8">
          <path d="M3 19V5m0 14h18M7 15l4-5 3 2 5-7" />
        </svg>
      );
    case 'storytelling':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--muted-teal)" strokeWidth="1.8">
          <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case 'modeling':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--muted-teal)" strokeWidth="1.8">
          <path d="M6 3h12v18H6zM9 7h6M9 11h1m2 0h1m2 0h1M9 15h1m2 0h1m2 0h1" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Skills &amp; tools</div>
            <h2>A toolkit that keeps growing.</h2>
          </div>
          <p>The tools I use to query, analyse and communicate data.</p>
        </div>

        <div className="skill-groups">
          {skills.map((group, idx) => (
            <article key={idx} className="skill-group">
              <h3>{group.group}</h3>
              <div className="skill-items">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-item">
                    <span className="logo-box">{renderSkillIcon(item.icon)}</span>
                    <div className="skill-info">
                      <b>{item.name}</b>
                      <small>{item.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

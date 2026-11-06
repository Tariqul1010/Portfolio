import React, { useState, useRef } from 'react';
import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeMedia, setActiveMedia] = useState(null); // { type: 'image' | 'chart', src, alt }
  const dialogRef = useRef(null);

  const openLightbox = (media) => {
    setActiveMedia(media);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeLightbox = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setActiveMedia(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      closeLightbox();
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category.split(' ').includes(filter);
  });

  const completedProjects = filteredProjects.filter((p) => p.status === 'done');

  const renderSqlChart = () => (
    <svg
      className="pviz"
      viewBox="0 0 560 200"
      role="img"
      aria-label="Chart preview recreated from the project data"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="Inter, sans-serif"
    >
      <text x="8" y="14" fontSize="9" fill="#587995" textAnchor="start" fontWeight="700">
        SALES BY PRODUCT
      </text>
      <text x="8" y="44" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Laptop
      </text>
      <rect x="70" y="34" width="90" height="13" rx="3" fill="#E7F0ED" />
      <rect x="70" y="34" width="90.0" height="13" rx="3" fill="#559A94" />
      <text x="165" y="44.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        6,000
      </text>

      <text x="8" y="69" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Smartphone
      </text>
      <rect x="70" y="59" width="90" height="13" rx="3" fill="#E7F0ED" />
      <rect x="70" y="59" width="84.0" height="13" rx="3" fill="#559A94" />
      <text x="165" y="69.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        5,600
      </text>

      <text x="8" y="94" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Tablet
      </text>
      <rect x="70" y="84" width="90" height="13" rx="3" fill="#E7F0ED" />
      <rect x="70" y="84" width="36.0" height="13" rx="3" fill="#559A94" />
      <text x="165" y="94.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        2,400
      </text>

      <text x="8" y="119" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Monitor
      </text>
      <rect x="70" y="109" width="90" height="13" rx="3" fill="#E7F0ED" />
      <rect x="70" y="109" width="33.8" height="13" rx="3" fill="#559A94" />
      <text x="165" y="119.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        2,250
      </text>

      <text x="8" y="144" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Headphones
      </text>
      <rect x="70" y="134" width="90" height="13" rx="3" fill="#E7F0ED" />
      <rect x="70" y="134" width="10.5" height="13" rx="3" fill="#559A94" />
      <text x="165" y="144.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        700
      </text>

      <text x="225" y="14" fontSize="9" fill="#587995" textAnchor="start" fontWeight="700">
        SALES BY REGION
      </text>
      <text x="225" y="44" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        South
      </text>
      <rect x="287" y="34" width="70" height="13" rx="3" fill="#E7F0ED" />
      <rect x="287" y="34" width="70.0" height="13" rx="3" fill="#587995" />
      <text x="362" y="44.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        5,300
      </text>

      <text x="225" y="69" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        West
      </text>
      <rect x="287" y="59" width="70" height="13" rx="3" fill="#E7F0ED" />
      <rect x="287" y="59" width="59.4" height="13" rx="3" fill="#587995" />
      <text x="362" y="69.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        4,500
      </text>

      <text x="225" y="94" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        East
      </text>
      <rect x="287" y="84" width="70" height="13" rx="3" fill="#E7F0ED" />
      <rect x="287" y="84" width="54.8" height="13" rx="3" fill="#587995" />
      <text x="362" y="94.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        4,150
      </text>

      <text x="225" y="119" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        North
      </text>
      <rect x="287" y="109" width="70" height="13" rx="3" fill="#E7F0ED" />
      <rect x="287" y="109" width="39.6" height="13" rx="3" fill="#587995" />
      <text x="362" y="119.5" fontSize="10" fill="#29445F" textAnchor="start" fontWeight="700">
        3,000
      </text>

      <text x="425" y="14" fontSize="9" fill="#587995" textAnchor="start" fontWeight="700">
        CATEGORY SPLIT
      </text>
      <circle cx="480" cy="95" r="38" fill="none" stroke="#E7F0ED" strokeWidth="16" />
      <circle
        cx="480"
        cy="95"
        r="38"
        fill="none"
        stroke="#CDA65B"
        strokeWidth="16"
        strokeDasharray="228.9 9.9"
        strokeDashoffset="0.0"
        transform="rotate(-90 480 95)"
      />
      <circle
        cx="480"
        cy="95"
        r="38"
        fill="none"
        stroke="#587995"
        strokeWidth="16"
        strokeDasharray="9.9 228.9"
        strokeDashoffset="-228.9"
        transform="rotate(-90 480 95)"
      />
      <rect x="425" y="160" width="9" height="9" rx="2" fill="#CDA65B" />
      <text x="439" y="168" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Electronics 16,250
      </text>
      <rect x="425" y="178" width="9" height="9" rx="2" fill="#587995" />
      <text x="439" y="186" fontSize="10.5" fill="#29445F" textAnchor="start" fontWeight="500">
        Accessories 700
      </text>
    </svg>
  );

  return (
    <section className="section projects-section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Portfolio projects</div>
            <h2>Proof through practical work.</h2>
          </div>
          <p>
            Four completed analytics projects across Power BI, Excel and SQL, with the project files
            available to download.
          </p>
        </div>

        <div className="filters">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            aria-pressed={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All projects
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'sql' ? 'active' : ''}`}
            aria-pressed={filter === 'sql'}
            onClick={() => setFilter('sql')}
          >
            SQL
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'bi' ? 'active' : ''}`}
            aria-pressed={filter === 'bi'}
            onClick={() => setFilter('bi')}
          >
            Power BI
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'excel' ? 'active' : ''}`}
            aria-pressed={filter === 'excel'}
            onClick={() => setFilter('excel')}
          >
            Excel
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'finance' ? 'active' : ''}`}
            aria-pressed={filter === 'finance'}
            onClick={() => setFilter('finance')}
          >
            Finance
          </button>
        </div>

        <div className="project-grid">
          {completedProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className={`project-cover ${project.category === 'bi' && project.id === 'sales-analytics' ? 'alt' : ''}`}>
                <span className="coverlabel">{project.label}</span>

                {project.image ? (
                  <button
                    type="button"
                    className="project-preview"
                    aria-label={`View ${project.title} screenshot full size`}
                    onClick={() =>
                      openLightbox({
                        type: 'image',
                        src: project.image,
                        alt: project.imageAlt || project.title,
                      })
                    }
                  >
                    <img src={project.image} alt={project.imageAlt || project.title} loading="lazy" />
                    <span className="zoom-badge">Click to enlarge</span>
                  </button>
                ) : project.isChart ? (
                  <button
                    type="button"
                    className="project-preview"
                    aria-label="Click to enlarge chart preview"
                    onClick={() =>
                      openLightbox({
                        type: 'chart',
                        content: renderSqlChart(),
                        alt: 'Sales Database Chart preview',
                      })
                    }
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    {renderSqlChart()}
                    <span className="zoom-badge">Click to enlarge</span>
                  </button>
                ) : null}

                <strong>{project.shortTitle || project.title}</strong>
              </div>

              <div className="project-body">
                <div className="project-content">
                  <span className="project-status">{project.statusLabel}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.question && (
                    <div className="pblock">
                      <b>Question</b>
                      <p>{project.question}</p>
                    </div>
                  )}

                  {project.built && (
                    <div className="pblock">
                      <b>What I built</b>
                      <ul>
                        {project.built.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.method && (
                    <div className="pblock">
                      <b>Method</b>
                      <p>{project.method}</p>
                    </div>
                  )}

                  {project.findings && (
                    <div className="pblock">
                      <b>{project.id === 'sales-sql' ? 'Findings' : 'Dataset findings'}</b>
                      <p>{project.findings}</p>
                    </div>
                  )}

                  {project.implication && (
                    <div className="pblock">
                      <b>Business implication</b>
                      <p>{project.implication}</p>
                    </div>
                  )}
                </div>

                <div className="project-footer">
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.download && (
                      <a className="btn btn-primary" href={project.download.href} download>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
                        </svg>
                        {project.download.label}
                      </a>
                    )}
                    {project.github && (
                      <a
                        className="github-link"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>

      {/* Lightbox Dialog */}
      <dialog
        ref={dialogRef}
        className="lightbox-dialog"
        onClick={handleBackdropClick}
        onClose={closeLightbox}
      >
        <div className="lightbox-content">
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close preview"
          >
            ✕
          </button>
          {activeMedia?.type === 'image' && (
            <img src={activeMedia.src} alt={activeMedia.alt} />
          )}
          {activeMedia?.type === 'chart' && activeMedia.content}
        </div>
      </dialog>
    </section>
  );
}

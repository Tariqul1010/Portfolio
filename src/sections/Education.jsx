import React from 'react';
import { education } from '../data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  const currentEdu = education.find((e) => e.type === 'university');
  const pastEdu = education.filter((e) => e.type !== 'university');

  return (
    <section className="section education-section" id="education">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Education</div>
            <h2>Academic journey.</h2>
          </div>
          <p>
            From higher secondary school to a finance degree, complemented by hands-on analytics
            learning.
          </p>
        </div>

        {currentEdu && (
          <>
            <div className="edu-label">Currently studying</div>
            <article className="edu-card">
              <div className="edu-side">
                <div className="uni-logo">
                  <img src={currentEdu.logo} alt={currentEdu.logoAlt} />
                </div>
                <span className="edu-status">{currentEdu.status}</span>
              </div>

              <div className="edu-main">
                <div className="edu-kicker">{currentEdu.kicker}</div>
                <h3>{currentEdu.title}</h3>
                <p className="edu-sub">
                  <b>{currentEdu.dept}</b>
                </p>
                <p className="edu-sub">{currentEdu.institution}</p>

                <div className="edu-facts">
                  {currentEdu.facts.map((fact, i) => (
                    <div key={i} className="edu-fact-box">
                      <small>{fact.label}</small>
                      <b>{fact.value}</b>
                    </div>
                  ))}
                </div>

                {currentEdu.timeline && (
                  <div className="timeline">
                    {currentEdu.timeline.map((item, i) => (
                      <div key={i} className="timeline-item">
                        <i className="timeline-dot"></i>
                        <b>{item.year}</b>
                        <span>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {currentEdu.websiteHref && (
                  <div className="edu-actions">
                    <a
                      className="btn-light"
                      href={currentEdu.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 3h7v7M10 14 21 3M19 13v7H4V5h7" />
                      </svg>
                      {currentEdu.websiteLabel}
                    </a>
                  </div>
                )}
              </div>
            </article>
          </>
        )}

        {pastEdu.length > 0 && (
          <>
            <div className="edu-label">Previous education</div>
            {pastEdu.map((edu, idx) => (
              <article key={idx} className="edu-card">
                <div className="edu-side light">
                  <div className="uni-logo">
                    <img src={edu.logo} alt={edu.logoAlt} />
                  </div>
                  <span className="edu-status done">{edu.status}</span>
                </div>

                <div className="edu-main">
                  <div className="edu-kicker">{edu.kicker}</div>
                  <h3>{edu.title}</h3>
                  <p className="edu-sub">
                    <b>{edu.dept}</b>
                  </p>
                  <p className="edu-sub">{edu.institution}</p>

                  <div className="edu-facts">
                    {edu.facts.map((fact, i) => (
                      <div key={i} className="edu-fact-box">
                        <small>{fact.label}</small>
                        <b>{fact.value}</b>
                      </div>
                    ))}
                  </div>

                  {edu.websiteHref && (
                    <div className="edu-actions">
                      <a
                        className="btn-light"
                        href={edu.websiteHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M14 3h7v7M10 14 21 3M19 13v7H4V5h7" />
                        </svg>
                        {edu.websiteLabel}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

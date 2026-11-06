import React from 'react';
import '../styles/Resume.css';

export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Resume</div>
            <h2>Take my resume with you.</h2>
          </div>
          <p>
            A one-page summary of my education, skills, projects and certifications, free to
            download.
          </p>
        </div>

        <div className="resume-card">
          <div className="resume-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5M9 13h6M9 17h4" />
            </svg>
            <b>PDF</b>
          </div>

          <div className="resume-info">
            <h3>Md. Tariqul Islam — Resume</h3>
            <p>
              Finance &amp; Banking student · Excel · SQL · Power BI · Data cleaning · Dashboard
              design
            </p>

            <div className="resume-actions">
              <a
                className="btn btn-primary"
                href="/Tariqul_Islam_Resume.pdf"
                download="Tariqul_Islam_Resume.pdf"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
                </svg>
                Download Resume
              </a>
              <a
                className="btn btn-secondary"
                href="/Tariqul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

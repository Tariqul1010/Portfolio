import React from 'react';
import { socialLinks } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero({ showToast }) {
  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow hero-eyebrow">ACADEMIC &amp; ANALYTICS FOUNDATION</div>
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true"></span>
            <span>Aspiring Data Analyst | SQL &amp; PostgreSQL | Power BI</span>
          </div>

          <h1>
            Every number tells a story.
            <br />
            <span>I turn it into decisions that matter.</span>
          </h1>

          <p className="hero-copy">
            I’m a BBA student in Finance and Banking at Jashore University of Science and Technology,
            developing practical analytics skills with Excel, SQL, PostgreSQL and Power BI. I’m
            interested in using data to understand business performance and communicate useful
            insights.
          </p>

          <blockquote className="hero-quote">
            &quot;I investigate complex questions, model structured datasets, and deliver transparent
            reporting that helps decision-makers move from raw figures to strategic clarity.&quot;
          </blockquote>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore my projects <span>↘</span>
            </a>
            <a
              className="btn btn-secondary"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ verticalAlign: 'middle' }}
              >
                <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
              </svg>
              Download resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/md-tariqul-islam-34990b289"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </a>

            <a
              className="social-link"
              href="https://github.com/Tariqul1010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
              GitHub
            </a>

            <a
              className="social-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tariqul.islam.analytics@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Email
            </a>
          </div>
        </div>

        <div className="profile-stage">
          <div className="portrait-wrap">
            <div className="halo"></div>
            <div className="portrait">
              <div className="portrait-inner">
                <img src="/Tariqul.jpg" alt="Portrait of Md. Tariqul Islam" />
              </div>
            </div>

            <div className="float-card a">
              <b>SQL + PostgreSQL</b>
              <small>Query · Analyze · Explain</small>
            </div>

            <div className="float-card b">
              <b>Business Insights</b>
              <small>From data to decisions</small>
              <div className="minibars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

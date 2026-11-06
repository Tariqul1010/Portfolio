import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">About me</div>
            <h2>
              Business context.
              <br />
              Analytical mindset.
            </h2>
          </div>
          <p>
            A growing analytics portfolio built around curiosity, careful analysis and communicating
            findings in a way people can use.
          </p>
        </div>

        <div className="about-grid">
          <aside className="about-card">
            <div>
              <div className="about-card-eyebrow">My direction</div>
              <h3>Connecting finance knowledge with data skills.</h3>
              <p>
                My Finance and Banking studies help me think about business performance, costs,
                risk and financial decisions. I’m adding practical data tools to investigate
                questions with evidence rather than assumptions.
              </p>
            </div>
            <div className="focusline">
              <strong>Focus</strong>
              <span>Data Analyst · SQL Analyst · Business Intelligence</span>
            </div>
          </aside>

          <div className="about-text">
            <h3>How I approach a problem</h3>
            <p>
              I start by understanding the business question, checking data quality, exploring
              patterns, and presenting the results clearly. I’m building my skills through coursework
              and hands-on portfolio projects, with an emphasis on transparent methods and useful
              outcomes.
            </p>
            <p>
              My goal is to grow into an analyst who can combine finance and business understanding
              with SQL querying, spreadsheet analysis and dashboard storytelling.
            </p>

            <div className="principles">
              <div className="principle">
                <b>Business-first</b>
                <span>Define the question before choosing the tool.</span>
              </div>
              <div className="principle">
                <b>Evidence-led</b>
                <span>Keep conclusions grounded in data.</span>
              </div>
              <div className="principle">
                <b>Clear storytelling</b>
                <span>Explain what the numbers mean.</span>
              </div>
              <div className="principle">
                <b>Always learning</b>
                <span>Improve through practice and feedback.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

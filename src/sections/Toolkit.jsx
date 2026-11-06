import React from 'react';
import { siPostgresql } from 'simple-icons/icons';
import '../styles/Toolkit.css';

export default function Toolkit() {
  return (
    <div className="strip">
      <div className="wrap stripinner">
        <span className="striplabel">My current toolkit</span>
        <div className="toolchips">
          {/* Excel */}
          <span className="chip">
            <svg viewBox="0 0 48 48" role="img" aria-label="Microsoft Excel">
              <path fill="#21A366" d="M26 5h17a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H26z" />
              <path fill="#107C41" d="M4 10.5 26 6v36L4 37.5z" />
              <path fill="#33C481" d="M26 13h19v7H26zm0 15h19v7H26z" />
              <path
                fill="#fff"
                d="m9.2 17 4.3-.3 2.8 5.3 2.8-6 4.3-.4-4.9 9 5 9.1-4.6-.3-2.9-5.8-3 5.4-4.5-.3 5.2-8.3z"
              />
            </svg>
            Excel
          </span>

          {/* SQL */}
          <span className="chip">
            <svg viewBox="0 0 24 24" fill="#4479A1">
              <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.5-6-2v-1.77c1.47.78 3.61 1.27 6 1.27s4.53-.49 6-1.27V17c0 .5-2.13 2-6 2zm0-4.5c-3.87 0-6-1.5-6-2v-1.77c1.47.78 3.61 1.27 6 1.27s4.53-.49 6-1.27V12.5c0 .5-2.13 2-6 2z" />
            </svg>
            SQL
          </span>

          {/* PostgreSQL */}
          <span className="chip">
            <svg viewBox="0 0 24 24" role="img" aria-label="PostgreSQL">
              <path fill={`#${siPostgresql.hex}`} d={siPostgresql.path} />
            </svg>
            PostgreSQL
          </span>

          {/* Power BI */}
          <span className="chip">
            <img src="/icons/powerbi.svg" alt="Power BI logo" />
            Power BI
          </span>

          {/* GitHub */}
          <span className="chip">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            GitHub
          </span>

          {/* Python */}
          <span className="chip">
            <img src="/icons/python-original.svg" alt="Python logo" />
            Python
          </span>

          {/* Tableau */}
          <span className="chip">
            <img src="/icons/tableau.svg" alt="Tableau logo" />
            Tableau
          </span>
        </div>
      </div>
    </div>
  );
}

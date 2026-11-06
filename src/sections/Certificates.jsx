import React, { useState, useRef } from 'react';
import { certificates } from '../data/portfolioData';
import '../styles/Certificates.css';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const dialogRef = useRef(null);

  const openLightbox = (cert) => {
    setActiveCert(cert);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeLightbox = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setActiveCert(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      closeLightbox();
    }
  };

  return (
    <section className="section cert-section" id="certificates">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Certificates &amp; credentials</div>
            <h2>Learning, on record.</h2>
          </div>
          <p>
            Workshops and programmes that have strengthened my skills in Excel, finance and
            fintech.
          </p>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <article key={cert.id} className="cert-card">
              <button
                type="button"
                className="cert-thumb"
                aria-label={`View ${cert.title} in full`}
                onClick={() => openLightbox(cert)}
              >
                <img src={cert.thumb} alt={cert.thumbAlt} loading="lazy" />
                <span className="cert-zoom">View full certificate</span>
              </button>

              <div className="cert-body">
                <span className="cert-date">{cert.date}</span>
                <h3>{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                <p>{cert.description}</p>

                <div className="cert-tags">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

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
            aria-label="Close certificate preview"
          >
            ✕
          </button>
          {activeCert && (
            <img src={activeCert.thumb} alt={activeCert.thumbAlt} />
          )}
        </div>
      </dialog>
    </section>
  );
}

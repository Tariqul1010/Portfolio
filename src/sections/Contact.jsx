import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../data/portfolioData';
import '../styles/Contact.css';

export default function Contact({ showToast }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (isEmailCopied) return;

    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setIsEmailCopied(true);
      toast.success('Email address copied to clipboard.', { duration: 3000 });
    } catch (error) {
      console.error('Could not copy email address:', error);
      toast.error('Could not copy email address. Please copy it manually.');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Let’s connect</div>
          <h2>
            Curious minds.
            <br />
            Useful questions.
            <br />
            Better insights.
          </h2>
          <p>
            I’m open to connecting with analytics learners, professionals and teams. Feel free to reach
            out about data projects, SQL, business intelligence or learning opportunities.
          </p>

          <div className="contact-actions">
            <button
              type="button"
              className="copy-btn"
              onClick={handleCopyEmail}
              disabled={isEmailCopied}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {isEmailCopied ? (
                  <path d="m5 12 4 4L19 6" />
                ) : (
                  <>
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
                  </>
                )}
              </svg>
              {isEmailCopied ? 'Copied' : 'Copy email address'}
            </button>

            <a
              className="whatsapp-btn"
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
              {contactInfo.whatsappDisplay}
            </a>
          </div>
        </div>

        <aside className="contact-card">
          <h3>Professional profiles</h3>

          <a
            className="contact-link"
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-logo-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#24292e">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </span>
            <span>
              <b>LinkedIn</b>
              <br />
              <small style={{ color: '#afc4d4' }}>Connect professionally</small>
            </span>
            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            className="contact-link"
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-logo-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#24292e">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </span>
            <span>
              <b>GitHub</b>
              <br />
              <small style={{ color: '#afc4d4' }}>Explore repositories</small>
            </span>
            <span className="contact-link-arrow">↗</span>
          </a>

          <button
            type="button"
            className="contact-link"
            onClick={() => setIsModalOpen(true)}
            aria-haspopup="dialog"
          >
            <span className="contact-logo-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29445F" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span>
              <b>Email</b>
              <br />
              <small style={{ color: '#afc4d4' }}>Keep In Touch</small>
            </span>
            <span className="contact-link-arrow">↗</span>
          </button>

          <a className="contact-link" href={contactInfo.phone}>
            <span className="contact-logo-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29445F" strokeWidth="1.8">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
            </span>
            <span>
              <b>Cell Phone</b>
              <br />
              <small style={{ color: '#afc4d4' }}>{contactInfo.phoneDisplay}</small>
            </span>
            <span className="contact-link-arrow">↗</span>
          </a>
        </aside>
      </div>

      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

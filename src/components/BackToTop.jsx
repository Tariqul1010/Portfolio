import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top"
      style={{
        position: 'fixed',
        right: '22px',
        bottom: '22px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'var(--back-to-top-bg)',
        color: 'var(--back-to-top-fg)',
        border: '2px solid rgba(255, 255, 255, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-md)',
        zIndex: 90,
        transition: 'transform 0.2s, background-color 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--back-to-top-hover)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--back-to-top-bg)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      ↑
    </button>
  );
}

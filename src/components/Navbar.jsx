import React, { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolioData';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="nav">
      <div className="wrap navinner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brandmark">
            <img className="brand-avatar" src="/Tariqul.jpg" alt="Md. Tariqul Islam avatar" />
          </span>
          <span className="brand-text">
            <span className="brand-name">Md. Tariqul Islam</span>
            <span className="brand-sub">Finance × Data Analytics</span>
          </span>
        </a>

        <button
          className="menu-btn"
          id="menu"
          aria-expanded={menuOpen}
          aria-controls="navlinks"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`navlinks ${menuOpen ? 'open' : ''}`} id="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
              </svg>
            )}
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <a className="btn btn-primary" href="#contact" onClick={closeMenu}>
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

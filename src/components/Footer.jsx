import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {currentYear} Md. Tariqul Islam</span>
        <span>Built with curiosity, clarity &amp; evidence.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--slate-blue)',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: '999px',
        fontSize: '0.85rem',
        fontWeight: '600',
        boxShadow: 'var(--shadow-md)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: '1px solid var(--steel-blue)',
        transition: 'all 0.25s ease',
      }}
    >
      <span style={{ color: 'var(--muted-teal)' }}>✓</span>
      <span>{message}</span>
    </div>
  );
}

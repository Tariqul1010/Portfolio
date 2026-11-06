import React, { useRef, useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/portfolioData';

const contactToasterId = 'contact-form';
const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function ContactForm({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all fields before submitting.', { toasterId: contactToasterId });
      return;
    }

    const emailInput = e.currentTarget.elements.namedItem('email');
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      toast.error('Email sending is not configured yet. Please try again later.', {
        toasterId: contactToasterId,
      });
      console.error('EmailJS configuration is incomplete. Set the required VITE_EMAILJS_* variables.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          to_email: contactInfo.email,
          to_name: 'Tariqul Islam',
          from_name: name,
          from_email: email,
          reply_to: email,
          title: subject,
          subject,
          message,
        },
        { publicKey: emailJsConfig.publicKey },
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Your message was sent successfully!', {
        toasterId: contactToasterId,
      });
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      toast.error(
        `Message not sent: ${error?.text || error?.message || 'Email service request failed.'}`,
        { toasterId: contactToasterId },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      onClick={handleBackdropClick}
      onClose={handleClose}
      aria-labelledby="emailDialogTitle"
      style={{
        width: 'min(560px, calc(100% - 32px))',
        maxHeight: 'min(90vh, 760px)',
        overflow: 'auto',
        padding: '32px',
        border: '1px solid var(--steel-blue)',
        borderRadius: '16px',
        backgroundColor: 'var(--slate-blue)',
        color: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <Toaster toasterId={contactToasterId} position="top-center" />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '18px',
          marginBottom: '24px',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: '800',
              letterSpacing: '0.12em',
              color: 'var(--muted-teal)',
              textTransform: 'uppercase',
            }}
          >
            LETS CONNECT
          </span>
          <h2
            id="emailDialogTitle"
            style={{
              margin: '5px 0 0',
              fontSize: '1.6rem',
              color: '#ffffff',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            Send an email
          </h2>
        </div>
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close dialog"
          style={{
            display: 'grid',
            placeItems: 'center',
            width: '38px',
            height: '38px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '1.2rem',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div      >
        <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: '14px' }}>
          <div>
            <label
              htmlFor="visitorName"
              style={{ display: 'block', marginBottom: '6px', fontSize: '0.88rem', fontWeight: '600' }}
            >
              Name
            </label>
            <input
              id="visitorName"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Your name"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid var(--steel-blue)',
                borderRadius: '8px',
                backgroundColor: '#1b3046',
                color: '#ffffff',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="visitorEmail"
            style={{ display: 'block', marginBottom: '6px', fontSize: '0.88rem', fontWeight: '600' }}
          >
            Visitor Email
          </label>
          <input
            id="visitorEmail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="name@example.com"
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              border: '1px solid var(--steel-blue)',
              borderRadius: '8px',
              backgroundColor: '#1b3046',
              color: '#ffffff',
              fontSize: '0.95rem',
            }}
          />
        </div>

        <div>
          <label
            htmlFor="emailSubject"
            style={{ display: 'block', marginBottom: '6px', fontSize: '0.88rem', fontWeight: '600' }}
          >
            Subject
          </label>
          <input
            id="emailSubject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              border: '1px solid var(--steel-blue)',
              borderRadius: '8px',
              backgroundColor: '#1b3046',
              color: '#ffffff',
              fontSize: '0.95rem',
            }}
          />
        </div>

        <div>
          <label
            htmlFor="emailMessage"
            style={{ display: 'block', marginBottom: '6px', fontSize: '0.88rem', fontWeight: '600' }}
          >
            Message
          </label>
          <textarea
            id="emailMessage"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
            style={{
              width: '100%',
              padding: '12px 14px',
              border: '1px solid var(--steel-blue)',
              borderRadius: '8px',
              backgroundColor: '#1b3046',
              color: '#ffffff',
              fontSize: '0.95rem',
              resize: 'vertical',
              minHeight: '120px',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '18px',
            marginTop: '8px',
          }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{ minWidth: '120px' }}
          >
            {isSubmitting ? 'Sending...' : 'Send email'}
          </button>
        </div>
      </form>
    </dialog>
  );
}

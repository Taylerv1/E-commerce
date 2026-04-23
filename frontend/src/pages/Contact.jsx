import { useState } from 'react';

import { submitContact } from '../api/client.js';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M5 12v4a2 2 0 0 0 2 2h1v-7H7a2 2 0 0 0-2 2z" />
      <path d="M19 12v4a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2z" />
      <path d="M14 20h-3" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccess('');
    setError('');

    try {
      await submitContact(form);
      setForm(initialForm);
      setSuccess('Your message was sent.');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-layout">
        <div className="contact-intro contact-hero-card">
          <p className="eyebrow">Contact</p>
          <h1>How can we help?</h1>
          <p className="muted">
            Questions about products, orders, or your account are welcome here.
          </p>

          <div className="contact-methods">
            <div className="contact-box">
              <span className="contact-icon">
                <MailIcon />
              </span>
              <div>
                <strong>Email</strong>
                <p>support@techzone.com</p>
              </div>
            </div>
            <div className="contact-box">
              <span className="contact-icon">
                <LocationIcon />
              </span>
              <div>
                <strong>Location</strong>
                <p>Saida, Lebanon</p>
              </div>
            </div>
            <div className="contact-box">
              <span className="contact-icon">
                <SupportIcon />
              </span>
              <div>
                <strong>Store support</strong>
                <p>Product questions and order help</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">Message us</p>
          <h2>Send a message</h2>
          <div className="form-grid">
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </label>
          </div>

          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="primary-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}

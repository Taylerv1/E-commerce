import { useState } from 'react';

import { submitContact } from '../api/client.js';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

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
              <span className="contact-icon">M</span>
              <div>
                <strong>Email</strong>
                <p>support@techzone.com</p>
              </div>
            </div>
            <div className="contact-box">
              <span className="contact-icon">L</span>
              <div>
                <strong>Location</strong>
                <p>Saida, Lebanon</p>
              </div>
            </div>
            <div className="contact-box">
              <span className="contact-icon">H</span>
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

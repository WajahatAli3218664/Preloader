import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    // simulate send
    setTimeout(() => setSent(true), 600);
  }

  if (sent) {
    return (
      <main className="contact-page container">
        <div className="thanks">
          <h2>Thanks — we'll be in touch</h2>
          <p>We received your message and will reply within 2 business days.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-page container">
      <div className="contact-inner">
        <div className="contact-info">
          <h1>Contact</h1>
          <p className="lead">Tell us about your project — we respond quickly.</p>

          <div className="info-block">
            <h4>Location</h4>
            <p>Remote-first · Available worldwide</p>
          </div>

          <div className="info-block">
            <h4>Email</h4>
            <p><a href="mailto:hello@flipstudio.example">hello@flipstudio.example</a></p>
          </div>

          <div className="info-block">
            <h4>Availability</h4>
            <p>Usually replies within 48 hours. We work in small, fast-moving teams.</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <label htmlFor="c-name">
            Name
          </label>
          <input id="c-name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
          {errors.name && <small className="err">{errors.name}</small>}

          <label htmlFor="c-email">Email</label>
          <input id="c-email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
          {errors.email && <small className="err">{errors.email}</small>}

          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={6} />
          {errors.message && <small className="err">{errors.message}</small>}

          <div className="form-actions">
            <button className="btn primary" type="submit">Send message</button>
          </div>
        </form>
      </div>
    </main>
  );
}

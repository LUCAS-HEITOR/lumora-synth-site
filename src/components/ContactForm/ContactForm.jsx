import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to API
    console.log('[Contact] Form submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <p>Thank you! We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          className="form-input"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          className="form-input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="form-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn--primary btn--lg btn--full">
        {t('contact.send')}
      </button>
    </form>
  );
}

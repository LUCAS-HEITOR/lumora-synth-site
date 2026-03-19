import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSearchParams } from 'react-router-dom';
import { quoteToCSV, downloadCSV } from '../../services/csvExport';
import styles from './QuoteForm.module.css';

const SERVICE_TYPES = [
  { value: 'websites', label: 'Website' },
  { value: 'automations', label: 'Automation' },
  { value: 'custom-programs', label: 'Custom Software / Dashboard' },
  { value: 'bundles', label: 'Bundle / Package' },
];

const INITIAL_STATE = {
  name: '',
  email: '',
  contact: '',
  contactMethod: 'whatsapp',
  country: '',
  preferredLanguage: 'en',
  clientType: 'individual',
  serviceType: '',
  description: '',
  desiredTimeline: '',
  estimatedBudget: '',
  references: '',
  notes: '',
  // Website-specific
  webTech: '',
  webNeedsLogin: false,
  webNeedsAdmin: false,
  webNeedsCheckout: false,
  webNeedsBlog: false,
  // Automation-specific
  autoTarget: '',
  autoTools: '',
  autoIntegrations: '',
  autoFrequency: '',
  // Custom Program-specific
  progType: '',
  progTech: '',
  progDatabase: false,
  progDashboard: false,
  progUsers: '',
};

export default function QuoteForm() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service') || '';

  const [form, setForm] = useState({ ...INITIAL_STATE, serviceType: preselected });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar para Formspree
    const formspreeEndpoint = 'https://formspree.io/f/xjgaydkz';
    
    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.ok) {
          console.log('[Quote] Form submitted successfully to Formspree');
          setSubmitted(true);
        } else {
          console.error('[Quote] Error submitting form:', res.status);
          alert('Error sending form. Please try again.');
        }
      })
      .catch((err) => {
        console.error('[Quote] Error:', err);
        alert('Error sending form. Please try again.');
      });
  };

  const handleExportCSV = () => {
    const csvContent = quoteToCSV(form);
    downloadCSV(csvContent, `quote-${Date.now()}.csv`);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3>{t('quote.success')}</h3>
        <button className="btn btn--secondary" onClick={handleExportCSV}>
          Export as CSV
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Base Fields */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Contact Information</legend>

        <div className={styles.row}>
          <div className="form-group">
            <label className="form-label" htmlFor="q-name">Name *</label>
            <input id="q-name" className="form-input" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="q-email">Email *</label>
            <input id="q-email" className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div className={styles.row}>
          <div className="form-group">
            <label className="form-label" htmlFor="q-contact">WhatsApp / Discord</label>
            <input id="q-contact" className="form-input" name="contact" value={form.contact} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="q-country">Country</label>
            <input id="q-country" className="form-input" name="country" value={form.country} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className="form-group">
            <label className="form-label" htmlFor="q-lang">Preferred Language</label>
            <select id="q-lang" className="form-select" name="preferredLanguage" value={form.preferredLanguage} onChange={handleChange}>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="q-client-type">Client Type</label>
            <select id="q-client-type" className="form-select" name="clientType" value={form.clientType} onChange={handleChange}>
              <option value="individual">Individual</option>
              <option value="company">Company</option>
              <option value="studio">Studio / Agency</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Project Details */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Project Details</legend>

        <div className="form-group">
          <label className="form-label" htmlFor="q-service">Service Type *</label>
          <select id="q-service" className="form-select" name="serviceType" value={form.serviceType} onChange={handleChange} required>
            <option value="">Select a service...</option>
            {SERVICE_TYPES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="q-desc">Project Description *</label>
          <textarea id="q-desc" className="form-textarea" name="description" value={form.description} onChange={handleChange} required placeholder="Tell us about your project..." />
        </div>

        <div className={styles.row}>
          <div className="form-group">
            <label className="form-label" htmlFor="q-timeline">Desired Timeline</label>
            <input id="q-timeline" className="form-input" name="desiredTimeline" value={form.desiredTimeline} onChange={handleChange} placeholder="e.g., 2 weeks, 1 month" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="q-budget">Estimated Budget (USD)</label>
            <input id="q-budget" className="form-input" name="estimatedBudget" value={form.estimatedBudget} onChange={handleChange} placeholder="e.g., $500 - $1000" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="q-refs">References (links, images, examples)</label>
          <textarea id="q-refs" className="form-textarea" name="references" value={form.references} onChange={handleChange} placeholder="Paste any reference links or describe what you have in mind..." style={{ minHeight: '80px' }} />
        </div>
      </fieldset>

      {/* Dynamic Fields */}
      {form.serviceType === 'websites' && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Website Details</legend>
          <div className="form-group">
            <label className="form-label" htmlFor="q-webtech">Technology Preference</label>
            <select id="q-webtech" className="form-select" name="webTech" value={form.webTech} onChange={handleChange}>
              <option value="">No preference</option>
              <option value="react">React</option>
              <option value="django">Django</option>
              <option value="either">Either is fine</option>
            </select>
          </div>
          <div className={styles.checkboxGrid}>
            <div className="form-checkbox-group">
              <input type="checkbox" id="q-login" name="webNeedsLogin" checked={form.webNeedsLogin} onChange={handleChange} />
              <label htmlFor="q-login">Needs login / auth?</label>
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="q-admin" name="webNeedsAdmin" checked={form.webNeedsAdmin} onChange={handleChange} />
              <label htmlFor="q-admin">Needs admin panel?</label>
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="q-checkout" name="webNeedsCheckout" checked={form.webNeedsCheckout} onChange={handleChange} />
              <label htmlFor="q-checkout">Needs checkout / payments?</label>
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="q-blog" name="webNeedsBlog" checked={form.webNeedsBlog} onChange={handleChange} />
              <label htmlFor="q-blog">Needs blog?</label>
            </div>
          </div>
        </fieldset>
      )}

      {form.serviceType === 'automations' && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Automation Details</legend>
          <div className="form-group">
            <label className="form-label" htmlFor="q-autotarget">What do you want to automate?</label>
            <textarea id="q-autotarget" className="form-textarea" name="autoTarget" value={form.autoTarget} onChange={handleChange} style={{ minHeight: '80px' }} />
          </div>
          <div className={styles.row}>
            <div className="form-group">
              <label className="form-label" htmlFor="q-autotools">Tools / Platforms Used</label>
              <input id="q-autotools" className="form-input" name="autoTools" value={form.autoTools} onChange={handleChange} placeholder="e.g., Google Sheets, Slack, Zapier" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="q-autointegrations">Integrations Needed</label>
              <input id="q-autointegrations" className="form-input" name="autoIntegrations" value={form.autoIntegrations} onChange={handleChange} placeholder="e.g., APIs, webhooks, databases" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="q-autofreq">Automation Frequency</label>
            <select id="q-autofreq" className="form-select" name="autoFrequency" value={form.autoFrequency} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="once">One-time</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="realtime">Real-time</option>
            </select>
          </div>
        </fieldset>
      )}

      {form.serviceType === 'custom-programs' && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Custom Program Details</legend>
          <div className={styles.row}>
            <div className="form-group">
              <label className="form-label" htmlFor="q-progtype">Application Type</label>
              <select id="q-progtype" className="form-select" name="progType" value={form.progType} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="web">Web App</option>
                <option value="desktop">Desktop App</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="q-progtech">Preferred Technology</label>
              <input id="q-progtech" className="form-input" name="progTech" value={form.progTech} onChange={handleChange} placeholder="e.g., Python, React, Electron" />
            </div>
          </div>
          <div className={styles.checkboxGrid}>
            <div className="form-checkbox-group">
              <input type="checkbox" id="q-progdb" name="progDatabase" checked={form.progDatabase} onChange={handleChange} />
              <label htmlFor="q-progdb">Needs database?</label>
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="q-progdash" name="progDashboard" checked={form.progDashboard} onChange={handleChange} />
              <label htmlFor="q-progdash">Needs dashboard?</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="q-progusers">Expected Number of Users</label>
            <input id="q-progusers" className="form-input" name="progUsers" value={form.progUsers} onChange={handleChange} placeholder="e.g., 10, 100, 1000+" />
          </div>
        </fieldset>
      )}

      {/* Notes */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Additional Notes</legend>
        <div className="form-group">
          <textarea className="form-textarea" name="notes" value={form.notes} onChange={handleChange} placeholder="Anything else we should know?" />
        </div>
      </fieldset>

      <button type="submit" className="btn btn--primary btn--lg btn--full">
        {t('quote.submit')}
      </button>
    </form>
  );
}

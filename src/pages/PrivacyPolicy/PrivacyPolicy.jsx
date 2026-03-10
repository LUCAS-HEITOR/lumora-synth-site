import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className="page">
      <div className="container container--narrow">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: March 2026</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your name, email address,
              phone number, and project details when you fill out forms on our website. We also
              collect certain information automatically when you visit our site, including your
              IP address, browser type, and pages visited.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, send communications about your projects, and respond to your
              requests and inquiries.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              except as necessary to provide our services (e.g., payment processors). We may share
              information when required by law or to protect our rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Cookies</h2>
            <p>
              We may use cookies and similar technologies to enhance your browsing experience and
              gather usage data. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Third-Party Services</h2>
            <p>
              Our website may integrate with third-party services such as Mercado Pago and PayPal
              for payment processing. These services have their own privacy policies, and we
              encourage you to review them.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:contact@lumorasynth.com">contact@lumorasynth.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import styles from './TermsOfService.module.css';

export default function TermsOfService() {
  return (
    <div className="page">
      <div className="container container--narrow">
        <div className="page-header">
          <h1>Terms of Service</h1>
          <p>Last updated: March 2026</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Lumora Synth website and services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use
              our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Services</h2>
            <p>
              Lumora Synth provides digital services including but not limited to website
              development, automation solutions, custom bots, and custom software development.
              Service details, deliverables, and pricing are specified in individual project proposals.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Payments</h2>
            <p>
              Payments are processed through PayPal. All prices are listed in USD (US Dollars).
              Payment terms are agreed upon before project commencement.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Project Delivery</h2>
            <p>
              Estimated timelines are provided during the quoting process. While we strive to meet
              all deadlines, delivery dates may vary based on project complexity and client
              responsiveness. All projects include a defined number of revision rounds.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive full ownership of the delivered work unless
              otherwise specified. Lumora Synth retains the right to use anonymized project
              details in its portfolio unless a non-disclosure agreement is in place.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Refund Policy</h2>
            <p>
              Refunds are evaluated on a case-by-case basis. If a project has not yet entered the
              development phase, a full refund may be issued. Once development has begun, partial
              refunds may be considered based on the work completed.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Limitation of Liability</h2>
            <p>
              Lumora Synth shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of our services. Our total liability shall not exceed
              the amount paid by the client for the specific service in question.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:contact@lumorasynth.com">contact@lumorasynth.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

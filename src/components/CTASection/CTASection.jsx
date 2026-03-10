import { Link } from 'react-router-dom';
import styles from './CTASection.module.css';

export default function CTASection({ title, text, buttonText, to = '/quote' }) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Link to={to} className="btn btn--white btn--lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

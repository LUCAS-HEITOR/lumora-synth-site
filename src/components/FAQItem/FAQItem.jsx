import { useState } from 'react';
import styles from './FAQItem.module.css';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

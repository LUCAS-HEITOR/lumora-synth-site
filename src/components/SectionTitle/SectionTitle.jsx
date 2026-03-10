import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className={`${styles.wrapper} ${light ? styles.light : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

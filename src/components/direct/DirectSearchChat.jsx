import styles from './main/direct.module.css';

export function DirectSearchChat() {
  return (
    <section className={styles.directSearchSection}>
      <input
        type="text"
        className={styles.directSearchInput}
        placeholder="Пошук"
      />
    </section>
  )
}
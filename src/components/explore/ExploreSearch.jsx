import styles from './main/explore.module.css';

export function ExploreSearch({ variant = 'exploreSearchSection' }) {
  return (
    <section className={styles[variant]}>
      <input
        type="text"
        className={styles.exploreSearchInput}
        placeholder="Пошук"
      />
    </section>
  )
}
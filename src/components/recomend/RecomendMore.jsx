import styles from './main/recomend.module.css'

export function RecomendMore() {
  return (
    <div className={styles.recomendForUserMore}>
      <p className={styles.recomendForUserText}>Рекомендації для вас</p>
      <a href="#" className={styles.recomendForUserMoreLink}>Переглянути всіх</a>
    </div>
  )
}
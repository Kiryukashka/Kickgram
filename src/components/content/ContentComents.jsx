import styles from './main/content.module.css'

export function ContentComents() {
  return (
    <div className={styles.postComents}>
      <button className={styles.postComentsBtn}>Переглянути всі коментарі: 5</button>
    </div>
  )
}
import styles from './main/content.module.css'

export function ContentLike() {
  return (
    <div className={styles.postContentLike}>
      <button className={styles.like}>Позначки "Подобається": 42</button>
    </div>
  )
}
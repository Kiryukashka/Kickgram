import styles from './main/content.module.css'

export function CreateComents() {
  return (
    <div className={styles.createComents}>
      <input type="text" className={styles.crateComentsInput} placeholder="Додайте коментар..." />
    </div>
  )
}
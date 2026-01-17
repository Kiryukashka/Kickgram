import styles from './main/explore.module.css';

export function ExploreComents({ comments }) {
  return (
    <div className={styles.comments}>
      <img src="\public\hotbar-img\active\coment-active.svg" alt="" />
      <span className={styles.itemText}>{comments}</span>
    </div>
  )
}
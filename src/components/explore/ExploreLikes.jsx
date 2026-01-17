import styles from './main/explore.module.css';

export function Likes({ likes }) {
  return (
    <div className={styles.likes}>
      <img src="\public\hotbar-img\active/like-active.svg" alt="" />
      <span className={styles.itemText}>{likes}</span>
    </div>
  )
}
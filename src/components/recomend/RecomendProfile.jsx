import styles from './main/recomend.module.css'

export function RecomendProfile() {
  return (
    <div className={`${styles.getUserInfo} ${styles.recomendUser}`}>
      <a href="#"><img src="/public/nav-img/kirillAvatar.jpg" alt="Avatar user kbrovchk"
        className={styles.getUserAvatar} /></a>
      <div className={styles.nameOpisUser}>
        <a href="#" className={styles.getUserName}>kbrovhk</a>
        <p className={styles.opisUserRecomend}>Рекомендації для вас</p>
      </div>
      <button href="#" className={styles.subscribeUser}>Стежити</button>
    </div>
  )
}
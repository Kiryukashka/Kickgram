import styles from './main/recomend.module.css'

export function GetUserInfo() {
  return (
    <div className={styles.getUserInfo}>

      <a href="#"><img src="/public/nav-img/kirillAvatar.jpg" alt="Avatar user kbrovchk"
        className={styles.getUserAvatar} /></a>

      <div className={styles.nameOpisUser}>

        <a href="#" className={styles.getUserName}>kbrovhk</a>

        <p className={styles.opisUserProfile}>🌳</p>

      </div>

    </div>
  )
}
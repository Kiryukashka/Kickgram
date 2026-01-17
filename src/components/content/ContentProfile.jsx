import styles from './main/content.module.css'

export function ContentProfile() {
  return (
    <div className={styles.userGetProfile}>
      <a href="#"><img src="/public/nav-img/kirillAvatar.jpg" alt="Avatar user kbrovchk"
        className={styles.getUserAvatar} /></a>
        
      <a href="#" className={styles.getUserName}>kbrovhk</a>
    </div>
  )
}
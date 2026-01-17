import { GetUserInfo } from './GetUserInfo'
import styles from './main/recomend.module.css'

export function UserProfile() {
  return (
    <div className={styles.getUserProfile}>

      <GetUserInfo />

      <a href="#" className={styles.getUserProfileLink}>Перейти</a>
      
    </div>
  )
}
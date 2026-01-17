import { Link } from 'react-router-dom'
import styles from './main/navigation.module.css'

export function Profile({ image, text, to }) {
  return (
    <li className={`${styles.navItem} ${styles.navItemAvatar}`}>
      <Link to={to} className={styles.navItemLink}>
        <img src={image} alt=""
          className={`${styles.navItemImg} ${styles.navItemImgAvatar}`} />
        <span className={styles.navItemLinkText}>{text}</span>
      </Link>
    </li>
  )
}
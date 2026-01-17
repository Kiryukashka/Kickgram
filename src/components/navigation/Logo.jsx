import logo from '/public/nav-img/instagram-logo.svg'
import styles from './main/navigation.module.css'
import { Link } from 'react-router-dom'

export function Logo({ to = '/' }) {
  return (
    <ul className={styles.navList}>
      
      <li className={`${styles.navItem} ${styles.navItemLogoText}`}>
        <Link to={to}>
          <img src={logo} alt="" className={styles.navListHeaderImg} />
        </Link>
      </li>

      <li className={`${styles.navItem} ${styles.navItemLogo} ${styles.hidden}`}>
        <Link to={to}>
          <img src='/public/nav-img/nav-img-svg/instagram-mini.svg' alt="" className={styles.navItemLogo} />
        </Link>
      </li>

    </ul>
  )
}
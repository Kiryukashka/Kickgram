import styles from './main/footer.module.css'

export function FooterNavAvatar() {
  return (
    <li className={styles.footerNavItem}>
      <a href="#" className={styles.footerNavLink}><img src='/public/nav-img/kirillAvatar.jpg'
        alt="" className={`${styles.navItemImg} ${styles.navItemImgAvatar}`} />
      </a>
    </li>
  )
}
import styles from './main/navigation.module.css'
import burger from '/public/nav-img/nav-img-svg/more.svg'

export function More() {
  return (
    <ul className={`${styles.navList} ${styles.navListMore}`}>
      <li className={styles.navItem}><button href="" class="nav-item__link nav-item__link-btn">
        <img src={burger} alt="" />
        <span className={styles.navItemLinkText}>Більше</span></button>
      </li>
    </ul>
  )
}
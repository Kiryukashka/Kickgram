import { Link } from 'react-router-dom'
import styles from './main/footer.module.css'

export function FooterNav({ img, to }) {
  return (
    <>
      <li className={styles.footerNavItem}>
        <Link to={to} className={styles.footerNavLink}>
          <img src={img} alt="" />
        </Link>
      </li>
    </>
  )
}
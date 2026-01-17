import { FooterNav } from '../FooterNav'
import { FOOTERNAV } from '../footerNav.data'
import { FooterNavAvatar } from '../FooterNavAvatar'
import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <ul className={styles.footerNavList}>

          {FOOTERNAV.map(nav => (
            <FooterNav
              key={nav.id}
              img={nav.img}
              to={nav.to}
            />
          ))}

          <FooterNavAvatar />

        </ul>
      </nav>
    </footer>
  )
}

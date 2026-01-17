import styles from './main/navigation.module.css'
import { Link } from 'react-router-dom'

export function NavigationItem({ image, text, as = 'button', action, to, onAction }) {


  function handleClick() {
    onAction?.(action)
  }


  if (as === 'link') {
    return (
      <li className={styles.navItem}>
        <Link to={to} className={styles.navItemLink}>
          <img
            src={image}
            alt=''
          />
          <span className={styles.navItemLinkText}>
            {text}
          </span>
        </Link>
      </li>
    )
  }

  return (
    <li className={styles.navItem}>
      <button onClick={handleClick} className={styles.navItemLink}>
        <img
          src={image}
          alt=''
        />
        <span className={styles.navItemLinkText}>
          {text}
        </span>
      </button>
    </li>
  )
}
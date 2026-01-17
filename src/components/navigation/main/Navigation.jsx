import { useState } from 'react'
import styles from './navigation.module.css'
import { NAVIGATION } from '../navigation.data'
import { NavigationItem } from '../NavigationItem'
import { Logo } from '../Logo'
import { More } from '../More'
import { Profile } from '../Profile'
import { PROFILENAV } from '../profileNav.data'
import { SearchModal } from '../../ui/modal/search/main/SearchModal'

export function Navigation({ variant = 'navigation' }) {

  const [isOpenSearchModal, setOpenSearchModal] = useState(false)
  const profile = PROFILENAV[0]

  function handleAction(action) {
    switch (action) {
      case 'openSearchModal':
        setOpenSearchModal(true)
        break
      case 'openCreateModal':
        break
      default:
        setOpenSearchModal(false)
    }
  }

  // function activePathCheck() {
  //   const location = useLocation();
  
  //   if (location.pathname === '/') {
      
  //   }
  //   console.log('Зараз в:', location.pathname);
  // }
 

  return (
    <>
      <section className={`${styles[variant]} ${isOpenSearchModal ? styles.navigationExpanded : ''}`}>
        <nav className={styles.nav}>

          <Logo />

          <ul className={styles.navList}>

            {NAVIGATION.map(nav => (
              <NavigationItem
                key={nav.id}
                image={nav.img}
                text={nav.text}
                href={nav.href}
                as={nav.type === "link" ? "link" : "button"}
                onClick={nav.onclick}
                action={nav.action}
                to={nav.to}
                onAction={handleAction}
              />
            ))}

            <Profile
              image={profile.img}
              text={profile.text}
              to={profile.to}
            />

          </ul>

          <More />

        </nav>
      </section>
      <SearchModal active={isOpenSearchModal} setActive={setOpenSearchModal} />

    </>
  )
}
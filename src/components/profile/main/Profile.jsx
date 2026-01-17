import { Navigation } from '../../navigation/main/Navigation'
import styles from './profile.module.css'

export function Profile() {
  return (
    <main className='main'>
      <Navigation  />

      <div className={styles.wrapper}>

        <header className={styles.header}>
          <section className={styles.headerProfileAvatar}>
            <img src="/public/nav-img/kirillAvatar.jpg" alt="" className={styles.headerProfileAvatarImg} />
          </section>

          <section></section>

          <section></section>

          <section></section>

          <section></section>

        </header>

      </div>
    </main>
  )
}
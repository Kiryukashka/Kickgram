import styles from './recomend.module.css'
import { RecomendMore } from '../RecomendMore'
import { RecomendProfile } from '../RecomendProfile'
import { UserProfile } from '../UserProfile'

export function Recomend() {
  return (
    <section className={styles.recomend}>

      <UserProfile />

      <div className={styles.recomendForUser}>

        <RecomendMore />

        <RecomendProfile />

      </div>
    </section>
  )
}
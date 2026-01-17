import { AVATARKA } from '../avatar.data'
import styles from './stories.module.css'
import { StoriesAvatar } from '../StoriesAvatar'

export function Stories() {
  return (
    <section className={styles.stories}>
      <ul className={styles.storiesList}>


        {AVATARKA.map(ava => (
          <StoriesAvatar
            key={ava.id}
            avatar={ava.image}
          />
        ))}



      </ul>
    </section>
  )
}
import styles from './content.module.css'
import { HotbarButtons } from '../HotbarButtons'
import { HOTBAR } from '../hotbarIcon.data'
import { ContentLike } from '../ContentLike'
import { ContentDescription } from '../ContentDescription'
import { ContentComents } from '../ContentComents'
import { CreateComents } from '../CreateComents'
import { ContentProfile } from '../ContentProfile'

export function Content() {
  return (
    <section className={styles.content}>
      <div className={styles.post}>

        <ContentProfile />
        
        <div className={styles.postContent}>
          <img src="/public/posts/kirillNaZontes.jpg" alt="Post User" className={styles.postContentImg} />
          <div className={styles.hotbar}>

            {HOTBAR.slice(0, 2).map(bar => (
              <HotbarButtons
                key={bar.id}
                image={bar.image}

              />
            ))}

            <div className={styles.right}>
              {HOTBAR.slice(2, 3).map(bar => (
                <HotbarButtons
                  key={bar.id}
                  image={bar.image}
                />
              ))}

            </div>

          </div>
        </div>
        <div className={styles.postDescription}>

          <ContentLike />

          <ContentDescription />

          <ContentComents />

          <CreateComents />

        </div>
      </div>
    </section>
  )
}
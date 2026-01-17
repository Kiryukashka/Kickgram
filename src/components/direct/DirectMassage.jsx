import { CHATS } from './chats.data';
import { DirectMassageChats } from './DirectMassageChats';
import styles from './main/direct.module.css';

export function DirectMassage() {
  return (
    <section className={styles.directMassage}>
      <ul className={styles.directMassageList}>

        {CHATS.map(chats => (
          <DirectMassageChats
            key={chats.id}
            img={chats.img}
            name={chats.name}
            lastMassage={chats.lastMassage}
          />
        ))}

      </ul>
    </section>
  )
}
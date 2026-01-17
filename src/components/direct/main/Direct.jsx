import { Footer } from '../../footer/main/Footer'
import { Navigation } from "../../navigation/main/Navigation"
import { DirectHeader } from "../DirectHeader"
import { DirectMassage } from "../DirectMassage"
import { DirectSearchChat } from "../DirectSearchChat"
import { DirectUserNotes } from "../DirectUserNotes"
import styles from './direct.module.css'

export function Direct() {
  return (
    <main className="main">

      <Navigation variant="navigationDirect" />

      <div className={styles.directContainer}>
        <main className={styles.directUserSection}>

          <DirectHeader />

          <DirectSearchChat />

          <DirectUserNotes />

          <div className={styles.directAllMasageText}>
            <h4>Повідомлення</h4>
            <a href="#">Request</a>
          </div>

          <DirectMassage />

        </main>

        <main className={styles.directChat}>
          <div className={styles.directMassageBigImgContainer}>
            <img src="/public\logo\massageBig.svg" alt="" className={styles.directMassageBigImg} />
          </div>

          <div className={styles.directChatTitleContainer}>
            <h3 className={styles.directChatTitle}>Ваші повідомлення</h3>
          </div>

          <div className={styles.directChatDescriptionContainer}>
            <p className={styles.directChatDescription}>Надсилайте приватні світлини та повідомлення другу або групі</p>
          </div>

          <div className={styles.directChatBtnContainer}>
            <button className={styles.directChatBtn}>Надіслати нові повідомлення</button>
          </div>
        </main>
      </div>

      <Footer />

    </main>
  )
} 
import styles from './main/direct.module.css';

export function DirectHeader() {
  return (
    <section className={styles.directUserHeader}>

      <button className={styles.directChangeUser}>
        <p className={styles.directUserName}>kbrovchk</p>
        <p className={styles.directArrow}>˅</p>
      </button>

      <button className={styles.directNewMessage}>
        <img src="/public\hotbar-img\newMassage.svg" alt="" className={styles.directNewMassageImg} />
      </button>
      
    </section>
  )
}
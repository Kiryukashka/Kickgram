import styles from './main/direct.module.css';

export function DirectUserNotes() {
  return (
    <section className={styles.directUsersNotes}>

      <div className={styles.directUsersNotesItem}>
        <input
          type="text"
          className={styles.directUsersNotesCreate}
          placeholder='Запишіть'
        />

        <img src="/public\nav-img\kirillAvatar.jpg" alt="" className={styles.directUsersNotesCreateImg} />
      </div>

      <div className={styles.directFriendNotesItem}>

      </div>

    </section>
  )
}
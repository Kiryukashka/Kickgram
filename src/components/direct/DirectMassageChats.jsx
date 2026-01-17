import styles from './main/direct.module.css';

export function DirectMassageChats({ img, name, lastMassage }) {
  return (
    <li className={styles.directMassageListItem}>
      <a href="#" className={styles.directMassageListItemLink}>
        <img src={img} alt="" className={styles.directMassageUserAvatar} />
        <div className={styles.directMassageUser}>
          <p className={styles.directMassageUserName}>{name}</p>
          <p className={styles.directMassageUserText}>{lastMassage}</p>
        </div>
      </a>
    </li>
  )
}
import styles from './main/search.module.css';

export function RecrentListItem() {

  function deleteItem(e) {
    e.preventDefault();
    const itemToDelete = e.target.closest('li');
    itemToDelete.remove();
  }

  return (
    <li className={styles.recentListItem}>
      <a href="" className={styles.recentListItemLink}>
        <img src="/public/nav-img/kirillAvatar.jpg" alt="Avatar user kbrovchk"
          className={styles.recentListItemAvatar} />

        <div className={styles.recentListItemDescription}>

          <a href="#" className={styles.recentListItemUserName}>kbrovhk</a>

          <p className={styles.recentListItemOpisUserProfile}>🌳</p>

        </div>

        <button className={styles.recentListItemDeleteButton} onClick={deleteItem}>×</button>
      </a>

    </li>
  )
}
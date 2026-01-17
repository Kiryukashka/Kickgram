import { createPortal } from 'react-dom'
import styles from './search.module.css'
import { Navigation } from '../../../../navigation/main/Navigation'
import { ExploreSearch } from '../../../../explore/ExploreSearch'
import { RecrentListItem } from '../RecrentListItem'

export function SearchModal({ active, setActive }) {
  if (!active) return null

  function deleteAll(e) {
    e.preventDefault();
    const recentList = document.querySelector(`.${styles.recentList}`);
    recentList.innerHTML = '';
  }

  return createPortal(
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalWrapper} >
        <div className={styles.navigationModal}>
          <Navigation variant='navigationSearchModal' />
        </div>

        <div className={styles.searchModalContent} onClick={(e) => e.stopPropagation()}>

          <div className={styles.searchHeader}>
            <h2>Пошук</h2>
            <ExploreSearch variant='modalSearch' />
          </div>

          <div className={styles.recent}>

            <div className={styles.recentHeader}>

              <p className={styles.recentTitle}>Недавні</p>
              <button className={styles.clearAllButton} onClick={deleteAll}>Очистити все</button>

            </div>

            <ul className={styles.recentList}>

              <RecrentListItem />

            </ul>
          </div>

        </div>
      </div>
    </div>,
    document.body
  )
}
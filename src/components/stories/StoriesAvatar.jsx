import styles from './main/stories.module.css'

export function StoriesAvatar({ avatar }) {
  return (
    <li className={styles.storiesUser}>
      <img src={avatar} alt="Stories user" className={styles.storiesUserImg} />
    </li>
  )
}
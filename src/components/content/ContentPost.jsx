import styles from './main/content.module.css'

export function ContentPost({ post }) {
  return (
      <img src={post} alt="Post User" className={styles.postContentImg} />
    )
}
import styles from './main/explore.module.css';

export function ExploreImg({ image }) {
  return (
    <img src={image} alt="" className={styles.exploreContentImg} />
  )
}
import styles from './main/content.module.css'

export function HotbarButtons({ image }) {
  return (
    <button className={styles.hotbarBtn}>
      <img src={image} alt="" />
    </button>
  )
}
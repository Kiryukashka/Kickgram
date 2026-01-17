import { ExploreComents } from './ExploreComents';
import { ExploreImg } from './ExploreImg';
import { Likes } from './ExploreLikes';
import styles from './main/explore.module.css';

export function ExploreItem({ image, likes, comments }) {
  return (
    <li className={styles.exploreItem}>
      <button className={styles.exploreContent}>

        <div className={styles.exploreDarkOverlay}></div>

        <div className={styles.exploreContentHover}>

          <Likes likes={likes}/>

          <ExploreComents comments={comments}/>
        </div>

        <ExploreImg image={image}/>
      </button>
    </li>
  )
}
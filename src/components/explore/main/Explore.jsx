import { Footer } from '../../footer/main/Footer'
import { Navigation } from "../../navigation/main/Navigation";
import { EXPLORE } from "../explore.data";
import { ExploreItem } from "../ExploreItem";
import { ExploreSearch } from '../ExploreSearch'
import styles from './explore.module.css';

export function Explore() {
  
  return (
    <main className="main">

      <Navigation />

      <div className={styles.container}>

        <ExploreSearch />

        <ul className={styles.exploreList}>

          {EXPLORE.map(item => (
            <ExploreItem 
              key={item.id}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
            />
          ))}

        </ul>

      </div>

      <Footer />
    </main>
  )
}
import { Content } from "./components/content/main/Content";
import { Footer } from "./components/footer/main/Footer";
import { Navigation } from "./components/navigation/main/Navigation";
import { Recomend } from "./components/recomend/main/Recomend";
import { Stories } from "./components/stories/main/Stories";

export function App() {
  return (
    <>
      <main className="main">
        <Navigation />
        <div className="container">
          <Stories />
          <Content />
        </div>
        <Recomend />
      </main>
      <Footer />
    </>
  )
}

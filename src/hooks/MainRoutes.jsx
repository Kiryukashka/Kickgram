import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Explore } from '../components/explore/main/Explore';
import { Direct } from '../components/direct/main/Direct';
import { Profile } from '../components/profile/main/Profile'

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />
        <Route
          path="/direct/inbox"
          element={<Direct />}
        />
        <Route
          path="/kbrovchk/"
          element={<Profile />}
        />
      </Routes>
    </Router>
  )
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Runs from "./components/activities/Runs";
import Profile from "./pages/Profile";
import MasterRuns from "./pages/MasterRuns";
import Header from "./components/Misc/Header";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  const { isAuthenticated } = useSelector((state) => state.stravaAuth);

  return (
    <Router>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/personal-best"
          element={
            <ProtectedRoute>
              <Runs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master-runs"
          element={
            <ProtectedRoute>
              <MasterRuns />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

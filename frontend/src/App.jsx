
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import Runs from "./components/activities/Runs";
import Profile from "./pages/Profile";
import MasterRuns from "./pages/MasterRuns";
// import Home from "./Home";
// import Runs from "./Runs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="activities/run" element={<Runs />} /> */}
        <Route path="activities/run" element={ <MasterRuns/>} />
      </Routes>
    </Router>
   
  );
}

export default App;

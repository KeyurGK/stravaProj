// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./index.css"
// import  Home  from './pages/Home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <Home/>
//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import Runs from "./pages/Runs";
// import Home from "./Home";
// import Runs from "./Runs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runs" element={<Runs />} />
      </Routes>
    </Router>
  );
}

export default App;

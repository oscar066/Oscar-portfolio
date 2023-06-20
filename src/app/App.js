import LandingPage from "../pages/landingPage/landingPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "../pages/allProjects/allProjects";

function App() {
  return (
    <div className="AppOuter">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allProjects" element={<AllProjects />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

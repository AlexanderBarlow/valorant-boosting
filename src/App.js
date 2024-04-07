import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.js';
import Header from "./components/navbar.js";
import ValorantPage from "./pages/ValorantPage.js";
import LeagePage from "./pages/LeagePage.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/valorant" element={<ValorantPage />} />
        <Route path="/league" element={<LeagePage />} />
      </Routes>
    </Router>
  );
}

export default App;

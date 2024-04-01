import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.js';
import Header from "./components/navbar.js";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
  );
}

export default App;

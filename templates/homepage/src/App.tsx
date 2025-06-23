import "react";
import "./App.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";


export default function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="logo" />

        {/* Navbar Links */}
        <div className="nav-links">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Services</button>
          <button className="nav-btn">About us</button>
          <button className="nav-btn">FYQs</button>
        </div>

        {/* Signup Button */}
        
        <button className="action-btn" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="subheading">Wanna solve problems efficiently?</h2>
        <h1 className="heading">Welcome to Raise!</h1>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn" onClick={() => navigate("/signup")}>
          Sign up
          </button>
          <button className="action-btn">Sign in</button>
        </div>
      </main>
    </div>
  );
}

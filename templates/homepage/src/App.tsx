import "react";
import "./App.css"; // Import the CSS file

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="logo" />

        {/* Navbar Links */}
        <div className="nav-links">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Service</button>
          <button className="nav-btn">About us</button>
          <button className="nav-btn">FYQs</button>
        </div>

        {/* Signup Button */}
        <button className="signup-btn">Signup Now</button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="subheading">Wanna solve problems efficiently?</h2>
        <h1 className="heading">Welcome to Demo!</h1>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn">Sign up</button>
          <button className="action-btn">Sign in</button>
        </div>
      </main>
    </div>
  );
}

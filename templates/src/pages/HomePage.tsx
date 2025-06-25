import { useNavigate } from 'react-router-dom';
import '../styles/homepage.css';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <nav className="navbar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="nav-links">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Services</button>
          <button className="nav-btn">About us</button>
          <button className="nav-btn">FYQs</button>
        </div>
        <button className="action-btn" onClick={() => navigate('/signup')}>
          Sign up
        </button>
      </nav>

      <main className="main-content">
        <h2 className="subheading">Wanna solve problems efficiently?</h2>
        <h1 className="heading">Welcome to Raise!</h1>
        <div className="action-buttons">
          <button className="action-btn" onClick={() => navigate('/signup')}>
            Sign up
          </button>
          <button className="action-btn">Sign in</button>
        </div>
      </main>
    </div>
  );
}

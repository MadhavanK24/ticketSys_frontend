import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import logo from '../assets/Logo.png';

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div className="signup-page">
      <h1 className="signup-title">Sign Up to Raise</h1>
      <div className="signup-box">
        <img src={logo} alt="Logo" className="logo" />
        <p>Enter your details:</p>
        <form className="signup-form">
          <label>Username:<input type="text" /></label>
          <label>Email:<input type="email" /></label>
          <label>Password:<input type="password" /></label>
          <label>Confirm Password:<input type="password" /></label>
        </form>
      </div>
      <button className="signup-submit" onClick={() => navigate('/manage_users')}>
        Good to go!
      </button>
    </div>
  );
}

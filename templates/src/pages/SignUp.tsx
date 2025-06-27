import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import '../styles/signup.css';
import logo from '../assets/Logo.png';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSendOTP = async () => {
    try {
      await api.post('/send-otp', { email });
      alert('OTP sent!');
      navigate('/verify-otp', { state: { email } });
    } catch (error) {
      alert('Error sending OTP');
      console.error(error);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">Sign Up to Raise</h1>
      <div className="signup-box">
        <img src={logo} alt="Logo" className="logo" />
        <p>Enter your details:</p>
        <form className="signup-form">
          <label>Username:<input type="text" /></label>
          <label>Email:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <label>Password:<input type="password" /></label>
          <label>Confirm Password:<input type="password" /></label>
        </form>
      </div>
      <button className="signup-submit" onClick={handleSendOTP}>
        Good to go!
      </button>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';
import '../styles/signup.css';
import logo from '../assets/Logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const res = await api.post('/send-otp', { email });
      alert(res.data.message || 'OTP sent!');
      navigate('/verify-otp', { state: { email } });
    } catch (error: any) {
      const message = error.response?.data?.error || 'Failed to send OTP';
      alert(message);
      console.error(error);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">Welcome back!</h1>
      <div className="signup-box">
        <img src={logo} alt="Logo" className="logo" />
        <p>Enter your email to sign in:</p>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <label>Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </form>
      </div>
      <button className="signup-submit" onClick={handleSendOTP}>
        Send OTP
      </button>
    </div>
  );
}

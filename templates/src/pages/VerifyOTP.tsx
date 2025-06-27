import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';
import '../styles/signup.css'; // reuse the styling

export default function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [otp, setOTP] = useState('');

  const handleVerify = async () => {
    try {
      await api.post('/verify-otp', { email, otp });
      alert('OTP verified!');
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid or expired OTP.');
      console.error(err);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">Verify OTP</h1>
      <div className="signup-box">
        <p>Enter the OTP sent to your email:</p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="signup-form"
          style={{ textAlign: 'center', padding: '0.5rem 1rem', borderRadius: '1rem' }}
        />
        <button className="signup-submit" onClick={handleVerify}>
          Verify OTP
        </button>
      </div>
    </div>
  );
}

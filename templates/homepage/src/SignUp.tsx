import "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-page">
      <h1 className="signup-title">Sign Up to Raise</h1>

      <div className="signup-box">
        <img src="/logo.png" alt="icon" className="signup-icon" />
        <p>Enter your details:</p>

        <form className="signup-form">
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" />
          </label>
        </form>
      </div>

      <button className="signup-submit">Good to go!</button>
    </div>
  );
}

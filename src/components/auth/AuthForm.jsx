import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function AuthForm() {
  const router = useNavigate();

  function handleLogin() {
    router('/marketplace');
  }

  const container = useRef(null);

  function handleSwitchToSignUp() {
    container.current.classList.add('sign-up-mode');
  }

  function handleSwitchToLogin() {
    container.current.classList.remove('sign-up-mode');
  }

  return (
    <div className="container" ref={container}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={handleLogin} />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione.
              Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSwitchToSignUp}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad
              deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSwitchToLogin}>
              Login
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Header.css';
import Logo from '../../assets/img/AeroWave.png';
import openButton from '../../assets/icons/open.png';
import closeButton from '../../assets/icons/closed.png';
import Modal from '../modal/Modal';
import useAuth from '../../hooks/useAuth';

function Header() {
  const { signin, signup, signed } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [buttonImage, setButtonImage] = useState(openButton);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConf, setSignupPasswordConf] = useState("");
  const [error, setError] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setButtonImage(isOpen ? openButton : closeButton);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setButtonImage(openButton);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
    setLoginEmail("");
    setLoginPassword("");
  };

  const openSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      const errorMsg = "Fill in all the fields.";
      setError(errorMsg);
      toast.warn(errorMsg);
      return;
    }

    const res = signin(loginEmail, loginPassword);

    if (res) {
      setError(res);
      toast.error(res);
      return;
    }

    toast.success("Login successful!");
    setShowLoginModal(false); 
    navigate("/MyAccount");
  };

  const handleSignup = () => {
    if (!signupEmail || !signupPassword || !signupPasswordConf) {
      const errorMsg = "Fill in all the fields.";
      setError(errorMsg);
      toast.warn(errorMsg);
      return;
    } else if (signupPassword !== signupPasswordConf) {
      const errorMsg = "Passwords are not the same.";
      setError(errorMsg);
      toast.warn(errorMsg);
      return;
    }

    const res = signup(signupEmail, signupPassword);

    if (res) {
      setError(res);
      toast.error(res);
      return;
    }

    toast.success("User registered successfully!");
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleAccountClick = () => {
    navigate("/MyAccount");
  };

  return (
    <header>
      <nav>
        <Link to="/"><img className='logo' src={Logo} alt="Logo" /></Link>

        <ul className='navList'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/ourProducts"><li>Our Products</li></Link>
          <Link to="/aboutUs"><li>About Us</li></Link>
        </ul>

        <div className='mobileIcon'>
          <button onClick={toggleMenu}><img className="icon" src={buttonImage} alt="Menu Icon" /></button>
        </div>

        {signed ? (
          <p onClick={handleAccountClick} className="loginButton">
            Account
          </p>
        ) : (
          <p onClick={openLoginModal} className="loginButton">
            Login
          </p>
        )}
      </nav>

      <div className={isOpen ? 'mobileMenu open' : 'mobileMenu'}>
        <ul className='navList'>
          <Link to="/" onClick={closeMenu}><li>Home</li></Link>
          <Link to="/ourProducts" onClick={closeMenu}><li>Our Products</li></Link>
          <Link to="/aboutUs" onClick={closeMenu}><li>About Us</li></Link>
        </ul>
      </div>

      <Modal path="C:\Log in" isOpen={showLoginModal} onClose={() => {setShowLoginModal(false); setLoginEmail(""); setLoginPassword("");}}>
        <div>
          <form className='form'>
            <div>
              <p className='insertText'>Email</p>
              <input
                id="loginEmail"
                className='textInput'
                type="email"
                onChange={(e) => [setLoginEmail(e.target.value), setError("")]}
              />
            </div>
            <div>
              <p className='insertText'>Password</p>
              <input
                id="loginPassword"
                className='textInput'
                type="password"
                onChange={(e) => [setLoginPassword(e.target.value), setError("")]}
              />
            </div>
            <button type='button' className='buttonSend' onClick={handleLogin}>Log in</button>
            <p className='insertText sign'>Don't have an account? <span onClick={openSignupModal} className="modalSwitch">Sign up</span></p>
          </form>
        </div>
      </Modal>

      <Modal path="C:\Sign Up" isOpen={showSignupModal} onClose={() => setShowSignupModal(false)}>
        <div>
          <form className='form'>
            <div>
              <p className='insertText'>Email</p>
              <input
                id="signupEmail"
                className='textInput'
                type="email"
                onChange={(e) => [setSignupEmail(e.target.value), setError("")]}
              />
            </div>
            <div>
              <p className='insertText'>Password</p>
              <input
                id="signupPassword"
                className='textInput'
                type="password"
                onChange={(e) => [setSignupPassword(e.target.value), setError("")]}
              />
            </div>
            <div>
              <p className='insertText'>Confirm password</p>
              <input
                id="confirmPassword"
                className='textInput'
                type="password"
                onChange={(e) => [setSignupPasswordConf(e.target.value), setError("")]}
              />
            </div>
            <button type='button' className='buttonSend' onClick={handleSignup}>Sign up</button>
            <p className='insertText sign'>Already have an account? <span onClick={openLoginModal} className="modalSwitch">Log in</span></p>
          </form>
        </div>
      </Modal>
    </header>
  );
}

export default Header;

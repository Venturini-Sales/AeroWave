import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../assets/img/AeroWave.png'
import openButton from '../assets/icons/open.png'
import closeButton from '../assets/icons/closed.png'


function Header() {

const [isOpen, setIsOpen] = useState(false)
const [buttonImage, setButtonImage] = useState(openButton);

const toggleMenu = () => {
  setIsOpen(!isOpen);
  setButtonImage(isOpen ? openButton : closeButton);
}

const closeMenu = () => {
  setIsOpen(false);
  setButtonImage(openButton);
}

  return (
    <header>
      <nav>

        <Link to="/"><img className='logo' src={Logo} alt="Logo"/></Link>

        <ul className='navList'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/ourProducts"><li>Our Products</li></Link>
        <Link to="/aboutUs"><li>About Us</li></Link>
        </ul>

        <div className='mobileIcon'>
          <button onClick={toggleMenu}><img className="icon" src={buttonImage}/></button>
        </div>

      </nav>

      <div className={isOpen ? 'mobileMenu open' : 'mobileMenu'}>

      <ul className='navList'>
        <Link to="/" onClick={closeMenu}><li>Home</li></Link>
        <Link to="/ourProducts" onClick={closeMenu}><li>Our Products</li></Link>
        <Link to="/aboutUs" onClick={closeMenu}><li>About Us</li></Link>
      </ul>

      </div>

    </header>
  )
}

export default Header

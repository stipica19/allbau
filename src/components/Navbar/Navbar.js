import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { navbar } from '../../data/data-navbar';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="headerfix fix-navbar">
        <p>Linz 8a, 4452 Donau</p>
        <a className="email" href="mailto: office@all-bau.at">
          <MailOutlineIcon /> office@all-bau.at
        </a>{' '}
        <a href="tel:123-456-7890">
          <LocalPhoneOutlinedIcon /> +43 23241 4343 433
        </a>
      </header>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              src="./images/logo.png"
              height="auto"
              width="auto"
              className="logo"
              alt="allbau"
            />
          </NavLink>

          <div className="nav-icon" onClick={handleToggle}>
            <nav className="navBar">
              <button>
                {navbarOpen ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </button>
            </nav>
          </div>

          <ul className={navbarOpen ? 'nav-menu active' : 'nav-menu'}>
            {navbar.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link
                  className="nav-links"
                  activeclassName="active"
                  to={item.label}
                >
                  {item.path}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

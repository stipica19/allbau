import React, { useState } from 'react';
import './Navbar.css';
import { menuItems } from '../../data/menuItems';
import MenuItems from './MenuItems';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
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
        <a className="tel" href="tel:123-456-7890">
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
          <ul
            className={
              navbarOpen ? 'nav-menu menus active' : 'nav-menu menus'
            }
          >
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;

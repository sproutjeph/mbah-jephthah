import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.scss';
const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const openMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h4>
          J-<span>Sprout</span>
        </h4>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <FaBars onClick={openMenu} />

        <div className={`${toggle ? '' : 'show'}`}>
          <FaTimes onClick={closeMenu} />
          <ul>
            {['home', 'about', 'work', 'skills', 'contact'].map(
              (item, index) => (
                <li key={index}>
                  <a onClick={closeMenu} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

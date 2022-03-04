import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';
const Navbar = () => {
  const links = ['home', 'about', 'work', 'skills', 'contact'];
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h4>
          J-<span>Sprout</span>
        </h4>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {links.map((item, index) => (
          <li className="app__flex p-text" key={index}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <a onClick={() => setToggle(true)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

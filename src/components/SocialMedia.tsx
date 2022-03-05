import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/jephthah-mbah-71244263/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/sproutjeph" target="_blank">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://web.facebook.com/jephthah.mbah/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;

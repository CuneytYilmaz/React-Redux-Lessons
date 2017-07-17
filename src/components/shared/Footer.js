import React from 'react';

import '../style/Footer.css';

const Footer = () =>
  <footer className="Footer">
    <nav className="Footer-menu">
      <a
        className="Footer-menu__item"
        href="https://github.com/CuneytYilmaz/react-redux-lessons"
        target="_blank"
        rel="noopener noreferrer"
      >
        kaynağı görüntüle
      </a>

      <a
        className="Footer-menu__item"
        href="https://twitter.com/CuneytYilmazz"
        target="_blank"
        rel="noopener noreferrer"
      >
        @CuneytYilmazz
      </a>

      <a
        className="Footer-menu__item"
        href="https://www.instagram.com/cuneytylmz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @cuneytylmz
      </a>

      <a
        className="Footer-menu__item"
        href="https://www.linkedin.com/in/cuneytyilmaz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @cuneytyilmaz
      </a>
    </nav>
  </footer>;

export default Footer;

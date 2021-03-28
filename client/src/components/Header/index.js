import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import Navigation from '../Nav';

function Header() {
  return (
    <header>
      <Link className="header-link" to="/">
        <h1>Critter</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;

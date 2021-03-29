import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import Navigation from '../Nav';

function Header() {
  return (
    <header>
      <Link className="header-link p-0" to="/">
        <h1 className="logo-header">Critter</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;

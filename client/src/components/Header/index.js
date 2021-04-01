import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import headerLogo from '../../images/headerLogo.png';

import Navigation from '../Nav';

function Header() {
  return (
    <header className="header pt-2">
      <Col xs={10} md={3} className="mt-3">
      <Link className="header-link p-0" to="/">
        <Image src={headerLogo} alt="critter tails logo" width="100%" height="100%"></Image>
      </Link>
      </Col>
      <Navigation />
    </header>
  );
}

export default Header;

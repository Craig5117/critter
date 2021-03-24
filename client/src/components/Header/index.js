import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './header.css'

import Navigation from '../Nav'

function Header () {
    return (
        <header>
            <Link to="/">
                <h1>Critter</h1>
            </Link>
            <Navigation />
        </header>
    )
}

export default Header;
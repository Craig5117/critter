import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// see the React Bootstrap docs on the Navbar component,
// especially the section labelled color schemes
// add as={Link} to Nav.Link so it will work with react-router
// <Nav.Link as={Link}></Nav.Link>

function Navigation() {
    return (
        <div>Navbar here</div>
    )
}

export default Navigation;
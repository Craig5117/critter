import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
// see the React Bootstrap docs on the Navbar component,
// especially the section labelled color schemes
// add as={Link} to Nav.Link so it will work with react-router
// <Nav.Link as={Link}></Nav.Link>

function Navigation() {
  return (
    <div className="nav">
      <Navbar>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </div>
  );
}

export default Navigation;

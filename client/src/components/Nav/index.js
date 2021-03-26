import React from 'react';
// import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
// import './nav.css'
// import Col from 'react-bootstrap/Col';
// see the React Bootstrap docs on the Navbar component,
// especially the section labelled color schemes
// add as={Link} to Nav.Link so it will work with react-router
// <Nav.Link as={Link}></Nav.Link>

function Navigation() {
    const dispatch = useDispatch();
    function handleClick (id) {
        dispatch({
            type: 'pets/UPDATE_CURRENT_TYPE',
            payload: id,
        })
    }

    const petTypes = [{_id: 123, name: "Dog"}, {_id: 456, name: "Cat"}, {_id: 789, name: "Fish"}]
  return (
    <div className="nav">
      <Navbar className="w-100">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">My Profile</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search by Pet's Username</Button>
        </Form>
      </Navbar>
     <div className="d-flex justify-content-end w-100 pr-5">
     
        <NavDropdown title="View by Pet Type" id="basic-nav-dropdown">
            {petTypes.map((type) => (
                <NavDropdown.Item key={type._id} onSelect={() => {
                    handleClick(type._id)
                }}>{type.name}</NavDropdown.Item>
            ))}
        </NavDropdown>
     </div>
    </div>
  );
}

export default Navigation;

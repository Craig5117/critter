import React, { useEffect} from 'react';
// import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PET_TYPES } from '../../utils/queries';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';
// import './nav.css'
// import Col from 'react-bootstrap/Col';
// see the React Bootstrap docs on the Navbar component,
// especially the section labelled color schemes
// add as={Link} to Nav.Link so it will work with react-router
// <Nav.Link as={Link}></Nav.Link>

function Navigation() {
   let location = useLocation().pathname;
  const dispatch = useDispatch();
  function handleClick(name) {
    dispatch({
      type: 'pets/UPDATE_CURRENT_TYPE',
      payload: name,
    });
  }

  function handleSearch(event) {
    event.preventDefault()
    const searchedName = event.target.querySelector('#search-bar').value.trim()
    dispatch({
      type: 'pets/UPDATE_CURRENT_NAME',
      payload: searchedName,
    })
    console.log(searchedName)
  }

  function clearPetName() {
    dispatch({
      type: 'pets/UPDATE_CURRENT_NAME',
      payload: '',
    })
    document.querySelector('#search-bar').value = '';
  }
  function clearFilter() {
    dispatch({
      type: 'pets/UPDATE_CURRENT_TYPE',
      payload: '',
    });
  }
  const { loading: loadingTypes, data: types } = useQuery(QUERY_PET_TYPES);

  // this effect runs the redux dispatch to update the petTypes
  useEffect(() => {
    if (types) {
      types.petTypes.forEach((type) => {
        idbPromise('petTypes', 'put', type);
      });
      dispatch({
        type: 'pets/UPDATE_PET_TYPES',
        payload: types.petTypes,
      });
    } else if (!loadingTypes) {
      idbPromise('petTypes', 'get').then((idbTypes) => {
        dispatch({
          type: 'pets/UPDATE_PET_TYPES',
          payload: idbTypes,
        });
      });
    }
  }, [types, loadingTypes, dispatch]);

  const petTypes = useSelector((state) => state.pets.petTypes);
  // this would be a good case for redux to handle
  const showPetFilter = useSelector((state) => state.nav.showPetFilter);
  const showSearchBar = useSelector((state) => state.nav.showSearchBar);
  useEffect(() => {
    console.log(location);
    if (location === '/') {
      dispatch({
        type: 'nav/SHOW_PET_FILTER',
        payload: true,
      });
      dispatch({
        type: 'nav/SHOW_SEARCH_BAR',
        payload: true,
      });
    } else if (showPetFilter && location !== '/') {
      dispatch({
        type: 'nav/SHOW_PET_FILTER',
        payload: false,
      });
      dispatch({
        type: 'nav/SHOW_SEARCH_BAR',
        payload: false,
      });
    }
  }, [location, dispatch, showPetFilter]);

  function handleNavDisplay() {}

  return (
    <div className="nav">
      <Navbar className="w-100" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onClick={handleNavDisplay}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {!Auth.loggedIn() && (
              <>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
            {Auth.loggedIn() && (
              <>
                <Nav.Link as={Link} to="/profile">
                  My Profile
                </Nav.Link>
                <Nav.Link href="/" onClick={() => Auth.logout()}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
              {showSearchBar &&
                <Form inline onSubmit={handleSearch}>
                <Button className="button" onClick={clearPetName}>X</Button>
                <FormControl name="name" type="text" placeholder="Search" className="mr-sm-2" id="search-bar"/>
                <Button className="button" type="submit">Search by Pet's Username</Button>
              </Form>
              }
      </Navbar>
      <div className="d-flex justify-content-end w-100 pr-5">
        {showPetFilter && (
          <NavDropdown title="View by Pet Type" id="basic-nav-dropdown">
            <NavDropdown.Item
              onSelect={() => {
                clearFilter();
              }}
            >
              All
            </NavDropdown.Item>
            {petTypes.map((type) => (
              <NavDropdown.Item
                key={type._id}
                onSelect={() => {
                  handleClick(type.name);
                }}
              >
                {type.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        )}
      </div>
    </div>
  );
}

export default Navigation;

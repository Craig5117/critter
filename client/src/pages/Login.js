import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_PET } from '../utils/mutations';
import Auth from '../utils/auth';

import './pages.css';



function Login () {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({ email: '', password: ''})
  const [login, {error}] = useMutation(LOGIN_PET);
  
  function handleChange (event) {
    const { name, value} = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    // console.log(value)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true)
      const { data } = await login({
        variables: {...formState } 
      });
      Auth.login(data.login.token);
      // console.log(formState)
    } catch (e) {
      console.error(e)
    }
  };
   return(
     
      <Container className="pb-5">
        <h3>Login</h3>
      <Form className="form" noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Enter your email address</Form.Label>
          <Form.Control required name="email" type="email" placeholder="name@example.com" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Enter a password that is at least 8 characters</Form.Label>
          <Form.Control required name="password" type="password" placeholder="Password" onChange={handleChange}/>
        </Form.Group>
        <Button className="button" variant="primary" type="submit">
          Submit
        </Button>
        {error && <div>Login failed</div>}
      </Form>
      </Container>
   ) 
}

export default Login;
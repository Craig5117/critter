import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_PET } from '../../utils/mutations';
import Auth from '../../utils/auth';

import './login-signup.css';
import { Redirect } from 'react-router';

function Login() {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_PET);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    // console.log(value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
      // console.log(formState)
    } catch (e) {
      console.error(e);
    }
  };

  if (Auth.loggedIn()) {
    return <Redirect to="/profile" />
  }
  
  return (
    <div className="w-100 m-0">
      <Col xs={11} md={6} className="pb-5 center-margin">
        <h3>Login</h3>
        <Form
          className="form"
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          <Form.Group controlId="formEmail">
            <Form.Label>Enter your email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>
              Enter a password that is at least 8 characters
            </Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="button center-margin" type="submit">
            Submit
          </Button>
          {error && <div>Login failed</div>}
        </Form>
      </Col>
    </div>
  );
}

export default Login;

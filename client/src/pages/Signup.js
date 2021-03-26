import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../utils/helpers';
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_PET } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup () {
    return(
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Enter your email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter a password that is at least 8 characters</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    ) 
}

export default Signup;
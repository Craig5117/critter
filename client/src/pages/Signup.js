import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import { validateEmail } from '../utils/helpers';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_PET } from '../utils/mutations';
import { QUERY_PET_TYPES } from '../utils/queries'
import Auth from '../utils/auth';

import './pages.css';

function Signup() {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({ email: '', username: '', password: '', sex: '', age: '', petType: '', bio: ''})
  const [addPet, {error}] = useMutation(ADD_PET);
  const { data: types } = useQuery(QUERY_PET_TYPES);
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    if (types) {
      setPetTypes(types.petTypes)
    }
  }, [types, setPetTypes])


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
      const { data } = await addPet({
        variables: {...formState } 
      });
      Auth.login(data.addPet.token);
      // console.log(formState)
    } catch (e) {
      console.error(e)
    }
  };
  return (
    <Container className="pb-5">
      <h3>Sign Up</h3>
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
    <form className="form">
      <Form.Group controlId="formEmail">
        <Form.Label>Enter your email address</Form.Label>
        <Form.Control required name="email" type="email" placeholder="name@example.com" onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="formUsername">
        <Form.Label>Enter a unique username</Form.Label>
        <Form.Control required name="username" type="text" placeholder="Username" onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Enter a password that is at least 8 characters</Form.Label>
        <Form.Control required name="password" type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="formMaleOrFemale">
        <Form.Label>Are you a male or female pet?</Form.Label>
        <Form.Control required as="select" name="sex" onChange={(handleChange)}>
          <option defaultValue="">
          </option>
          <option>male</option>
          <option>female</option>
        </Form.Control>
        <Form.Group controlId="formAge">
        <Form.Label>How old are you in human years?</Form.Label>
        <Form.Control required type="text" placeholder="Age" onChange={handleChange}/>
      </Form.Group>
      </Form.Group>
      <Form.Group controlId="formPetType">
        <Form.Label>What type of pet are you?</Form.Label>
        <Form.Control required name="petType" as="select" onChange={handleChange}>
          <option defaultValue="" value="">
          </option>
          {petTypes.map((type) => (
            <option key={type._id}>{type.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group  controlId="formBiography">
        <Form.Label>Tell everyone a little bit about yourself</Form.Label>
        <Form.Control required name="bio" as="textarea" rows={3} onChange={handleChange}/>
      </Form.Group>
      <Button className="button" variant="primary" type="submit">
        Submit
      </Button>
      {error && <div>Sign up failed</div>}
      </form>
    </Form>
    </Container>
  );
}

export default Signup;

import React, { useState } from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

      <Container>
        <Button className="m-4" variant='dark' href='/login' size='lg' fluid>
              Go to Login
            </Button>
         <Row className='justify-content-md-center'>
     <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3">
       <Form.Label htmlFor='firstName'>Firstname</Form.Label>
       <Form.Control 
       type="text"
       placeholder="Enter your first name"
       name = 'firstName'
       onChange={handleChange}
       value={formState.firstName}
       required  />
       <Form.Control.Feedback type='invalid'>
         Enter your first name
       </Form.Control.Feedback>
     </Form.Group>
     <Form.Group className="mb-3">
       <Form.Label htmlFor='lastName'>Lastname</Form.Label>
       <Form.Control 
       type="text"
       placeholder="Enter your last name"
       name = 'lastName'
       onChange={handleChange}
       value={formState.lastName}
       required  />
       <Form.Control.Feedback type='invalid'>
         Enter your last name
       </Form.Control.Feedback>
     </Form.Group>
     <Form.Group className="mb-3">
       <Form.Label htmlFor='email'>Email</Form.Label>
       <Form.Control 
       type="email"
       placeholder="Enter your email"
       name = 'email'
       onChange={handleChange}
       value={formState.email}
       required  />
       <Form.Control.Feedback type='invalid'>
         Enter your email
       </Form.Control.Feedback>
     </Form.Group>
     <Form.Group className="mb-3">
       <Form.Label htmlFor='password'>Password</Form.Label>
       <Form.Control 
       type="password"
       placeholder="Enter your password"
       name = 'password'
       onChange={handleChange}
       value={formState.password}
       required  />
       <Form.Control.Feedback type='invalid'>
         Enter your password
       </Form.Control.Feedback>
     </Form.Group>
     <Button
     disabled={!(formState.email && formState.password && formState.firstName && formState.lastName)}
     type='submit'
     variant='dark'>
         Sign Up
     </Button>
     </Form>
    
     </Row>
     </Container>
  );
}

export default Signup;

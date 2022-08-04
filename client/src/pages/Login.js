import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Form } from 'react-bootstrap';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Button className="m-4" variant='dark' href='/signup' size='lg' fluid>
              Back to Signup
            </Button>
        <Row className='justify-content-md-center'>
        
    <Form onSubmit={handleFormSubmit}>
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
            {error ? (
                <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                </div>
            ) : null}
      <Button
        disabled={!(formState.email && formState.password)}
        type='submit'
        variant='dark'>
            Login
        </Button>
        </Form>
       
        </Row>
        </Container>
  );
}

export default Login;

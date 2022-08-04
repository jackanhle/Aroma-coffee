import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const NoMatch = () => {
  return (
    <Container fluid>
            <Row>
                <Col className='text-center'>
                <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
                </Col>
            </Row>
        </Container>
    
  );
};

export default NoMatch;

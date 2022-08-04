import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
function Home (props) {
    return (
        <Container fluid>
        <Row>
          <Col className='text-center'>
          <Image src="./images/menu.jpg" alt="display" fluid/>
          <h1 className='mt-5'>Welcome to Aroma Mocha</h1>
          <Button className='mt-3' variant ="dark" href='/menu' size="lg">
          Order</Button>
          </Col>
        </Row>
      </Container>
    );
};
export default Home;
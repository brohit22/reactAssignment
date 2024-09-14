import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero_logo from '../assets/images/Hero_Section.svg';

const HeroSection = () => {
  return (
    <section className='hero  py-5' style={{ backgroundColor: '#FFF5F5' }}>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <p style={{ color: '#96BB7C', fontSize: '20px' }}>Welcome</p>

            <h1 style={{ fontSize: '4.5rem' }}>Best Learning Opportunities</h1>
            <p style={{ color: 'grey', fontSize: '20px' }}>
              Our goal is to make online <br />
              education work for everyone.
            </p>

            <Button
              style={{ backgroundColor: '#96BB7C', border: 'none' }}
              className='me-2'
            >
              Join Us
            </Button>
            <Button
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #96BB7C',
                color: '#96BB7C',
              }}
            >
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <img src={hero_logo} alt='Hero' className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

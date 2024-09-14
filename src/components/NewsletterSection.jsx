import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const NewsletterSection = () => {
  // State to store email input and error message
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setErrorMessage('');
      alert('Subscription successful!');
    } else {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  return (
    <section
      className='newsletter-section py-5'
      style={{ backgroundColor: '#FFF5F5' }}
    >
      <Container>
        <Row className='text-center mb-4'>
          <Col>
            <p style={{ color: '#8BB174', fontWeight: 'bold' }}>Newsletter</p>
            <h2 className='mb-3' style={{ fontWeight: 'bold' }}>
              Watch our Courses
            </h2>
            <p className='text-muted'>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={6}>
            <Form className='d-flex' onSubmit={handleSubmit}>
              <Form.Control
                type='email'
                placeholder='Your Email'
                className='me-2'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errorMessage}
                style={{
                  borderRadius: '5px 0 0 5px',
                  borderColor: errorMessage ? 'red' : '#8BB174',
                  backgroundColor: '#fff',
                }}
              />
              <Button
                variant='success'
                type='submit'
                style={{
                  backgroundColor: '#8BB174',
                  borderColor: '#8BB174',
                  borderRadius: '0 5px 5px 0',
                }}
              >
                Subscribe
              </Button>
            </Form>
            {errorMessage && (
              <div
                style={{ color: 'red', marginTop: '5px', fontSize: '0.875rem' }}
              >
                {errorMessage}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsletterSection;

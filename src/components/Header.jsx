import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#FFF5F5' }} expand='lg'>
      <Container>
        <Navbar.Brand href='#'>Brandname</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#product'>Product</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
          <Button
            style={{
              backgroundColor: 'transparent',
              border: '2px solid transparent',
              color: '#96BB7C',
              fontSize: '1rem',
            }}
            className='ms-2'
          >
            Login
          </Button>
          <Button
            style={{
              backgroundColor: '#96BB7C',
              border: '2px solid #96BB7C',
              color: '#fff',
            }}
            className='ms-2'
          >
            Join Us <span className='arrow'>&gt;</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

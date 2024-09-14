import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className='bg-light py-4'>
      <Container>
        <Row>
          {/* Column 1: Company Info */}
          <Col md={2}>
            <h5>Company Info</h5>
            <ul className='list-unstyled'>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </Col>

          {/* Column 2: Legal */}
          <Col md={2}>
            <h5>Legal</h5>
            <ul className='list-unstyled'>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </Col>

          {/* Column 3: Features */}
          <Col md={2}>
            <h5>Features</h5>
            <ul className='list-unstyled'>
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </Col>

          {/* Column 4: Resources */}
          <Col md={2}>
            <h5>Resources</h5>
            <ul className='list-unstyled'>
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </Col>

          {/* Column 5: Get in Touch */}
          <Col md={4}>
            <h5>Get In Touch</h5>
            <ul className='list-unstyled'>
              <li>
                <i className='fas fa-phone'></i> (480) 555-0103
              </li>
              <li>
                <i className='fas fa-map-marker-alt'></i> 4517 Washington Ave.
                Manchester, Kentucky 39495
              </li>
              <li>
                <i className='fas fa-envelope'></i> debra.holt@example.com
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className='mt-3'>
              <FaFacebook className='me-3' style={{ color: '#8BB174' }} />
              <FaInstagram className='me-3' style={{ color: '#8BB174' }} />
              <FaTwitter style={{ color: '#8BB174' }} />
            </div>
          </Col>
        </Row>

        {/* Footer bottom text */}
        <Row className='mt-4'>
          <Col className='text-center'>
            <p>Made With Love By Figmaland All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Book, Globe } from 'lucide-react';

const PackagesSection = () => {
  return (
    <Container className='my-5'>
      <Row className='mb-3' md={2}>
        <Col>
          <h2 className='display-5 fw-bold'>Affordable Packages</h2>
          <p className='lead'>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <a href='#' className='text-decoration-none text-success learn-more'>
            Learn More <span className='arrow'>&gt;</span>
          </a>
        </Col>
        <Row className='g-4'>
          {['Certified Teacher', 'Expert Instruction'].map((title, index) => (
            <Col md={5} key={index}>
              <div
                className='card h-70 border-0 shadow-sm'
                style={{ minHeight: '250px' }}
              >
                <div className='card-body d-flex flex-column'>
                  <div className='d-flex mb-3'>
                    <div className='me-3 p-3 bg-success bg-opacity-25 rounded'>
                      {index === 0 ? (
                        <Book size={32} className='text-success' />
                      ) : (
                        <Globe size={32} className='text-success' />
                      )}
                    </div>
                    <div className='flex-grow-1'>
                      <hr className='border-2 border-danger my-2' />
                      <h5 className='card-title'>{title}</h5>
                    </div>
                  </div>
                  <p className='card-text text-muted mt-auto'>
                    The gradual accumulation of information about teaching
                    techniques and global perspectives.
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PackagesSection;

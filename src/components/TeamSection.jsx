import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imgSrc: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section
      className='team-section py-5'
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Container>
        <Row className='text-center mb-5'>
          <Col>
            <p style={{ color: '#8BB174', fontWeight: 'bold' }}>Team</p>
            <h2 className='mb-3' style={{ fontWeight: 'bold' }}>
              Get Quality Education
            </h2>
            <p className='text-muted'>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </Col>
        </Row>
        <Carousel>
          {teamMembers.map((member, index) => (
            <Carousel.Item key={index}>
              <Row className='justify-content-center'>
                {teamMembers.map((member, i) => (
                  <Col md={3} key={i}>
                    <Card
                      className='text-center shadow-sm'
                      style={{ borderRadius: '15px' }}
                    >
                      <Card.Img
                        variant='top'
                        src={member.imgSrc}
                        style={{
                          borderTopLeftRadius: '15px',
                          borderTopRightRadius: '15px',
                        }}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>
                          {member.name}
                        </Card.Title>
                        <Card.Text className='text-muted'>
                          {member.profession}
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                          <Button variant='link' style={{ color: '#8BB174' }}>
                            <FaFacebook />
                          </Button>
                          <Button variant='link' style={{ color: '#8BB174' }}>
                            <FaInstagram />
                          </Button>
                          <Button variant='link' style={{ color: '#8BB174' }}>
                            <FaTwitter />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TeamSection;

import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

function PetCard() {
  return (
<Container className="d-flex flex-wrap">
    <Col xs={3} md={3} lg={3}>
    <Card className="petCard">
      
        
          
      <Card.Img variant="top" 
              className="w-100"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
            />    
      <Card.Body>
        <p>ElsaMoo123 {'username'}</p>
        <i className="fas fa-venus"></i>
            <p>Relationship Status: Not interested</p>
      </Card.Body>
    </Card>
    </Col>
  
    </Container>
  );
}

export default PetCard;

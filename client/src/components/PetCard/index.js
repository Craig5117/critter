import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

function PetCard() {
  return (
<Container className="d-flex flex-wrap">
    <Col xs={11} md={5} lg={4}>
    <Card className="petCard">
      <div className="d-flex flex-wrap px-4">
        <Col xs={11} md={11} lg={6}>
          <div>
            <Image
              className="w-100"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
              roundedCircle
            />
          </div>
          <div>
            
          </div>
        </Col>
        <Col xs={11} lg={6}>
          <div>
          <p>ElsaMoo123 {'petUsername'}</p>
            <i className="fas fa-venus"></i>
            <p>Age: 7</p>
            <p>Relationship Status: Not interested</p>
          </div>
        </Col>
      </div>
      <Card.Body>
        <Card.Text>
        {'// Bio Here //'}
          My name is Elsa. I am a happy-go-lucky cow from Tennessee. I like long
          and slow walks through fields of grass, eating grass, and watching
          cars pass by while I eat grass.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  
    </Container>
  );
}

export default PetCard;

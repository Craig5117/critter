import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PetCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Row className="px-4">
        <Col xs={3} md={4}>
          <Row>
            <Image
              className="w-100"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
              roundedCircle
            />
          </Row>
          <Row>
            <Card.Title>ElsaMoo123 {'petUsername'}</Card.Title>
          </Row>
        </Col>
        <Col xs={3} md={8}>
          <div>
            <i class="fas fa-venus"></i>
            <p>Age: 7</p>
            <p>Relationship Status: Not interested</p>
          </div>
        </Col>
      </Row>
      <Card.Body>
        <Card.Text>
        {'// Bio Here //'}
          My name is Elsa. I am a happy-go-lucky cow from Tennessee. I like long
          and slow walks through fields of grass, eating grass, and watching
          cars pass by while I eat grass.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PetCard;

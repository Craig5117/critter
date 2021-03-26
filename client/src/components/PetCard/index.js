import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './petCard.css'

function PetCard(props) {
    const { pet } = props;
    function renderSexSymbol() {
        if(pet.sex === 'female') {
            return (
                <i className="fas fa-venus"></i>
            )
        }
        return (
            <i className="fas fa-mars"></i>
        )
    }
  return (

    <Col xs={2} md={2} lg={3} className="px-1">
    <Card className="petCard">
      
        
          
      <Card.Img variant="top" 
              className="w-100"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
            />    
      <Card.Body>
        <p className="username mb-1">{pet.username}</p>
        {renderSexSymbol()}
        <p className="mb-1">{pet.petType}</p>
        <p className="rel-status"><i className="fas fa-heart"></i>: {pet.relationshipStatus}</p>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default PetCard;

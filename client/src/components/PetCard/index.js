import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
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

    <Col xs={6} md={4} lg={3} className="px-1">
    <Card className="petCard">
      
      <Card.Header className="username mb-1">{pet.username}</Card.Header>
          
      <Card.Img variant="top" 
              className="image w-100"
              src={pet.image}
            />    
      <Card.Body className="petBody">
        {/* <p className="username mb-1">{pet.username}</p> */}
        {renderSexSymbol()}
        <p className="mb-1">{pet.petType}</p>
        <p className="rel-status"><i className="heart fas fa-heart"></i>: {pet.relationshipStatus}</p>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default PetCard;

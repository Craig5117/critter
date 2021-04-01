import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import './petCard.css'


function PetCard(props) {
    const { pet } = props;
    function renderSexSymbol() {
        if(pet.sex === 'female') {
            return (
                <i className="fas fa-venus female-card"></i>
            )
        }
        return (
            <i className="fas fa-mars male-card"></i>
        )
    }
  return (

    <Col xs={6} md={4} lg={3} className="px-1">
      <Link className="p-0" to={`/profile/${pet._id}`}>
    <Card className="petCard">
      
      <Card.Header className="username mb-1">{pet.username}</Card.Header>
          
      <div className="image-container"><Card.Img variant="top" 
              className="image"
              src={pet.image}
              width="100%"
              height="100%"
              alt={`${pet.username}'s profile image`}
            /> </div>   
      <Card.Body className="petBody">
        {renderSexSymbol()}
        <p className="mb-1">{pet.petType}</p>
        <p className="rel-status"><i className="heart-card fas fa-heart"></i><br /><span>{pet.relationshipStatus}</span></p>
      </Card.Body>
    </Card>
    </Link>
    </Col>
  );
}

export default PetCard;

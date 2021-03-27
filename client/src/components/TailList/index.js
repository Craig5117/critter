import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

function TailsList (props) {
   const { tail } = props;
   return(
    <div>   
  
    <Card >
      <div className="d-flex flex-wrap px-4">
        <Col xs={7} md={4} lg={2}>
          <div>
            <Image
              className="w-100"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
              roundedCircle
            />
          </div>
        </Col>
        <Col >
        <Card.Body>
        <Card.Text>
        {tail.tailText}
        </Card.Text>
      </Card.Body>
        </Col>
      </div>
      <Card.Footer><p>{tail.username}</p></Card.Footer>
    </Card>
    
   </div>
   ) 
}

export default TailsList;
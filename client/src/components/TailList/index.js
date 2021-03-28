import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

import './tailList.css';

function TailsList (props) {
   const { tail } = props;
   return(
    <div>   
  
    <Card className="tailCard">
      <div className="d-flex flex-wrap px-4 card-background">
        <Col xs={8} md={5} lg={2} className="tailsCol">
          <div className="postedBy justify-content-between">
            <Image
              className="w-100"
              src={tail.postedBy.image}
              roundedCircle
            />
            <span>{tail.postedBy.username}</span>
          </div>
        </Col>
        <Col >
        <Card.Body>
        <Card.Text className="tailText">
        {tail.tailText}
        </Card.Text>
      </Card.Body>
        </Col>
      </div>
      <Card.Footer className="d-flex"><span>{tail.createdAt}</span></Card.Footer>
    </Card>
    
   </div>
   ) 
}

export default TailsList;
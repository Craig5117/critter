import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './tailList.css';


function TailsList(props) {
  const { dbTails } = props;
  return (
    <div>
    {dbTails &&
      dbTails.map((tail) => (
        <div key={Math.random().toString(36).substr(2, 9)}>
          <Link to={`/tail/${tail._id}`}>
      <Card className="tailCard">
      <Container className="card-background">
     
          <Col sm={4} className="postedBy justify-content-between">
              <Image
                // className="w-100"
                width="50"
                height="50"
                src={tail.postedBy.image}
                roundedCircle
              />
              <span>{tail.postedBy.username}</span>
          </Col>
          <Col sm={8} className="tailText">
          {tail.tailText}
          </Col>
     
      </Container>
      <Card.Footer className="d-flex createdAt"><span>{tail.createdAt}</span></Card.Footer>

      </Card>
      </Link>
          </div>
        ))}
    </div>
  )
}

export default TailsList;

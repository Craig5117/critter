import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './tailList.css';


function TailsList(props) {
  const { tail } = props;
  return (
    <div>
        <div>
          <Link className="tailList-link" to={`/tail/${tail._id}`}>
      <Card className="tailCard">
      <Container className="card-background">
     
          <Col sm={4} className="postedBy pl-lg-5">
              <Image
                // className="w-100"
                width="50"
                height="50"
                alt={`${tail.postedBy.username}'s profile image`}
                src={tail.postedBy.image}
                roundedCircle
              />
              <span className="tail-username ml-2">{tail.postedBy.username}</span>
          </Col>
          <Card.Body className="tailText p-0">            
            <Card.Text>
          {tail.tailText}
          </Card.Text>
          </Card.Body>
     
      </Container>
      <Card.Footer className="createdAt d-flex justify-content-between px-3"><span>{tail.createdAt}</span><span>Comments: {tail.commentCount}</span></Card.Footer>

      </Card>
      </Link>
          </div>
    </div>
  )
}

export default TailsList;

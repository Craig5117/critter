import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';

import './tailList.css';

function TailsList(props) {
  const { tail } = props;
  return (
  

    <div>
      <Card className="tailCard">
      <Container className="card-background">
        <Row>
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
        </Row>
      </Container>
      <Card.Footer className="d-flex createdAt"><span>{tail.createdAt}</span></Card.Footer>

      </Card>

      {/* <Card className="tailCard border">
        <div className="d-flex flex-wrap px-4 card-background">
          <Col xs={8} md={5} lg={2} className="tailsCol">
            <div className="postedBy justify-content-between">
              <Image
                // className="w-100"
                width="70"
                height="70"
                src={tail.postedBy.image}
                roundedCircle
              />

            </div>
          </Col>
          <Col>
            <span>{tail.postedBy.username}</span>
          </Col>
          <Col >
            <Card.Body>
              <Card.Text className="tailText">
                {tail.tailText}
              </Card.Text>
            </Card.Body>
          </Col>
        </div>
        <Card.Footer className="d-flex createdAt"><span>{tail.createdAt}</span></Card.Footer>
      </Card> */}

    </div>
  )
}

export default TailsList;
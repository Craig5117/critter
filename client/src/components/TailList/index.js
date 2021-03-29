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
     
          <Col sm={4} className="postedBy pl-lg-5">
              <Image
                // className="w-100"
                width="50"
                height="50"
                src={tail.postedBy.image}
                roundedCircle
              />
              <span>{tail.postedBy.username}</span>
          </Col>
          <Card.Body className="tailText p-0">            
            <Card.Text>
          {tail.tailText}
          </Card.Text>
          </Card.Body>
     
      </Container>
      <Card.Footer className="createdAt"><span>{tail.createdAt}</span></Card.Footer>

      </Card>
      </Link>
          </div>
        ))}
    </div>
  )
}

{/* <Link to={`/tail/${tail._id}`}>
              <Card>
                <div className="d-flex flex-wrap px-4 card-background">
                  <Col xs={7} md={4} lg={2}>
                    <div>
                      <Image
                        className="w-100"
                        src={tail.postedBy.image}
                        roundedCircle
                      />
                    </div>
                  </Col>
                  <Col>
                    
                  </Col>
                </div>
                <Card.Footer className="d-flex justify-content-between">
                  <span>{tail.postedBy.username}</span>
                  <span>{tail.createdAt}</span>
                </Card.Footer>
              </Card>
            </Link> */}

export default TailsList;

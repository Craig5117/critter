import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

import './tailList.css';
// ({ image: string, tailText: string, createdAt: string, username: string })
function TailsList(props) {
  const { dbTails } = props;
  return (
    <div>
      {dbTails &&
        dbTails.map((tail) => (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <Link to={`/tail/${tail._id}`}>
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
                    <Card.Body>
                      <Card.Text>{tail.tailText}</Card.Text>
                    </Card.Body>
                  </Col>
                </div>
                <Card.Footer className="d-flex justify-content-between">
                  <span>{tail.postedBy.username}</span>
                  <span>{tail.createdAt}</span>
                </Card.Footer>
              </Card>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default TailsList;

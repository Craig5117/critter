import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_TAIL } from '../utils/queries';
import CommentForm from '../components/CommentForm';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CommentList from '../components/CommentList'
import Auth from '../utils/auth';

function SingleTail(props){
    const { id: tailId } = useParams();

    const { loading, data } = useQuery(QUERY_TAIL, {
        variables: { id: tailId }
        });

    const tail = data?.tail || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
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
                {tail.commentCount > 0 && <CommentList comments = {tail.comments} />}
              </Card>
            {Auth.loggedIn() &&  <CommentForm tailId={tail._id} />}
         
        </div>
    );
}

export default SingleTail;
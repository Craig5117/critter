import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_TAIL } from '../utils/queries';
import CommentForm from '../components/CommentForm';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CommentList from '../components/CommentList';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import './SingleTail.css';

function SingleTail(props) {
  const { id: tailId } = useParams();

  const { loading, data } = useQuery(QUERY_TAIL, {
    variables: { id: tailId },
  });

  const tail = data?.tail || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <div className="d-flex px-4 card-background">
          <Col xs={7} md={4} lg={2}>
            <div className="user-card">
              <Link
                className="p-0 tail-link"
                to={`/profile/${tail.postedBy._id}`}
              >
                <div className="d-flex tail-card">
                  <Col xs={12} className="p-0">
                    <Col>
                      <Card.Title className="tail-title text-white">
                        {tail.postedBy.username}'s Tail{' '}
                      </Card.Title>
                      <span className="tail-date text-white">
                        wagged on {tail.createdAt}
                      </span>
                    </Col>
                    <Col>
                      <Image className="w-100 mt-2" src={tail.postedBy.image} />
                    </Col>
                  </Col>
                  <Col xs={12}>
                    <div className="d-flex parent-text bg-white p-3">
                      <p className="tail-text m-2">
                        {tail.tailText}
                      </p>
                    </div>
                  </Col>
                </div>
              </Link>
            </div>
          </Col>
        </div>

        {tail.commentCount > 0 && <CommentList comments={tail.comments} />}
        {Auth.loggedIn() && <CommentForm tailId={tail._id} />}
      </Card>
    </div>
  );
}

export default SingleTail;

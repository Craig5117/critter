import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_TAIL } from '../../utils/queries';
import CommentForm from '../../components/CommentForm';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CommentList from '../../components/CommentList'
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import './SingleTail.css'

function SingleTail(props){
    const { id: tailId } = useParams();
    const [tail, setTail] = useState({})

    const { loading, data } = useQuery(QUERY_TAIL, {
        variables: { id: tailId }
        });

    useEffect(() => {
      if (data?.tail) {
        setTail(data.tail)
      } else if (!loading) {
        idbPromise('tails', 'get').then((tailData) => {
          const currentTail = tailData.filter((tail) => tail._id === tailId);
          setTail(currentTail[0]);
        });
      }
      // console.log(tail)
    }, [data, loading, tailId, tail])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
          {!loading &&
            <Card>
                
                <div className="d-flex flex-wrap px-4">
                  <Col xs={12} md={4} lg={3}>
                    <div className="user-card">
                    {tail?.postedBy && 
                    <Link className="p-0 tail-link" to={`/profile/${tail.postedBy._id}`}>
                     <Card.Footer className="d-flex tail-card mt-2">
                        <Col className="">
                            <Card.Title className="tail-title text-white">{tail.postedBy.username}'s Tail </Card.Title>
                            <span className="tail-date text-white">wagged on {tail.createdAt}</span>
                        </Col>
                    </Card.Footer>   
                      <Image
                        className="w-100 mt-2"
                        src={tail.postedBy.image}
                        
                      />
                    </Link>}
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={9}>
                    <Card.Body className="d-flex parent-text p-3 mt-2">
                      <Card.Text className="tail-text m-2">{tail.tailText}</Card.Text>
                    </Card.Body>
                  </Col>
                </div>
               
                {tail.commentCount > 0 && <CommentList comments = {tail.comments} />}
                {Auth.loggedIn() &&  <CommentForm tailId={tail._id} />}
              </Card>
            
          }
        </div>
    );
}

export default SingleTail;
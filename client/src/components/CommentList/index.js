import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CommentList = ({ comments }) => {
    return (
        <div className="card mb-3">
        <div className="card-header">
            <span className="ml-3">Comments</span>
        </div>
        <div className="card-body">
            {comments &&
            comments.map(comment => (
                <Card>
                    <Link className="mt-3 ml-3 font-weight-bold" to={`/profile/${comment.username}`}>
                        {comment.username}
                    </Link>
                    <p className="pill m-3" key={comment._id}>
                    {comment.commentText}
                    
                    </p>
                </Card>
            ))}
        </div>
    </div>
    )
};

export default CommentList;
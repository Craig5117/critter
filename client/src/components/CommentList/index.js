import React from 'react';

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
                    <p className="mt-3 ml-3 font-weight-bold">
                        {comment.username}
                    </p>
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
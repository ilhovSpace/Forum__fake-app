import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div className="Comment-item">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <p className="Comment-item__author">Author {comment.email}</p>
    </div>
  );
};

export default CommentItem;

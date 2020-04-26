import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <p>Author {comment.email}</p>
    </div>
  );
};

export default CommentItem;

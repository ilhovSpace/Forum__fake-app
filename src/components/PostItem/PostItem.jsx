import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function PostItem({ post, linkToPost }) {
  return (
    <div className="Post-item">
      <div className="Post-item__body">
        <div className="Post-item__id">Post id: {post.id}</div>
        <div className="Post-item__title">Title Post: {post.title}</div>
        <div className="Post-item__author">Author (user id): {post.userId}</div>
        <div className="Post-item__post">{post.body}</div>
        <div className="Post-item__btn">
          {linkToPost && (
            <Link to={`/post/${post.id}`} className="my-link">
              <Button variant="outlined" color="primary" size="small">
                Learn More
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

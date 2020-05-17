import React, { useContext, useEffect } from 'react';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import Loader from '../Loader';
import PostItem from '../PostItem';
import AddComment from '../AddComment';
import CommentItem from '../CommentItem';

const PostPage = ({ match }) => {
  const { id } = match.params;
  const { singlePost, user } = useContext(GlobalContextState);
  const { getSinglePost, addCommentToSinglePost, clearSinglePost } = useContext(
    GlobalContextActions,
  );

  useEffect(() => {
    getSinglePost(id);
    return clearSinglePost;
  }, []);

  return (
    <div className="Post-Page">
      <div className="Post-Page__post">
        {!singlePost.post ? (
          <Loader info="post" color="primary" />
        ) : (
          <div>
            <PostItem post={singlePost.post} />
          </div>
        )}
      </div>
      <div className="Post-Page__comments">
        {!singlePost.comments ? (
          <Loader info="comments" color="secondary" />
        ) : (
          <div className="">
            <div className="Post-Page__header">Comments</div>
            {singlePost.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
            <div className="Post-Page__button">
              <AddComment
                addComment={addCommentToSinglePost}
                user={user}
                postId={id}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPage;

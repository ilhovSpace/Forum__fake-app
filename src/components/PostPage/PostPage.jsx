import React, { useContext, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostItem from '../PostItem';
import AddComment from '../AddComment';
import CommentItem from '../CommentItem';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

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
          <div>
            <CircularProgress />
            <div>Loading post ...</div>
          </div>
        ) : (
          <div>
            <PostItem post={singlePost.post} />
          </div>
        )}
      </div>
      <div className="Post-Page__comments">
        {!singlePost.comments ? (
          <div>
            <CircularProgress color="secondary" />
            <div>Loading comments ...</div>
          </div>
        ) : (
          <div>
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

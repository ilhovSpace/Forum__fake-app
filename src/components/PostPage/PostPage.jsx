import React, { useContext, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostItem from '../PostItem';
import AddComment from '../AddComment';
import CommentItem from '../CommentItem';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const PostPage = (props) => {
  const id = props.match.params.id;
  const { singlePost } = useContext(GlobalContextState);
  const { getSinglePost, addCommentToSinglePost, clearSinglePost } = useContext(
    GlobalContextActions,
  );

  console.log(singlePost.comments);
  const addComment = () => {
    addCommentToSinglePost({
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ',
    });
  };

  useEffect(() => {
    getSinglePost(id);
    return clearSinglePost();
  }, []);

  return (
    <div className="Post-Page">
      <div className="Post-Page__post">
        {!singlePost.post ? (
          <CircularProgress />
        ) : (
          <div>
            <PostItem post={singlePost.post} />
          </div>
        )}
      </div>
      <div className="Post-Page__comments">
        {!singlePost.comments ? (
          <CircularProgress />
        ) : (
          <div>
            {singlePost.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </div>
      <div className="Post-Page__button">
        <AddComment addComment={addComment} />
      </div>
    </div>
  );
};

export default PostPage;

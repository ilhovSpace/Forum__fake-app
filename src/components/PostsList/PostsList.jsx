import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import PostItem from '../PostItem';

const PostsList = ({ posts, loadFunc, valueHasMore, isOverPosts }) => {
  return (
    <div className="Post-List">
      {!!posts.length && (
        <InfiniteScroll
          loadMore={loadFunc}
          hasMore={valueHasMore}
          threshold={300}
        >
          {posts.map((post) => (
            <PostItem key={post.id} post={post} linkToPost={post.id} />
          ))}
        </InfiniteScroll>
      )}
      {!valueHasMore && isOverPosts && <Loader info="posts" color="primary" />}
      {!isOverPosts && (
        <div className="Post-list_info">
          <p>These are all the posts</p>
          <Link to="/" className="my-link">
            <Button variant="contained" color="primary" size="small">
              home
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostsList;

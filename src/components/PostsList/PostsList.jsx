import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

import PostItem from '../PostItem';

const PostsList = ({ posts, loadFunc, valueHasMore, isOverPosts }) => {
  console.log(isOverPosts);
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
      {!valueHasMore && isOverPosts && (
        <div>
          <CircularProgress />
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default PostsList;

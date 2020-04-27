import React, { useContext, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import PostItem from '../PostItem';

const PostsList = () => {
  const { posts } = useContext(GlobalContextState);
  const { getPartPosts, clearPosts } = useContext(GlobalContextActions);
  const [startPagination, setStartPagination] = useState(0);
  const [valueHasMore, setValueHasMore] = useState(false);

  const loadFunc = () => {
    setValueHasMore(false);
    setStartPagination(startPagination + 10);
    getPartPosts(startPagination + 10);
  };

  useEffect(() => {
    setValueHasMore(true);
  }, [posts]);

  useEffect(() => {
    getPartPosts(startPagination);
    return clearPosts;
  }, []);

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
      {!valueHasMore && (
        <div>
          <CircularProgress />
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default PostsList;

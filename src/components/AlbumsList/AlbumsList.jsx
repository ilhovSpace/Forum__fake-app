import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

import AlbumItem from '../AlbumItem';

const PostsList = ({ albums, loadFunc, valueHasMore, isOverPosts }) => {
  return (
    <div className="Albums-list">
      {!!albums.length && (
        <InfiniteScroll
          loadMore={loadFunc}
          hasMore={valueHasMore}
          threshold={300}
        >
          <div className="Albums-list__items">
            {albums.map((album) => (
              <AlbumItem key={album.id} album={album} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {!valueHasMore && isOverPosts && (
        <div className="Album-Page__progress">
          <CircularProgress color="secondary" />
          <div>Loading Albums...</div>
        </div>
      )}
    </div>
  );
};

export default PostsList;

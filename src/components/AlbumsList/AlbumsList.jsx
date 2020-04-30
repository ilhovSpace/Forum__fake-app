import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Loader from '../Loader';
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
        <Loader info="Albums" color="secondary" />
      )}
    </div>
  );
};

export default PostsList;

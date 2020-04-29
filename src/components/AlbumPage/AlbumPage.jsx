import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import Loader from '../Loader';
import PhotoItem from '../PhotoItem';

const AlbumPage = ({ match }) => {
  const { id } = match.params;
  const { photos } = useContext(GlobalContextState);
  const { getPartPhotos, clearPhotos } = useContext(GlobalContextActions);
  const [startPagination, setStartPagination] = useState(0);
  const [valueHasMore, setValueHasMore] = useState(true);
  const [isOverPhotos, setIsOverPhotos] = useState(false);

  const loadFunc = () => {
    setValueHasMore(false);
    setStartPagination(startPagination + 10);
    getPartPhotos(startPagination + 10, id);
  };

  useEffect(() => {
    if (photos.length && photos.length === startPagination - 10) {
      setValueHasMore(false);
      setIsOverPhotos(true);
    } else {
      setValueHasMore(true);
    }
  }, [photos]);

  useEffect(() => {
    getPartPhotos(0, id);
    return clearPhotos;
  }, []);

  return (
    <div className="Album-page">
      {!!photos.length && (
        <>
          <h2>Album {id}</h2>
          <h3>Photos</h3>
          <InfiniteScroll
            loadMore={loadFunc}
            hasMore={valueHasMore}
            threshold={500}
          >
            <div className="Album-page__items">
              {photos.map((item) => (
                <PhotoItem key={item.id} photo={item} />
              ))}
            </div>
          </InfiniteScroll>
        </>
      )}
      {!isOverPhotos && <Loader info="photos" color="secondary" />}
      {isOverPhotos && (
        <div className="Album-page_info">
          <p>These are all the photos in this album</p>
          <Link to="/albums" className="Album-item__link">
            <Button variant="outlined" color="secondary" size="small">
              back to albums
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AlbumPage;

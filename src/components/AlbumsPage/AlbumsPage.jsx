import React, { useState, useEffect, useContext } from 'react';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import FilterSelect from '../FilterSelect';
import AlbumsList from '../AlbumsList';
import Loader from '../Loader';

const AlbumsPage = () => {
  const { users, albums } = useContext(GlobalContextState);
  const { getAllUsers, getPartAlbums, clearAlbums } = useContext(
    GlobalContextActions,
  );
  const [prevLength, setPrevLength] = useState(0);
  const [startPagination, setStartPagination] = useState(0);
  const [valueHasMore, setValueHasMore] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [filterParams, setFilterParams] = useState([]);
  const [options, setOptions] = useState(users);
  const [isOverPosts, setIsOverPosts] = useState(false);

  useEffect(() => {
    getAllUsers();
    return clearAlbums;
  }, []);

  const loadFunc = () => {
    setValueHasMore(false);
    setIsOverPosts(false);
    setStartPagination(startPagination + 10);
    getPartAlbums(startPagination + 10, filterParams);
  };

  useEffect(() => {
    clearAlbums();
    setStartPagination(0);
    getPartAlbums(0, filterParams);
    setIsDisabled(true);
  }, [filterParams]);

  useEffect(() => {
    const opt = users.map((user) => ({
      label: `${user.username} (id:${user.id})`,
      value: user.id,
    }));
    setOptions(opt);
  }, [users]);

  useEffect(() => {
    if (albums.length) {
      setIsDisabled(false);
    }
    if (albums.length && albums.length === prevLength) {
      setValueHasMore(false);
      setIsOverPosts(true);
    } else {
      setPrevLength(albums.length);
      setValueHasMore(true);
    }
  }, [albums]);

  return (
    <div className="Album-Page">
      <FilterSelect
        setFilterParams={setFilterParams}
        options={options}
        isDisabled={isDisabled}
      />
      {!albums.length ? (
        <Loader info="Albums" color="secondary" />
      ) : (
        <AlbumsList
          albums={albums}
          loadFunc={loadFunc}
          valueHasMore={valueHasMore}
          isOverPosts={!isOverPosts}
        />
      )}
    </div>
  );
};

export default AlbumsPage;

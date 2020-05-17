import React, { useState, useEffect, useContext } from 'react';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import Loader from '../Loader';
import PostsList from '../PostsList';
import FilterSelect from '../FilterSelect';
import AddPost from '../AddPost';

const PostsPage = () => {
  const { users, posts } = useContext(GlobalContextState);
  const { getAllUsers, getPartPosts, clearPosts } = useContext(
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
    return clearPosts;
  }, []);

  const loadFunc = () => {
    setValueHasMore(false);
    setIsOverPosts(false);
    setStartPagination(startPagination + 10);
    getPartPosts(startPagination + 10, filterParams);
  };

  useEffect(() => {
    clearPosts();
    setStartPagination(0);
    getPartPosts(0, filterParams);
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
    if (posts.length) {
      setIsDisabled(false);
    }
    if (posts.length && posts.length === prevLength) {
      setValueHasMore(false);
      setIsOverPosts(true);
    } else {
      setPrevLength(posts.length);
      setValueHasMore(true);
    }
  }, [posts]);

  return (
    <div className="Posts-page">
      <FilterSelect
        setFilterParams={setFilterParams}
        options={options}
        isDisabled={isDisabled}
      />
      {!posts.length ? (
        <Loader info="posts" color="primary" />
      ) : (
        <PostsList
          posts={posts}
          loadFunc={loadFunc}
          valueHasMore={valueHasMore}
          isOverPosts={!isOverPosts}
        />
      )}
      <AddPost />
    </div>
  );
};

export default PostsPage;

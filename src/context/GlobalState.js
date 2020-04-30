import React, { createContext, useReducer, useMemo } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  user: {
    isAuth: false,
    isAdmin: false,
    userData: {},
  },
  posts: [],
  randomPosts: null,
  postsList: [],
  albums: [],
  randomAlbums: null,
  users: [],
  admins: ['Sincere@april.biz'],
  singlePost: {
    post: null,
    comments: null,
  },
  photos: [],
  singleAlbum: {},
};

export const GlobalContextState = createContext();
export const GlobalContextActions = createContext();

const randomSliceArray = (array, num) => {
  return array.sort(() => Math.random() - 0.5).slice(0, num);
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAllPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) =>
        dispatch({
          type: 'GET_ALL_POSTS',
          payload: posts,
        }),
      );
  };

  const getPartPosts = (startPagination, filterParams) => {
    const userFilter = filterParams
      ? filterParams.map((item) => `userId=${item.value}&`).join('')
      : '';
    fetch(
      `https://jsonplaceholder.typicode.com/posts?${userFilter}_limit=10&_start=${startPagination}`,
    )
      .then((response) => response.json())
      .then((posts) =>
        dispatch({
          type: 'GET_PART_POSTS',
          payload: posts,
        }),
      );
  };

  const getPartAlbums = (startPagination, filterParams) => {
    const userFilter = filterParams
      ? filterParams.map((item) => `userId=${item.value}&`).join('')
      : '';
    fetch(
      `https://jsonplaceholder.typicode.com/albums?${userFilter}_limit=10&_start=${startPagination}`,
    )
      .then((response) => response.json())
      .then((posts) =>
        dispatch({
          type: 'GET_PART_ALBUMS',
          payload: posts,
        }),
      );
  };

  const getPartPhotos = (startPagination, id) => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=10&_start=${startPagination}`,
    )
      .then((response) => response.json())
      .then((photos) =>
        dispatch({
          type: 'GET_PART_PHOTOS',
          payload: photos,
        }),
      );
  };

  const getRandomPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((res) => randomSliceArray(res, 5))
      .then((posts) =>
        dispatch({
          type: 'GET_RANDOM_POSTS',
          payload: posts,
        }),
      );
  };

  const getAllAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((albums) =>
        dispatch({
          type: 'GET_ALL_ALBUMS',
          payload: albums,
        }),
      );
  };

  const getRandomAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((res) => randomSliceArray(res, 8))
      .then((albums) =>
        dispatch({
          type: 'GET_RANDOM_ALBUMS',
          payload: albums,
        }),
      );
  };

  const getAllUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        dispatch({
          type: 'GET_ALL_USERS',
          payload: users,
        }),
      );
  };

  const getSinglePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({
          type: 'GET_SINGLE_POST',
          payload: response,
        }),
      );

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((response) =>
        dispatch({
          type: 'GET_SINGLE_POST_COMMENTS',
          payload: response,
        }),
      );
  };

  const logout = () => {
    dispatch({
      type: 'LOG_OUT',
    });
  };

  const clearSinglePost = () => {
    dispatch({
      type: 'CLEAR_SINGLE_POST',
    });
  };

  const clearPosts = () => {
    dispatch({
      type: 'CLEAR_POSTS',
    });
  };

  const clearPhotos = () => {
    dispatch({
      type: 'CLEAR_PHOTOS',
    });
  };

  const clearAlbums = () => {
    dispatch({
      type: 'CLEAR_ALBUMS',
    });
  };

  const clearRandomArrays = () => {
    dispatch({
      type: 'CLEAR_RANDOM_ARRAYS',
    });
  };

  const filterPosts = (selectedUsers) => {
    const newFilterPosts =
      selectedUsers && selectedUsers.length
        ? state.posts.filter(({ userId }) => selectedUsers.includes(userId))
        : state.posts;
    dispatch({
      type: 'FILTER_POSTS',
      payload: newFilterPosts,
    });
  };
  const addCommentToSinglePost = (comment) => {
    dispatch({
      type: 'ADD_COMMENT_TO_SINGLE_POST',
      payload: comment,
    });
  };
  const addNewPost = (post) => {
    dispatch({
      type: 'ADD_NEW_POST',
      payload: post,
    });
  };
  const checkUser = (loginValue) => {
    const [userObj] = state.users.filter(
      ({ email }) => email.toLowerCase() === loginValue.toLowerCase(),
    );

    if (userObj) {
      const [admin] = state.admins.filter(
        (item) => item.toLowerCase() === userObj.email.toLowerCase(),
      );
      if (admin) {
        dispatch({
          type: 'ADMIN_AUTHORIZATION',
          payload: userObj,
        });
      } else {
        dispatch({
          type: 'USER_AUTHORIZATION',
          payload: userObj,
        });
      }
    } else {
      return 'error';
    }
  };

  const actions = useMemo(
    () => ({
      getAllPosts,
      getAllAlbums,
      getAllUsers,
      getSinglePost,
      getRandomPosts,
      getPartPosts,
      getPartAlbums,
      getPartPhotos,
      getRandomAlbums,
      addNewPost,
      addCommentToSinglePost,
      clearSinglePost,
      clearRandomArrays,
      clearPosts,
      clearAlbums,
      clearPhotos,
      logout,
    }),
    [],
  );

  return (
    <GlobalContextState.Provider
      value={{
        posts: state.posts,
        albums: state.albums,
        users: state.users,
        user: state.user,
        singlePost: state.singlePost,
        postsList: state.postsList,
        randomPosts: state.randomPosts,
        randomAlbums: state.randomAlbums,
        photos: state.photos,
        checkUser,
        filterPosts,
      }}
    >
      <GlobalContextActions.Provider value={actions}>
        {children}
      </GlobalContextActions.Provider>
    </GlobalContextState.Provider>
  );
};

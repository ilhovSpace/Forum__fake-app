import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import AppReducer from './AppReducer';

const TestUser = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
};
const initialState = {
  user: {
    isAuth: true,
    isAdmin: true,
    userData: TestUser,
  },
  posts: [],
  randomPosts: null,
  postsList: [],
  albums: [],
  randomAlbums: null,
  users: [],
  singlePost: {
    post: null,
    comments: null,
  },
  singleAlbum: {},
};

export const GlobalContextState = createContext();
export const GlobalContextActions = createContext();

const randomSliceArray = (array) => {
  return array.sort(() => Math.random() - 0.5).slice(0, 5);
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
    const userFilter = filterParams ? filterParams.map(item => `userId=${item.value}&`).join('') : ''
    console.log(filterParams, userFilter);
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

  const getRandomPosts = () => {
    console.log('getRandomPosts');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((res) => randomSliceArray(res))
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

  const clearRandomArrays = () => {
    console.log('clearRandomArrays');
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

  const checkUser = (loginValue) => {
    const userFilter = state.users.filter(({ email }) => email === loginValue);

    if (userFilter.length) {
      const [userObj] = userFilter;
      console.log(userObj);
      dispatch({
        type: 'USER_AUTHORIZATION',
        payload: userObj,
      });
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
      addCommentToSinglePost,
      clearSinglePost,
      getRandomPosts,
      clearRandomArrays,
      getPartPosts,
      clearPosts,
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

export default (state, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'GET_ALL_ALBUMS':
      return {
        ...state,
        albums: action.payload,
      };
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_SINGLE_POST':
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          post: action.payload,
        },
      };
    case 'GET_SINGLE_POST_COMMENTS':
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          comments: action.payload,
        },
      };
    case 'ADD_COMMENT_TO_SINGLE_POST':
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          comments: [...state.singlePost.comments, action.payload],
        },
      };
    case 'CLEAR_SINGLE_POST':
      return {
        ...state,
        singlePost: {
          post: null,
          comments: null,
        },
      };
    case 'FILTER_POSTS':
      return {
        ...state,
        postsList: action.payload,
      };
    case 'USER_AUTHORIZATION':
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: true,
          userData: action.payload,
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: false,
          userData: {},
        },
      };
    default:
      return state;
  }
};

export default (state, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'ADD_NEW_POST':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case 'GET_PART_POSTS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case 'GET_PART_ALBUMS':
      return {
        ...state,
        albums: [...state.albums, ...action.payload],
      };
    case 'GET_PART_PHOTOS':
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      };
    case 'CLEAR_PHOTOS':
      return {
        ...state,
        photos: [],
      };
    case 'CLEAR_POSTS':
      return {
        ...state,
        posts: [],
      };
    case 'CLEAR_ALBUMS':
      return {
        ...state,
        albums: [],
      };
    case 'GET_RANDOM_POSTS':
      return {
        ...state,
        randomPosts: action.payload,
      };
    case 'GET_RANDOM_ALBUMS':
      return {
        ...state,
        randomAlbums: action.payload,
      };
    case 'CLEAR_RANDOM_ARRAYS':
      return {
        ...state,
        randomPosts: null,
        randomAlbums: null,
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
    case 'ADMIN_AUTHORIZATION':
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: true,
          isAdmin: true,
          userData: action.payload,
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: false,
          isAdmin: false,
          userData: {},
        },
      };
    default:
      return state;
  }
};

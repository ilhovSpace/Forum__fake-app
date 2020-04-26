export const getAllPosts = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => dispatch({
    type: 'GET_ALL_POSTS',
    payload: posts
  }))
}
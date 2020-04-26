import React, {useContext, useEffect, useState} from 'react'
import {GlobalContextState, GlobalContextActions} from '../../context/GlobalState';
import PostItem from '../PostItem';
import LazyLoad from 'react-lazyload';
import FilterPost from '../FilterPost';


const PostsList = () => {
const {posts, postsList, filterPosts} = useContext(GlobalContextState)
const { getAllPosts } = useContext(GlobalContextActions)

//  console.log(postsList)

useEffect(()=>{
  filterPosts()
},[posts])

useEffect(()=>{
  getAllPosts()
},[])
// console.log('render postList')
  return (
      <div className='Post-List'>
      {postsList.map(post => (
        <LazyLoad key={post.id} height={200} placeholder={<div>Loading...</div>}>
          <PostItem key={post.id} post={post} linkToPost={post.id}/>
        </LazyLoad>
      ))}
      </div>
  )
}

export default PostsList



// const PostsList = () => {
//   // const {posts, users, getAllPosts} = useContext(GlobalContext)
//   // const [postsList, setPostList] = useState(posts)
//   // const [userPostFilter, setUserPostFilter] = useState([])

//   // const filter = () => {
//   //   if(userPostFilter.length >= 1){
//   //     const filterPosts = posts.filter(({ userId }) => userPostFilter.includes(userId));
//   //     setPostList(filterPosts)
//   //   } else {
//   //     setPostList(posts)
//   //   }
//   // }
//   // useEffect(() => {
//   //   filter()
//   //   console.log('call useEffect Pos')
//   // }, [userPostFilter])
//   // console.log(userPostFilter, postsList, posts)
//   return (
//     <div>
//       {/* <FilterPost users={users} setUserPostFilter={setUserPostFilter}/>
//       {postsList.map(post => (
//         <div key={post.id}>
//         <Paper>
//           <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
//           <p>{post.body}</p>
//           <span>User id: {post.userId}</span>
//           </Paper>
//         </div>
//       ))} */}
//     </div>
//   )
// }
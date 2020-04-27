import React, { useState, useEffect, useContext } from 'react';
import PostsList from '../PostsList';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import FilterSelect from '../FilterSelect';
import AddPost from '../AddPost'



const PostsPage = () => {
  return (
    <div>
      <FilterSelect />
      {/* <FilterPost /> */}
      <PostsList />
      <AddPost />
    </div>
  );
};

export default PostsPage;

import React, { useState } from 'react';
import PostsList from '../PostsList';
import FilterSelect from '../FilterSelect';

const PostsPage = () => {
  return (
    <div>
      <FilterSelect />
      <PostsList />
    </div>
  );
};

export default PostsPage;

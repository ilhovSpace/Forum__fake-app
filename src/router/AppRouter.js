import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsPage from '../components/PostsPage';
import PostPage from '../components/PostPage';
import Login from '../components/Login';
import HomePage from '../components/HomePage';
import AlbumsPage from '../components/AlbumsPage';
import AlbumPage from '../components/AlbumPage';
import UserProfile from '../components/UserProfile';
import AllUserProfiles from '../components/AllUserProfiles';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/posts" component={PostsPage} />
      <Route path="/post/:id" component={PostPage} />
      <Route exact path="/albums" component={AlbumsPage} />
      <Route path="/album/:id" component={AlbumPage} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/profiles" component={AllUserProfiles} />
    </Switch>
  );
};

export default AppRouter;

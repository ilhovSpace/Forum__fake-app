import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsPage from '../components/PostsPage';
import PostPage from '../components/PostPage';
import Login from '../components/Login';
import HomePage from '../components/HomePage';
import AlbumsPage from '../components/AlbumsPage';
import AlbumPage from '../components/AlbumPage';
import UserProfile from '../components/UserProfile';
import AllUserProfiles from '../components/AllUserProfiles';
import Page404 from '../components/Page404';
import { GlobalContextState } from '../context/GlobalState';

const AppRouter = () => {
  const { user } = useContext(GlobalContextState);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/posts" component={PostsPage} />
      <Route path="/post/:id" component={PostPage} />
      <Route exact path="/albums" component={AlbumsPage} />
      <Route path="/album/:id" component={AlbumPage} />
      <Route
        path="/profile/:id"
        component={user.isAuth ? UserProfile : Login}
      />
      <Route
        exact
        path="/profiles"
        component={user.isAdmin ? AllUserProfiles : Login}
      />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default AppRouter;

import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import PostItem from '../PostItem';
import AlbumItem from '../AlbumItem';
import Loader from '../Loader';

const HomePage = () => {
  const { randomPosts, randomAlbums } = useContext(GlobalContextState);
  const { getRandomPosts, getRandomAlbums, clearRandomArrays } = useContext(
    GlobalContextActions,
  );
  useEffect(() => {
    getRandomPosts();
    getRandomAlbums();
    return clearRandomArrays;
  }, []);

  return (
    <>
      <header className="Home-page__header">
        <div className="Home-page__wrapper">
          <img
            src="https://www.facialartdentalforum.com/wp-content/uploads/2015/05/Forum-logo.jpg"
            width="350"
            alt="forum logo"
          />
          <h2>Welcome to &quot;THE FORUM&quot;</h2>
          <h3>
            This is a TEST forum that uses fake Online REST API -
            &quot;JSONPlaceholder&quot;
          </h3>
        </div>
      </header>
      <section className="Home-page__body">
        {!randomPosts ? (
          <Loader info="Posts" color="primary" />
        ) : (
          <div className="Home-page__block">
            <h3 className="Home-page__block-title">
              This block contains 5 random posts
            </h3>
            {randomPosts.map((post) => (
              <PostItem key={post.id} post={post} linkToPost={post.id} />
            ))}
            <div className="Home-page__btn">
              <Link to="/posts" className="my-link">
                <Button variant="contained" color="primary" type="submit">
                  View all posts
                </Button>
              </Link>
            </div>
          </div>
        )}
        {!randomAlbums ? (
          <Loader info="Albums" color="secondary" />
        ) : (
          <div className="Home-page__albums">
            <h3>This block contains 8 random albums</h3>
            <div className="Home-page__albums-items">
              {randomAlbums.map((album) => (
                <AlbumItem key={album.id} album={album} />
              ))}
            </div>
            <div className="Home-page__btn">
              <Link to="/albums" className="my-link">
                <Button variant="contained" color="secondary" type="submit">
                  View all posts
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;

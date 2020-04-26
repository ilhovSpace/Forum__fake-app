import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PostItem from '../PostItem';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const HomePage = () => {
  const { posts, albums } = useContext(GlobalContextState);
  const actions = useContext(GlobalContextActions);
  const [randomPosts, setRandomPosts] = useState([]);
  const [randomAlbums, setRandomAlbums] = useState([]);

  const getRandomPosts = () => {
    const newRandomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 5);
    setRandomPosts(newRandomPosts);
  };

  const getRandomAlbums = () => {
    const newRandomAlbums = albums.sort(() => Math.random() - 0.5).slice(0, 5);
    setRandomAlbums(newRandomAlbums);
  };

  useEffect(() => {
    if (!posts.length) {
      actions.getAllPosts();
    }
    if (!actions.length) {
      actions.getAllAlbums();
    }
  }, []);

  useEffect(() => {
    setRandomPosts(posts);
    getRandomPosts();
    getRandomAlbums();
    console.count('useEff setR');
  }, [posts, albums]);
  return (
    <>
      <header>
        <div>
          <img
            src="https://www.facialartdentalforum.com/wp-content/uploads/2015/05/Forum-logo.jpg"
            width="350"
          />
          <h2>Welcome to 'THE FORUM'</h2>
          <h3>
            This is a TEST forum that uses fake Online REST API -
            "JSONPlaceholder"
          </h3>
        </div>
      </header>
      <section>
        {!randomPosts.length ? (
          <div>Loading</div>
        ) : (
          <div>
            <h3>This block contains 5 random posts</h3>
            {randomPosts.map((post) => (
              <PostItem key={post.id} post={post} linkToPost={post.id} />
            ))}
            <Link to="/posts">
              <Button variant="contained" color="primary" type="submit">
                View all posts
              </Button>
            </Link>
          </div>
        )}
        <div>
          {!randomAlbums.length ? (
            <div>Loading</div>
          ) : (
            <div>{randomAlbums.length} Рандомных Альбомов</div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;

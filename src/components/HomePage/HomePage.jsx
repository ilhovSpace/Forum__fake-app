import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

import PostItem from '../PostItem';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const HomePage = () => {
  const { randomPosts } = useContext(GlobalContextState);
  const { getRandomPosts, clearRandomArrays } = useContext(
    GlobalContextActions,
  );

  useEffect(() => {
    getRandomPosts();
    return clearRandomArrays;
  }, []);

  return (
    <>
      <header>
        <div>
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
      <section>
        {!randomPosts ? (
          <div>
            <CircularProgress />
            <div>Loading...</div>
          </div>
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
        {/* <div>
          {!randomAlbums.length ? (
            <div>Loading</div>
          ) : (
            <div>{randomAlbums.length} Рандомных Альбомов</div>
          )}
        </div> */}
      </section>
    </>
  );
};

export default HomePage;

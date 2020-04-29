import React from 'react';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const AlbumItem = ({ album }) => {
  return (
    <div className="Album-item">
      <div className="Album-item__block">
        <div className="Album-item__header">ALBUM</div>
        <div className="Album-item__icon">
          <PanoramaOutlinedIcon fontSize="large" />
        </div>
        <div className="Album-item__author">Author: user id {album.userId}</div>
        <div className="Album-item__tilte">{album.title}</div>
        <Link to={`/album/${album.id}`} className="my-link">
          <Button variant="outlined" color="secondary" size="small">
            View Album
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AlbumItem;

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ color, info }) => {
  return (
    <div className="my-progress">
      <CircularProgress color={color} />
      <div>Loading {info}...</div>
    </div>
  );
};

export default Loader;

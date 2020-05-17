import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

import {
  GlobalContextActions,
  GlobalContextState,
} from '../../context/GlobalState';

export default function SimpleMenu() {
  const { user } = useContext(GlobalContextState);
  const { logout } = useContext(GlobalContextActions);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon />
        <MoreVertIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          to={`/profile/${user.userData.id}`}
          className="User-menu__link my-link"
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>
        <Link to="/" onClick={logout} className="User-menu__link my-link">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

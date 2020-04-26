import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '../Drawer';
import { Link } from 'react-router-dom';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { user } = useContext(GlobalContextState);
  const { logout } = useContext(GlobalContextActions);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Drawer />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="Link-style logo">
              Forum App
            </Link>
          </Typography>
          {user.isAuth ? (
            <div className="Appbar-logout">
              <div className="Appbar-logout__user">{user.userData.email}</div>
              <Button variant="outlined" color="inherit" size="small">
                <Link to="/" className="Link-style" onClick={logout}>
                  Logout
                </Link>
              </Button>
            </div>
          ) : (
            <Button color="inherit" variant="outlined" size="small">
              <Link to="/login" className="Link-style">
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

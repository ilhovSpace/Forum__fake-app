import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { GlobalContextState } from '../../context/GlobalState';

const useStyles = makeStyles({
  list: {
    width: 250,
    fontSize: '1.3rem',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const { user } = useContext(GlobalContextState);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" className="Link-style dark-text">
          <ListItem button key={'Home'}>
            Home
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/posts" className="Link-style dark-text">
          <ListItem button key={'Post'}>
            Posts
          </ListItem>
        </Link>
        <Link to="/albums" className="Link-style dark-text">
          <ListItem button key={'Albums'}>
            Albums
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {user.isAuth && (
          <Link to={`/profile/${user.userData.id}`} className="Link-style dark-text">
            <ListItem button key={'Profile'}>
              My Profile
            </ListItem>
          </Link>
        )}
        {user.isAdmin && user.isAuth && (
          <Link to="/profiles" className="Link-style dark-text">
            <ListItem button key={'Profile'}>
              All User Profiles
            </ListItem>
          </Link>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <MenuIcon onClick={toggleDrawer('left', true)}>{'left'}</MenuIcon>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

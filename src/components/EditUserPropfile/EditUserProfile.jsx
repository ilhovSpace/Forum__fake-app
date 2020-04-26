import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ user }) {
  console.log(user);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [profile, setProfile] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setProfile({
      user: user.email,
    });
  }, [user]);
  const handleChange = (e) => {
    setProfile({
      ...profile,
      email: e.target.value,
    });
  };

  const text = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit Profile
            </Typography>
            <Button autoFocus color="inherit" type="submit">
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
        </div>
      </Dialog>
    </div>
  );
}

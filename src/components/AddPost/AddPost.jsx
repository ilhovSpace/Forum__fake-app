import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { v4 as uuidv4 } from 'uuid';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export default function AddPost() {
  const classes = useStyles();
  const { user } = useContext(GlobalContextState);
  const { addNewPost } = useContext(GlobalContextActions);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    userId: user.isAuth && user.userData.id,
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    addNewPost({ ...value, id: uuidv4() });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {user.isAuth && (
        <Tooltip title="Add" aria-label="add" onClick={handleClickOpen}>
          <Fab color="secondary" className={classes.absolute}>
            <AddIcon />
          </Fab>
        </Tooltip>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleAddPost}>
          <DialogTitle id="form-dialog-title">Add New Post</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="title"
              label="Post title"
              type="text"
              variant="outlined"
              inputProps={{ minLength: '5', maxLength: '500' }}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="body"
              label="Post body"
              type="text"
              variant="outlined"
              inputProps={{ minLength: '5', maxLength: '2000' }}
              onChange={handleChange}
              multiline
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

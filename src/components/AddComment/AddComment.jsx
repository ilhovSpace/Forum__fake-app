import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { v4 as uuidv4 } from 'uuid';

export default function AddComment({ addComment, user, postId }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState({
    postId,
    email: user.isAuth && user.userData.email,
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    addComment({ ...value, id: uuidv4() });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Comment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleAddComment}>
          <DialogTitle id="form-dialog-title">Add New Comment</DialogTitle>
          <DialogContent>
            {!user.isAuth && (
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                variant="outlined"
                inputProps={{ minLength: '3', maxLength: '100' }}
                onChange={handleChange}
                fullWidth
                required
              />
            )}
            <TextField
              margin="dense"
              id="name"
              label="Title Comment"
              type="text"
              variant="outlined"
              inputProps={{ minLength: '2', maxLength: '100' }}
              onChange={handleChange}
              multiline
              fullWidth
              required
            />
            <TextField
              margin="dense"
              id="body"
              label="Body Comment"
              type="text"
              variant="outlined"
              inputProps={{ minLength: '2', maxLength: '500' }}
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
              Add comment
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

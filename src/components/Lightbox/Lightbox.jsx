import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

export default function LightBox({ photo }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="Photo-item" onClick={handleClickOpen}>
        <img src={photo.thumbnailUrl} alt="thumbnail" />
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="Light_box">
          <button
            type="button"
            className="Light_box__close"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
          <div className="Light_box__image">
            <img src={photo.url} alt="big" />
          </div>
          <div className="Light_box__title">
            <p>{photo.title}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

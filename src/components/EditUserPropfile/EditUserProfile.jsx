// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: 'relative',
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1,
//   },
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog({ user }) {
//   console.log(user);
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [profile, setProfile] = useState({});
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   useEffect(() => {
//     setProfile({
//       user: user.email,
//     });
//   }, [user]);
//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       email: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };

//   const text = (e) => {
//     e.preventDefault();
//     console.dir(e.target);
//   };
//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Edit Profile
//       </Button>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" className={classes.title}>
//               Edit Profile
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <form
//           className={classes.root}
//           autoComplete="off"
//           onSubmit={handleSubmit}
//         > 
//           <div>
//             <div></div>
//             <div><TextField id="outlined-basic" label="Outlined" variant="outlined" /></div>
//           </div>
//           <TextField id="standard-basic" label="Standard" />
//           <TextField id="filled-basic" label="Filled" variant="filled" />
          
//           <Button variant="contained" color="secondary" type="submit">
//             Save
//           </Button>
//         </form>
//       </Dialog>
//     </div>
//   );
// }

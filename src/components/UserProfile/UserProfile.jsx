import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';

import { GlobalContextState } from '../../context/GlobalState';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserProfile({ match }) {
  const userId = Number(match.params.id);
  const { users } = useContext(GlobalContextState);
  const user = users.filter(({ id }) => id === userId);
  const [userProfile, setUserProfile] = useState(...user);
  const [userEditPofile, setUserEditPofile] = useState({});
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [edit, setEdit] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProfile({ ...userProfile, ...userEditPofile });
    setUserEditPofile({});
    setEdit(false);
  };

  const handleInputChangeInfo = (e) => {
    setUserEditPofile({ ...userEditPofile, [e.target.name]: e.target.value });
  };

  const handleInputChangeAddress = (e) => {
    setUserEditPofile({
      ...userEditPofile,
      address: { ...userProfile.address, [e.target.name]: e.target.value },
    });
  };

  const handleInputChangeCompany = (e) => {
    setUserEditPofile({
      ...userEditPofile,
      company: { ...userProfile.company, [e.target.name]: e.target.value },
    });
  };

  const clearStates = () => {
    setUserProfile({});
    setUserEditPofile({});
  };

  useEffect(() => {
    return clearStates;
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            label="Basic info"
            icon={<AccessibilityNewIcon />}
            aria-label="phone"
            onClick={() => setEdit(false)}
            {...a11yProps(0)}
          />
          <Tab
            label="Address"
            icon={<HomeIcon />}
            aria-label="favorite"
            onClick={() => setEdit(false)}
            {...a11yProps(1)}
          />
          <Tab
            label="Company"
            icon={<BusinessIcon />}
            aria-label="person"
            onClick={() => setEdit(false)}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className="User-profile__form">
            <div className="User-profile__item">
              Name:{' '}
              {edit ? (
                <TextField
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={userProfile.name}
                  inputProps={{ minLength: '3', maxLength: '100' }}
                  onChange={handleInputChangeInfo}
                />
              ) : (
                <span>{userProfile.name}</span>
              )}
            </div>
            <div className="User-profile__item">
              Username:{' '}
              {edit ? (
                <TextField
                  id="username"
                  type="text"
                  name="username"
                  defaultValue={userProfile.username}
                  inputProps={{ minLength: '3', maxLength: '100' }}
                  onChange={handleInputChangeInfo}
                />
              ) : (
                <span>{userProfile.username}</span>
              )}
            </div>
            <div className="User-profile__item">
              Email:{' '}
              {edit ? (
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={userProfile.email}
                  inputProps={{ minLength: '3', maxLength: '100' }}
                  onChange={handleInputChangeInfo}
                />
              ) : (
                <span>{userProfile.email}</span>
              )}
            </div>
            <div className="User-profile__item">
              Website:{' '}
              {edit ? (
                <TextField
                  id="website"
                  type="text"
                  name="website"
                  defaultValue={userProfile.website}
                  inputProps={{ minLength: '3', maxLength: '100' }}
                  onChange={handleInputChangeInfo}
                />
              ) : (
                <span>{userProfile.website}</span>
              )}
            </div>
            <div className="User-profile__item">
              Phone:{' '}
              {edit ? (
                <TextField
                  id="phone"
                  type="text"
                  name="phone"
                  defaultValue={userProfile.phone}
                  inputProps={{ minLength: '6', maxLength: '25' }}
                  onChange={handleInputChangeInfo}
                />
              ) : (
                <span>{userProfile.phone}</span>
              )}
            </div>
            <div className="User-profile__btn-group">
              {edit ? (
                <div className="User-profile__buttons">
                  <Button variant="contained" onClick={() => setEdit(false)}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" type="submit">
                    Save
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className="User-profile__form">
            <div className="User-profile__item">
              Street:{' '}
              {edit ? (
                <TextField
                  id="street"
                  type="text"
                  name="street"
                  defaultValue={userProfile.address.street}
                  inputProps={{ minLength: '4', maxLength: '100' }}
                  onChange={handleInputChangeAddress}
                />
              ) : (
                <span>{userProfile.address.street}</span>
              )}
            </div>
            <div className="User-profile__item">
              Suite:{' '}
              {edit ? (
                <TextField
                  id="suite"
                  type="text"
                  name="suite"
                  defaultValue={userProfile.address.suite}
                  inputProps={{ minLength: '3', maxLength: '25' }}
                  onChange={handleInputChangeAddress}
                />
              ) : (
                <span>{userProfile.address.suite}</span>
              )}
            </div>
            <div className="User-profile__item">
              City:{' '}
              {edit ? (
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  defaultValue={userProfile.address.city}
                  inputProps={{ minLength: '3', maxLength: '25' }}
                  onChange={handleInputChangeAddress}
                />
              ) : (
                <span>{userProfile.address.city}</span>
              )}
            </div>
            <div className="User-profile__item">
              Zipcode:{' '}
              {edit ? (
                <TextField
                  id="zipcode"
                  type="text"
                  name="zipcode"
                  defaultValue={userProfile.address.zipcode}
                  inputProps={{ minLength: '3', maxLength: '25' }}
                  onChange={handleInputChangeAddress}
                />
              ) : (
                <span>{userProfile.address.zipcode}</span>
              )}
            </div>
            <div className="User-profile__btn-group">
              {edit ? (
                <div className="User-profile__buttons">
                  <Button variant="contained" onClick={() => setEdit(false)}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" type="submit">
                    Save
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className="User-profile__form">
            <div className="User-profile__item">
              Company name:{' '}
              {edit ? (
                <TextField
                  id="company-name"
                  type="text"
                  name="name"
                  defaultValue={userProfile.company.name}
                  inputProps={{ minLength: '3', maxLength: '50' }}
                  onChange={handleInputChangeCompany}
                />
              ) : (
                <span>{userProfile.company.name}</span>
              )}
            </div>
            <div className="User-profile__item">
              Catchphrase:{' '}
              {edit ? (
                <TextField
                  id="standard-basic"
                  type="text"
                  name="catchPhrase"
                  defaultValue={userProfile.company.catchPhrase}
                  inputProps={{ minLength: '3', maxLength: '50' }}
                  onChange={handleInputChangeCompany}
                />
              ) : (
                <span>{userProfile.company.catchPhrase}</span>
              )}
            </div>
            <div className="User-profile__item">
              Business:{' '}
              {edit ? (
                <TextField
                  id="business"
                  type="text"
                  name="bs"
                  defaultValue={userProfile.company.bs}
                  inputProps={{ minLength: '3', maxLength: '50' }}
                  onChange={handleInputChangeCompany}
                />
              ) : (
                <span>{userProfile.company.bs}</span>
              )}
            </div>
            <div className="User-profile__btn-group">
              {edit ? (
                <div className="User-profile__buttons">
                  <Button variant="contained" onClick={() => setEdit(false)}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" type="submit">
                    Save
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </form>
      </TabPanel>
    </div>
  );
}

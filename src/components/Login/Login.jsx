import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';

const Login = () => {
  const { user, checkUser } = useContext(GlobalContextState);
  const actions = useContext(GlobalContextActions);
  const [error, setError] = useState('');
  const [loginValue, setLoginValue] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoginValue('');
    const result = checkUser(loginValue);
    if (result) {
      setError('User is not found');
    }
  };
  const handleChange = (e) => {
    setLoginValue(e.target.value);
    setError('');
  };

  useEffect(() => {
    actions.getAllUsers();
  }, []);
  return (
    <div className="Login-form">
      {user.isAuth && <Redirect to="/" />}
      <h2>Login</h2>
      <form onSubmit={onSubmitHandler} className="Login-form__form">
        <input
          onChange={handleChange}
          type="email"
          placeholder="User Email"
          value={loginValue}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
      {error && (
        <div className="Login-form__error">
          {error}
          <br />
          try user: Shanna@melissa.tv <br />
          try admin: Sincere@april.biz
        </div>
      )}
    </div>
  );
};

export default Login;

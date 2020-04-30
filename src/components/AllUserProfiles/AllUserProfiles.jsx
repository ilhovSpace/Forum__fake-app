import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import EditUserPropfile from '../EditUserPropfile';

const AllUserProfiles = () => {
  const { users } = useContext(GlobalContextState)
  console.log(users)
  return (
    <div>
      <div>All Users</div>
      {users.map( user => (
        <Link to={`/profile/${user.id}`}  key={user.id}><div><AccountBoxIcon /> {user.username} ({user.email})</div></Link>
      ))}
    </div>
  )
}

export default AllUserProfiles
// Shanna@melissa.tv
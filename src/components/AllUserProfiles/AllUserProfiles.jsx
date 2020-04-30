import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { GlobalContextState } from '../../context/GlobalState';

const AllUserProfiles = () => {
  const { users } = useContext(GlobalContextState);
  return (
    <div className="All-user-profiles">
      <div className="All-user-profiles__title">All Users</div>
      {users.map((user) => (
        <Link to={`/profile/${user.id}`} key={user.id}>
          <div className="All-user-profiles__items">
            <AccountBoxIcon />{' '}
            <span>
              {user.username} ({user.email})
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllUserProfiles;

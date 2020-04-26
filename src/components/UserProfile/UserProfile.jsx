import React, { useContext, useEffect, useState } from 'react';
import {
  GlobalContextState,
  GlobalContextActions,
} from '../../context/GlobalState';
import EditUserPropfile from '../EditUserPropfile';

const UserProfile = () => {
  const { user } = useContext(GlobalContextState);
  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    setUserProfile(user);
  }, [user]);

  console.log(userProfile);
  return (
    userProfile && (
      <div>
        <div></div>
        <div>
          <EditUserPropfile user={user.userData} />
        </div>
      </div>
    )
  );
};

export default UserProfile;

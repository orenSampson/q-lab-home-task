import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const params = useParams();

  return (
    <div>
      <div>UserProfile</div>
      <p>{params.userId}</p>
    </div>
  );
}

export default UserProfile;

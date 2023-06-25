import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userProfileActions } from '../../store/userProfile/userProfileSlice';
import { useGetUserProfilesQuery } from '../../store/api/apiSlice';

function HomePage() {
  const { data, error, isError, isLoading } = useGetUserProfilesQuery('seed=abc&results=10');

  // const userProfiles = useSelector((state) => state.userProfile.userProfiles).map(
  //   (someUserProfile) => {
  //     return (
  //       <div key={someUserProfile.id}>
  //         <div>id: {someUserProfile.id}</div>
  //         <div>name: {someUserProfile.name}</div>
  //         <div>age: {someUserProfile.age}</div>
  //       </div>
  //     );
  //   }
  // );

  return (
    <div>
      <h1>HomePage</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default HomePage;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfileActions } from '../../store/userProfile/userProfileSlice';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(userProfileActions.setUserProfiles([{ id: 2, name: 'bella', age: 19 }]));
    }, 3000);
  }, [dispatch]);

  const userProfiles = useSelector((state) => state.userProfile.userProfiles).map(
    (someUserProfile) => {
      return (
        <div key={someUserProfile.id}>
          <div>id: {someUserProfile.id}</div>
          <div>name: {someUserProfile.name}</div>
          <div>age: {someUserProfile.age}</div>
        </div>
      );
    }
  );

  const onClickHandler = () => {};

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={onClickHandler}></button>
      <p>{userProfiles}</p>
    </div>
  );
}

export default HomePage;

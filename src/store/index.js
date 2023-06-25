import { configureStore } from '@reduxjs/toolkit';

import userProfileReducer from './userProfile/userProfileSlice';

const store = configureStore({
  reducer: { userProfile: userProfileReducer },
});

export default store;

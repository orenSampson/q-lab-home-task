import { createSlice } from '@reduxjs/toolkit';

const initialUserProfileState = { userProfiles: [{ id: 1, name: 'oren', age: 42 }] };

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: initialUserProfileState,
  reducers: {
    setUserProfiles(state, action) {
      state.userProfiles = action.payload;
    },
  },
});

export const userProfileActions = userProfileSlice.actions;

export default userProfileSlice.reducer;

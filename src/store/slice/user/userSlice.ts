import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userInitialState} from './initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action?.payload;
    }
  }
});

export const {setToken} = userSlice.actions;

export default userSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {guestInitialState} from './initialState';
import {GuestUser} from 'services/applicatif/guestServices/type';

export const guestSlice = createSlice({
  name: 'guest',
  initialState: guestInitialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<Array<GuestUser>>) => {
      const newData = action?.payload;
      const lists = [...state.lists];
      const newDataToInsert = newData?.filter((data: GuestUser) => {
        return lists?.findIndex(e => e?.id === data?.id) <= 0;
      });
      state.lists = [...lists, ...newDataToInsert];
    },
    addGuests: (state, action: PayloadAction<GuestUser>) => {
      state.lists = [...state.lists, action?.payload];
    },
    editGuests: (
      state,
      action: PayloadAction<{id: number; data: GuestUser}>,
    ) => {
      const newList = [...state?.lists];
      const index = newList.findIndex(item => item?.id === action?.payload?.id);
      newList[index] = action?.payload?.data;

      state.lists = [...newList];
    },
    removeGuest: (state, action: PayloadAction<{id: number}>) => {
      const newList = [...state?.lists];
      const index = newList.findIndex(item => item?.id === action?.payload?.id);
      newList.splice(index, 1);

      state.lists = [...newList];
    }
  }
});

export const {setAllUsers, addGuests, editGuests, removeGuest} =
  guestSlice.actions;

export default guestSlice.reducer;

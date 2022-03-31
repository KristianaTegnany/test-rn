import guestReducer from './slice/guest/guestSlice';
import userReducer from './slice/user/userSlice';
import {combineReducers} from 'redux';
import {GuestInitialStateType} from './slice/guest/type';
import {UserInitialStateType} from './slice/user/type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducers = combineReducers({
  log: (_, action) => {
    return {};
  },
  guestReducer,
  userReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    AsyncStorage.clear();
    state = {};
  }
  return appReducers(state, action);
};

export type rootState = {
  guestReducer: GuestInitialStateType;
  userReducer: UserInitialStateType;
};

export default rootReducer;

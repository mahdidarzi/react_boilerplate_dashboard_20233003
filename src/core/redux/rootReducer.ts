import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './globalSlice';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  globalReducer,
  userReducer,
});

export default rootReducer;

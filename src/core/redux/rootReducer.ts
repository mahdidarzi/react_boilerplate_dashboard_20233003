import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './globalSlice';

const rootReducer = combineReducers({
    globalReducer
});


export default rootReducer;
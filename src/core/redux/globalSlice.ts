import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  language: 'english' | 'arabic';
  them: 'light' | 'dark';
}

const initialState: CounterState = {
  language: 'english',
  them: 'light',
};

export const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    changeLanguageAction: (state, action: PayloadAction<'english' | 'arabic'>) => {
      state.language = action.payload;
    },
    changeThemAction: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.them = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguageAction, changeThemAction } = globalDataSlice.actions;

export default globalDataSlice.reducer;

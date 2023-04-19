import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  address: { geolocation: { lat: string; long: string }; city: string; street: string; number: string };
  email: string;
  id: number;
  name: { firstname: string; lastname: string };
  password: string;
  phone: string;
  username: string;
  __v: number;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CounterState {
  users: IUser[];
  products: IProduct[];
  selectedItems: (IProduct | IUser)[];
    UserSearchKey: string,
  productSearchKey: string,
}

const initialState: CounterState = {
  users: [],
  products: [],
  selectedItems: [],
  UserSearchKey: '',
  productSearchKey: '',
};

export const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    changeUserDataAction: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    changeProductDataAction: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    changeSelectedItemAction: (state, action: PayloadAction<(IProduct | IUser)[]>) => {
      state.selectedItems = action.payload;
    },
    changeProductSearchKeyAction: (state, action: PayloadAction<string>) => {
      state.productSearchKey = action.payload;
    },
    changeUserSearchKeyAction: (state, action: PayloadAction<string>) => {
      state.UserSearchKey = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserDataAction, changeProductDataAction, changeSelectedItemAction,changeProductSearchKeyAction ,changeUserSearchKeyAction} = globalDataSlice.actions;

export default globalDataSlice.reducer;

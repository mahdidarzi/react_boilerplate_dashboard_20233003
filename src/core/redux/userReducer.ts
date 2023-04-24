import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const tmpImage =
  'https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg?__cf_chl_tk=rZet47sfNPZxvg_92bUMM6VEygf0C_D8FWnhR1FkK7w-1682165041-0-gaNycGzNDRA';

export interface UserInterface {
  name: string;
  position: string;
  profileImage: string;
  bio: string;
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  conversations: { profileImage: string; name: string; text: string }[];
}

const initialState: UserInterface = {
  name: 'John Doe',
  position: 'CEO / Creator',
  profileImage: tmpImage,
  bio: `Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
  `,
  fullName: 'Alec M. Thompson',
  mobile: '(44) 123 1234 123',
  email: 'alecthompson@mail.com',
  location: 'USA',
  conversations: [
    {
      profileImage: tmpImage,
      name: 'John Doe',
      text: 'Stet et elitr invidunt stet amet no.',
    },
    {
      profileImage: tmpImage,
      name: 'John Doe',
      text: 'Stet et elitr invidunt stet amet no.',
    },
    {
      profileImage: tmpImage,
      name: 'John Doe',
      text: 'Stet et elitr invidunt stet amet no.',
    },
    {
      profileImage: tmpImage,
      name: 'John Doe',
      text: 'Stet et elitr invidunt stet amet no.',
    },
    {
      profileImage: tmpImage,
      name: 'John Doe',
      text: 'Stet et elitr invidunt stet amet no.',
    },
  ],
};

export const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setUserInfoAction: (state, action: PayloadAction<UserInterface>) => {
      state.name = action.payload.name;
      state.position = action.payload.position;
      state.profileImage = action.payload.profileImage;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfoAction } = userDataSlice.actions;

export default userDataSlice.reducer;

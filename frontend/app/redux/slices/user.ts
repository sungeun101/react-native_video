import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: any;
};

const initialState: UserState = {
  user: null,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = slice.actions;

// selectors
export const selectUser = (state: UserState) => state.user.user;

export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
    isLoading: false,
    isAuthenticated: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { logOut, logIn } = counterSlice.actions;

export const logInUser = (user) => (dispatch) => {
  dispatch(logIn(user));
};

export const logOutUser = () => (dispatch) => {
  dispatch(logOut());
};
export const selectisAuthenticated = (state) => state.user.isAuthenticated;
export const selectUser = (state) => state.user.user;

export default counterSlice.reducer;

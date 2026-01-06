import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    requestSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    requestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

export const {
  requestStart,
  requestSuccess,
  requestFail,
  addUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;

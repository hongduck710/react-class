import {createSlice} from "@reduxjs/toolkit";

import { userSlice } from "../slice/userSlice";

const userService = createSlice({
    name: "users",
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userSlice.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(userSlice.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload; // response.data가 이 곳에 담김
        })
        .addCase(userSlice.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userService.reducer;
  
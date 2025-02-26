// Redux Slice (customerSlice.js)
import { createSlice } from "@reduxjs/toolkit";
import {fetchUserInfoThunk} from "../slice/userInfoSlice"


const userInfoService = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; //response.data
      })
      .addCase(fetchUserInfoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userInfoService.reducer;
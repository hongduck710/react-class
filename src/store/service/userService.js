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
        .addCase(userSlice.pending, (state) => { // state, action 키값이기 때문에 변하지 않음
          state.loading = true;
          state.error = null;
        })
        .addCase(userSlice.fulfilled, (state, action) => { //action에 데이터가 담겨지게 되면서 
          state.loading = false;
          state.users = action.payload; // response.data가 이 곳에 담김
        })
        .addCase(userSlice.rejected, (state, action) => { // 데이터를 받지 못할 경우 이 곳에 오게 됨.
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userService.reducer; // 저장장소인 store에 담기게 됨

  /*thunk: 미들웨어 */
  
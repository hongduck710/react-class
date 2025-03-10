import {createSlice} from "@reduxjs/toolkit";
import {fetchUserCreateThunk} from "../slice/apiSlice";

const userCreateService = createSlice({
    name: "userCreate",
    initialState: {
        userCreate: {},
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCreateThunk.pending , (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserCreateThunk.fulfilled , (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(fetchUserCreateThunk.rejected , (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default userCreateService.reducer;
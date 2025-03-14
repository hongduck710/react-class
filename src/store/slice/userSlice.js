import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserThunk = createAsyncThunk("users/fetchUsers", async (_, {rejectWithValue}) => {
    try{
        const response = await axios.get("http://localhost:8080/users"); 
        console.log("response.data", response.data);
        return response.data; // 
    } catch (err) {
        console.error(err);
        return rejectWithValue("어딘가에서 에러 발생.");
    }
});


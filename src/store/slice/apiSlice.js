import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchUserCreateThunk = createAsyncThunk("userCreate/fetchUserCreateThunk", async (body) => {
    const response = await api.post(`/users`, body);
    console.log("response.data:", response.data);
    return response.data;
});
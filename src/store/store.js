// Redux Store Configuration (store.js)
import { configureStore } from "@reduxjs/toolkit";
import userList from "./service/userService"; //userList변수에 ./service/userService가 담기게 됨
import userInfo from "./service/userInfoService";

const store = configureStore({
  reducer: {
    userList, // userList: userList
    userInfo
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { userReducer, auth } from "./Reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: auth,
  },
});

export default store;

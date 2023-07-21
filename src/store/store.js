import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
  },
});

export default store;

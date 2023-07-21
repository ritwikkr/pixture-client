import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import movieReducer from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
    movie: movieReducer,
  },
});

export default store;

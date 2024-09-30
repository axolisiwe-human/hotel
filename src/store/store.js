import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import hotelReducer from "./hotelSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels: hotelReducer,
  },
});

export default store;

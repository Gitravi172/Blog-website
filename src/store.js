import { configureStore } from "@reduxjs/toolkit";
import dilsediaryReducer from "./redux/dilsediary";

export const store = configureStore({
  reducer: {
    blog: dilsediaryReducer,
  },
});
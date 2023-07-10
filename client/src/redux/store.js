import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import userReducer from "./features/userSlice";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

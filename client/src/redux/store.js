import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./features/alertSlice";
import userSlice from "./features/userSlice";
import modalSlice from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};
const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

console.log(alertSlice);

export const { showLoading, hideLoading } = alertSlice.actions;
export default alertSlice.reducer;

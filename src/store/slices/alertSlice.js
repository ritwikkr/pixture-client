import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    alertText: null,
    alertType: null,
  },
  reducers: {
    showAlert: (state, action) => {
      state.show = true;
      state.alertText = action.payload.text;
      state.alertType = action.payload.type;
    },
    hideAlert: (state, action) => {
      state.show = false;
      state.alertText = null;
      state.alertType = null;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;

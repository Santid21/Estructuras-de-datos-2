import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    pushNotification: (state, action) => {
      state.push(action.payload);
    },
    popNotification: (state) => {
      state.pop();
    },
  },
});

export const { pushNotification, popNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const directMessagesSlice = createSlice({
  name: "directMessages",
  initialState: [],
  reducers: {
    enqueueMessage: (state, action) => {
      state.push(action.payload);
    },
    dequeueMessage: (state) => {
      state.shift();
    },
  },
});

export const { enqueueMessage, dequeueMessage } = directMessagesSlice.actions;
export default directMessagesSlice.reducer;

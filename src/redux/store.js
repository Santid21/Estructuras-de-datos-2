import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postsReducer from "./postsSlice";
import notificationsReducer from "./notificationsSlice";
import directMessagesReducer from "./directMessagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    notifications: notificationsReducer,
    directMessages: directMessagesReducer,
  },
});

// src/redux/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    // Reemplaza toda la lista (al cargar desde Firebase)
    setPosts: (state, action) => {
      return action.payload;
    },
    // Agrega una nueva publicación (al crear un post nuevo)
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;

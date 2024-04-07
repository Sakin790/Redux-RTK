import { createSlice, nanoid } from "@reduxjs/toolkit";

const initaialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initaialState,
  reducers: {
    
  }
});

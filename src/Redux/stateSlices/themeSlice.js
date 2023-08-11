import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:[
  "text-blue-500",
  "border-blue-500",
  "bg-blue-500",
  "hover:bg-blue-300",
  "bg-blue-300",
  "hover:text-blue-500"]
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    themeMode: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { themeMode } = themeSlice.actions;
export default themeSlice.reducer;

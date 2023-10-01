import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const darkSlice = createSlice({
  name: "darkSlice",
  initialState,
  reducers: {
    darkMode: (state,action) => {
      state.value = action.payload;
    }
  }
});

export const { darkMode } = darkSlice.actions;
export default darkSlice.reducer;

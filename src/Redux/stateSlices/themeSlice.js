import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:null
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

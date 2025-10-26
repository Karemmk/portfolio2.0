import { createSlice } from "@reduxjs/toolkit";

// Get the current URL's search params
const searchParams = new URLSearchParams(window.location.search);

// Get the color value
const colorParam = searchParams.get("color") ; // fallback if missing

const initialState = {
  value:[
    `text-${colorParam}-500`,
      `border-${colorParam}-500`,
      `bg-${colorParam}-500`,
      `hover:bg-${colorParam}-300`,
      `bg-${colorParam}-300`,
      `hover:text-${colorParam}-500`
  ]
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

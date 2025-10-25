import { createSlice } from "@reduxjs/toolkit";
import { useSearchParams } from "react-router-dom";

const colore = searchParams.get("color") ;
const initialState = {
  value:[`text-${colore}-500`,
         `border-${colore}-500`,
         `bg-${colore}-500`,
         `hover:bg-${colore}-300`,
         `bg-${colore}-300`,
         `hover:text-${colore}-500`
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

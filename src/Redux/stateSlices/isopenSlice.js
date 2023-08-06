import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const isopenSlice = createSlice({
  name: "isopenSlice",
  initialState,
  reducers: {
    isOpen: (state) => {
      state.value = !state.value;
    }
  }
});
export const { isOpen } = isopenSlice.actions;
export default isopenSlice.reducer;

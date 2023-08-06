import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const routeSlice = createSlice({
  name: "routeSlice",
  initialState,
  reducers: {
    route: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { route } = routeSlice.actions;
export default routeSlice.reducer;

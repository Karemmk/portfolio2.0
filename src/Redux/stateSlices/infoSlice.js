import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchInfo = createAsyncThunk(
  "info/fetchInfo",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "https://karemmk.github.io/portfolio2api/portfolio2api.json"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  value: null,
  status: null
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  extraReducers: {
    [fetchInfo.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "sucess";
      
    },
    [fetchInfo.pending]: (state) => {
      state.status = "loading";
    },
    [fetchInfo.rejected]: (state) => {
      state.status = "failed";
    }
  }
});

export default infoSlice.reducer;

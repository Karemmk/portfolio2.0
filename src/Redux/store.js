import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./stateSlices/darkSlice";
import themeReducer from "./stateSlices/themeSlice";
import isopenReducer from "./stateSlices/isopenSlice";
import infoReducer from "./stateSlices/infoSlice";

export const store = configureStore({
  reducer: {
    dark: darkReducer,
    theme: themeReducer,
    isopen: isopenReducer,
    info: infoReducer
  }
});

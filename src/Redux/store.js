import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./stateSlices/darkSlice";
import themeReducer from "./stateSlices/themeSlice";
import isopenReducer from "./stateSlices/isopenSlice";
import routeReducer from "./stateSlices/routeSlice";

export const store = configureStore({
  reducer: {
    dark: darkReducer,
    theme: themeReducer,
    isopen: isopenReducer,
    route: routeReducer
  }
});

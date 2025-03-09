import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Redux";
export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;

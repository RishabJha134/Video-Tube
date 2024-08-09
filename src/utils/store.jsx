import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
const store = configureStore({
  reducer: {
    // Define your slice reducers here
    app: appSlice,
  },
});
export default store;

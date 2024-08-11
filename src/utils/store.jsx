import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    // Define your slice reducers here
    app: appSlice,
    search: searchSlice,
  },
});
export default store;

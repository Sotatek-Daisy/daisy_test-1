import { configureStore } from "@reduxjs/toolkit";
import boxReducer from "./reducers";

export default configureStore({
  reducer: {
    boxes: boxReducer,
  },
});

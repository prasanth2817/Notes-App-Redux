import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./userSlice";

export default configureStore({
  reducer: {
    Notes: NotesReducer,
  },
});

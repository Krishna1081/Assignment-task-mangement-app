import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../store/taskSlice";

const configStore = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default configStore;

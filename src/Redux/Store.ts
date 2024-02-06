import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/CounterSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: { Counter: counterReducer },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});
// Redux-logger
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

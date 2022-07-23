import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reOpenMenu } from "./OpenMenu";

const reducer = combineReducers({
  reOpenMenu,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reOpenMenu, reOpenSwDrawer } from "./OpenMenu";

const reducer = combineReducers({
  reOpenMenu,
  reOpenSwDrawer,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

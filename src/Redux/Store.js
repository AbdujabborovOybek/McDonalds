import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reOpenMenu, reOpenSwDrawer } from "./OpenMenu";
import { reSelectProduct } from "./SelectProduct";

const reducer = combineReducers({
  reOpenMenu,
  reOpenSwDrawer,
  reSelectProduct,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

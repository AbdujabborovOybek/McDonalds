import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reOpenMenu, reOpenSwDrawer } from "./OpenMenu";
import { reSelectProduct } from "./SelectProduct";
import { reLoading } from "./Loading";

const reducer = combineReducers({
  reOpenMenu,
  reOpenSwDrawer,
  reSelectProduct,
  reLoading,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reOpenMenu, reOpenSwDrawer } from "./OpenMenu";
import { reSelectProduct } from "./SelectProduct";
import { reLoading } from "./Loading";
import { reAddProductToCart } from "./Cart";
import { reTypeProduct } from "./TypeProduct";
import { reUser } from "./User";

const reducer = combineReducers({
  reOpenMenu,
  reOpenSwDrawer,
  reSelectProduct,
  reLoading,
  reAddProductToCart,
  reTypeProduct,
  reUser,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

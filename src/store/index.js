import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./features/cartSlice";

const reducer = combineReducers({
  Cart: cartSlice,
});

export const store = configureStore({
  reducer,
});

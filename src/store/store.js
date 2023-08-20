import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { fakestoreApi } from "../services/fakestoreApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [fakestoreApi.reducerPath]: fakestoreApi.reducer,
  },
  middleware: (gDM) => gDM().concat(fakestoreApi.middleware),
});

export default store;

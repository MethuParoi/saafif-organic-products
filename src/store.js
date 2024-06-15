import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

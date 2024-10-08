import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./features/addToCart/addtoCart";
export const store = configureStore({
  reducer: {
    cart: addToCartSlice,
  },
});

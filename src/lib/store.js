import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./features/addToCart/addtoCart";
import allProductsSlice from "./features/allproduct/allproductslice";
export const store = configureStore({
  reducer: {
    cart: addToCartSlice,
    allproduct: allProductsSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("allproduct")
    ? JSON.parse(localStorage.getItem("allproduct"))
    : [],
};

export const allProductsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      // Ensure products is an array before pushing
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      // If the payload is an array, you should concatenate, not push
      if (Array.isArray(action.payload)) {
        state.products = [...action.payload];
      } else {
        state.products.push(action.payload);
      }

      // Save the updated products array to localStorage
      localStorage.setItem("allproduct", JSON.stringify(state.products));
    },
  },
});

// Action creators are generated for each case reducer function
export const { allProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;

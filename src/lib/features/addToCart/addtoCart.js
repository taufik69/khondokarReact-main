import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";

const initialState = {
  CartTtem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  totoalCartItem: 0,
  TotalAmount: 0,
};

export const addToCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.CartTtem.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (findIndex >= 0) {
        state.CartTtem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
        toast.info(`${action.payload.productTitle}  Again added Cart`, {
          position: "top-left",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.CartTtem.push(temporary);
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
        toast.success(`${action.payload.productTitle} Added to Cart`, {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    RemoveItemCart: (state, action) => {
      const removeitem = state.CartTtem.filter(
        (item) => item._id !== action.payload._id,
      );
      state.CartTtem = removeitem;
      localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
      toast.error(`${action.payload.productTitle} Removed To Cart`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    ProductIncrement: (state, action) => {
      const findIndex = state.CartTtem.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (findIndex >= 0) {
        state.CartTtem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
        toast.success(`${action.payload.productTitle} increment`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    productDecrement: (state, action) => {
      const findIndex = state.CartTtem.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (state.CartTtem[findIndex].cartQuantity > 1) {
        state.CartTtem[findIndex].cartQuantity -= 1;
        toast.info(`${action.payload.productTitle} decresed`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        localStorage.setItem("cartItem", JSON.stringify(state.CartTtem));
      }
    },
    getTotal: (state, action) => {
      const totalCart = state.CartTtem.reduce(
        (totalCart, cartItem) => {
          const { productPrice, cartQuantity } = cartItem;
          const totalCartPrice = cartQuantity * productPrice;

          totalCart.totalAmount += Math.round(totalCartPrice);
          totalCart.totalItem += cartQuantity;
          return totalCart;
        },
        {
          totalAmount: 0,
          totalItem: 0,
        },
      );

      state.totoalCartItem = totalCart.totalItem;
      state.TotalAmount = totalCart.totalAmount;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addtoCart,
  RemoveItemCart,
  ProductIncrement,
  productDecrement,
  getTotal,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;

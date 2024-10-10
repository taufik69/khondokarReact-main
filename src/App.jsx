import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import SignUP from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Error from "./components/commonCoponents/Error";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./components/commonCoponents/RootLayout";
import ResetPassword from "./pages/Resetpassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout />}>
        <Route />
        <Route index element={<Home />} />,
        <Route path="/cart" element={<CartPage />} />,
        <Route path="/productdetails/:id" element={<ProductDetails />} />,
        <Route path="/*" element={<Error />}></Route>
      </Route>
      <Route path="/signup" element={<SignUP />}></Route>,
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/resetPassword" element={<ResetPassword />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <ToastContainer className={"w-fit"} />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

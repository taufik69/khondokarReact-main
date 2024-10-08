import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import SignUP from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Error from "./components/commonCoponents/Error";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route element={<IsLoginUser />}> */}
      <Route index element={<Home />} />
      <Route path="/cart" element={<CartPage />} />,
      <Route path="/*" element={<Error />}></Route>
      {/* </Route> */}
      {/* <Route element={<IsNotLoginUser />}> */}
      <Route path="/signup" element={<SignUP />}></Route>,
      <Route path="/signin" element={<SignIn />}></Route>
      {/* </Route> */}
    </Route>
  )
);

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

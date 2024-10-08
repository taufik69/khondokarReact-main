import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route element={<IsLoginUser />}> */}
        
          <Route index element={<Home/>} />
          <Route path="/cart" element={"<Cart />"} />,
          <Route
            path="/*"
            element={<h1 className="text-red-500"> error is here</h1>}
          ></Route>
      
      {/* </Route> */}

      {/* <Route element={<IsNotLoginUser />}> */}
        <Route path="/registration" element={"<Registration />"}></Route>,
        <Route path="/login" element={"<Login />"}></Route>
      {/* </Route> */}
    </Route>,
  ),
);

const App = () => {
  return (
    <>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
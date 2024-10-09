import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../HomeConponents/Header/Index";
import Footer from "../HomeConponents/Footer/Index";
import { Element } from "react-scroll";

const RootLayout = () => {
  return (
    <div>
      <Element name="Home">
        <Header />
      </Element>
      <Outlet />
      <Element name="Contact">
        <Footer />
      </Element>
    </div>
  );
};

export default RootLayout;

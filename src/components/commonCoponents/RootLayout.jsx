import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../HomeConponents/Header/Index";
import Footer from "../HomeConponents/Footer/Index";
import { Helmet } from "react-helmet";
const RootLayout = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta
          name="description"
          content="Top-quality machinery and workshop equipment. Explore a wide range of industrial machines, tools, and equipment for all your manufacturing needs."
        />
        <meta
          name="keywords"
          content="machinery, workshop equipment, industrial machines, tools, manufacturing equipment, heavy machinery, industrial tools"
        />
        <meta name="robots" content="index, follow" />
        <meta name="kandokar" content="kandorkar.com" />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

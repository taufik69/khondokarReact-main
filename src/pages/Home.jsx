import React from "react";
import Header from "../components/HomeConponents/Header/Index.jsx";
import Banner from "../components/HomeConponents/Banner/Index.jsx";
import Product from "../components/HomeConponents/Product/Index.jsx";
import Vedio from "../components/HomeConponents/vedio/Index.jsx";
import Client from "../components/HomeConponents/Client/Index.jsx";
import Award from "../components/HomeConponents/Award/Index.jsx";
import WhatWeDo from "../components/HomeConponents/WhatWeDo/Index.jsx";
import Footer from "../components/HomeConponents/Footer/Index.jsx";
import ScroolTop from "../components/commonCoponents/ScroolTop.jsx";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <div>
      <Element name="Home">
        <Header />
      </Element>
      <Element>
        <Banner />
      </Element>
      <Element name="Product">
        <Product />
      </Element>
      <Element name="Video">
        <Vedio />
      </Element>
      <Element name="Client">
        <Client />
      </Element>
      <Element name="Award">
        <Award />
      </Element>
      <Element name="whatWeDo">
        <WhatWeDo />
      </Element>
      <Element name="Contact">
        <Footer />
      </Element>
      <ScroolTop />
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../components/HomeConponents/Banner/Index.jsx";
import Product from "../components/HomeConponents/Product/Index.jsx";
import Vedio from "../components/HomeConponents/vedio/Index.jsx";
import Client from "../components/HomeConponents/Client/Index.jsx";
import Award from "../components/HomeConponents/Award/Index.jsx";
import WhatWeDo from "../components/HomeConponents/WhatWeDo/Index.jsx";
import ScroolTop from "../components/commonCoponents/ScroolTop.jsx";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <div>
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

      <ScroolTop />
    </div>
  );
};

export default Home;

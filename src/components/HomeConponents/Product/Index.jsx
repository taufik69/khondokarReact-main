import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../../commonCoponents/Heading.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import ProductContent from "./ProductContent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../../lib/features/addToCart/addtoCart.js";
import { axiosInstance } from "../../axios/axios.instance.js";
import { Link } from "react-router-dom";

const Products = () => {
  // Data Fetching from server
  useEffect(() => {
    const ProductFetcher = async () => {
      try {
        const { data } = await axiosInstance.get("/product");
        setallProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    ProductFetcher();
  }, []);

  const dispatch = useDispatch();
  const [allProduct, setallProduct] = useState([]);

  function SamplePrevArrow2(props) {
    const { onClick } = props;
    return (
      <div
        className="top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:left-12 -md:left-30 lg:left-[1%] xl:left-[-20px]  2xl:left-[-80px]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
        onClick={onClick}
      >
        <IoMdArrowBack
          className="animate-pulse text-orange_color"
          style={{ fontSize: "25px" }}
        />
      </div>
    );
  }

  function SampleNextArrow2(props) {
    const { onClick } = props;
    return (
      <div
        className="top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:right-12 -md:right-30 lg:right-[1%] xl:right-[-1%] 2xl:right-[-80px]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
        onClick={onClick}
      >
        <IoArrowForwardSharp
          className="animate-pulse text-orange_color"
          style={{ fontSize: "25px" }}
        />
      </div>
    );
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 3,
    infinite: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
  };

  const handleAddToCart = (item = {}) => {
    dispatch(addtoCart(item));
  };

  return (
    <>
      <div className="productpart">
        <div className="py-14">
          <Heading
            className={
              "customShadow flex flex-col items-center justify-center gap-y-4"
            }
            title={""}
            description={""}
          />
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="slider-container">
            <Slider {...settings}>
              {allProduct?.data?.map((productItem) => (
                <div className="px-4 md:px-3" key={productItem._id}>
                  {/* Wrap ProductContent with Link */}
                  <ProductContent
                    productInfo={productItem}
                    onhandleAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

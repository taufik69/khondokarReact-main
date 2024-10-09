import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import BannerContent from "./BannerContent.jsx";

import { axiosInstance } from "../../axios/axios.instance.js";

const Banner = () => {
  // Data Fetching from server
  const [currentSlide, setcurrentSlide] = useState(1);
  const [allBaner, setallBaner] = useState([]);
  useEffect(() => {
    const Fetcher = async () => {
      try {
        const { data } = await axiosInstance.get("/banner");

        setallBaner(data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    Fetcher();
  }, []);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="left-3 top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 border-orange-500 shadow-xl sm:left-12"
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "none",
          position: "absolute",
        }}
        onClick={onClick}
      >
        <IoMdArrowBack
          className="animate-pulse text-white"
          style={{ fontSize: "25px" }}
        />
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="right-5 top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 border-orange-500 shadow-xl sm:right-12"
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "",
          position: "absolute",
        }}
        onClick={onClick}
      >
        <IoArrowForwardSharp
          className="animate-pulse text-white"
          style={{ fontSize: "25px" }}
        />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    beforeChange: (currentslideNumber, nextCurrentNumver) => {
      setcurrentSlide(nextCurrentNumver + 1);
    },
    customPaging: (i) => (
      <div
        className="text-xl mr-4 flex h-[20px] w-[20px] items-center justify-center space-x-3 rounded-full border-2 border-orange_color text-primary_font_color"
        style={
          i + 1 === currentSlide
            ? {
                width: "20px",
                background: "rgb(247 113 20)",
                border: "2px solid #fff",
              }
            : {
                width: "20px",
                border: "2px solid #fff",
              }
        }
      ></div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {allBaner?.map((item) => (
          <BannerContent bannerContent={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

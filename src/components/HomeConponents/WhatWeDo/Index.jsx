import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import AwardContent from "../Award/AwardContent";
import { axiosInstance } from "../../axios/axios.instance";
const WhatWeDo = () => {
  const [whatwedo, setwhatwedo] = useState([]);
  useEffect(() => {
    const Fetcher = async () => {
      try {
        const { data } = await axiosInstance.get("/whatwedo");

        setwhatwedo(data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    Fetcher();
  }, []);
  function SamplePrevArrow2(props) {
    const { onClick } = props;
    return (
      <div
        className=" z-10 h-[40px] w-[40px]  cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "83%",
          bottom: "-11.5%",
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
        className=" z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:right-12 "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "1%",
          bottom: "-16%",
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
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 580,
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

  return (
    <div>
      <div className="WhatWeDoPart">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row justify-between items-center flex-wrap gap-8 lg:gap-0">
            <div className="lg:w-1/2 w-full p-4 lg:p-0">
              <div className="slider-container">
                <Slider {...settings}>
                  {whatwedo?.map((item) => (
                    <div>
                      <AwardContent awardInfo={item} title={false} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-4 lg:w-1/2 w-full p-6 mt-10 lg:mt-0">
              <h2
                className="family after:contents-[''] relative cursor-pointer font-sans_serif text-[40px] sm:text-heading_font_size  text-primary_font_color transition-opacity after:absolute md:after:bottom-4 after:bottom-0 xl:after:left-[-60%] lg:after:left-[-49%] md:after:left-[-50%]  after:left-1/2  after:h-[3px] after:w-32 after:bg-orange_color hover:opacity-85 text-center lg:text-start pl-3 xl:pl-0"
                style={{ fontWeight: 600 }}
              >
                What we do
              </h2>

              <p
                className="text-primary_font_color font-sans   md:pl-3 xl:pl-14 text-justify"
                style={{ fontWeight: 400 }}
              >
                A mustard oil extraction machine, machine or mustard oil mill,
                is a device used to extract oil from mustard seeds. It crushes
                the seeds to separate the oil from the seed pulp. Various models
                of mustard oil extraction machines are available in the market,
                with different capacities and efficiencies.
              </p>

              <button className="signUp rounded-xl border-[2px] w-full sm:w-1/3 bg-orange_color px-6 py-2 text-primary_font_color">
                Contact US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

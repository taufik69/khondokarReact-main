import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../commonCoponents/Heading.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import VedioContent from "./VedioContent.jsx";
import { axiosInstance } from "../../axios/axios.instance.js";

const Vedio = () => {
  const [allVedio, setallVedio] = useState([]);
  useEffect(() => {
    const Fetcher = async () => {
      try {
        const { data } = await axiosInstance.get("/vedio");

        setallVedio(data?.data);
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
        className="top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:left-12 -md:left-30 lg:left-[1.4%] xl:left-[1%]  2xl:left-[-80px]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          // left: "-80px",
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
        className="absolute top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:right-12 -md:right-30 lg:right-[1%] xl:right-[1%] 2xl:right-[-80px]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          // right: "-50px",
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
    className: "center",
    centerMode: true,
    dots: false,
    speed: 500,
    slidesToScroll: 1,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          dots: false,
          speed: 500,
          slidesToScroll: 1,
          centerPadding: "100px",
          slidesToShow: 1,
          infinite: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          dots: false,
          speed: 500,
          slidesToScroll: 1,
          centerPadding: "10px",
          slidesToShow: 1,
          infinite: true,
          cssEase: "linear",
          className: "center",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
          arrows: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
  };
  return (
    <div className="Vediopart">
      <div className="py-14">
        <Heading
          className={
            "customShadow flex flex-col items-center justify-center gap-y-4"
          }
          title={"Products Video"}
          description={`Find out more about smart factories, their market prospects, and key smart factory hardware you can add to your inventory to leverage the boom.`}
        />
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="slider-container">
          <Slider {...settings}>
            {allVedio?.map((vedio) => (
              <div key={vedio._id}>
                <VedioContent
                  vedioSrc={
                    "https://www.youtube.com/embed/vB1pY2PG1cg?si=GGotktB34aiOI5i9"
                  }
                  vedioinfo={vedio}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Vedio;

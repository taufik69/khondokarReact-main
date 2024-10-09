import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../../commonCoponents/Heading.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";

import { axiosInstance } from "../../axios/axios.instance.js";

const Client = () => {
  const [allClient, setallClient] = useState([]);
  useEffect(() => {
    const Fetcher = async () => {
      try {
        const { data } = await axiosInstance.get("/client");

        setallClient(data?.data);
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
        className="top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:left-12 -md:left-30 lg:left-[2%] xl:left-[1%]  2xl:left-[-80px]"
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
        className="absolute top-1/2 z-10 h-[40px] w-[40px] -translate-y-1/2 cursor-pointer rounded-full border-2 bg-primary_font_color shadow-xl sm:right-12 -md:right-30 lg:right-[2%] xl:right-[1%] 2xl:right-[-80px]"
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
    dots: false,
    speed: 500,
    slidesToScroll: 3,
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

          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          dots: false,
          arrows: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
  };
  return (
    <div className=" bg-header_footer_background_color  ">
      <div className="py-14 ">
        <Heading
          className={" flex flex-col items-center justify-center gap-y-4"}
          title={"Clients say about us"}
          description={`Find out more about smart factories, their market prospects, and key smart factory hardware you can add to your inventory to leverage the boom.`}
        />
      </div>
      <div className="mx-auto max-w-screen-xl ">
        <div className="slider-container md:pb-36 ">
          <Slider {...settings}>
            {allClient?.map((client, index) => (
              <div
                class="flex justify-center  items-center p-5 h-[100%] lg:h-[60%] cursor-pointer relative"
                key={client._id}
              >
                <div class="bg-gray-800  text-white max-w-xl w-full  p-8 rounded-lg shadow-lg">
                  <div class="flex items-start space-x-4 ">
                    {/* <!-- Quote before the text --> */}
                    <div className="pb-10">
                      <div class="absolute top-[6%] left-[9%] text-[100px] text-orange-400 leading-none">
                        “
                      </div>
                      <div>
                        <p class="text-gray-300 h-[30dvh]   break-words text-justify py-14   text-lg mb-6">
                          {client?.clientSummay
                            ? `${client?.clientSummay.substring(0, 260)} ....`
                            : `Find out more dsfgsdfgsdfgsdf about smart factories,
                        their market prospects, and prospects, and key smart
                        factory hardware you can add to your inventory to
                        leverage the boom.`}
                        </p>
                        <div class="absolute right-[9%] bottom-[0%] text-[100px] text-orange-400 leading-none text-right">
                          ”
                        </div>
                        {/* <!-- Quote after the text --> */}
                      </div>
                      <div class="flex items-center mt-6 space-x-4 ">
                        <img
                          src={client ? client.image : client}
                          alt="Profile"
                          class="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 class="text-white font-semibold">
                            {client.clientName
                              ? client.clientName
                              : "Taufik isam"}
                          </h4>
                          <p class="text-orange-400 text-sm">
                            {client?.clientDesignation
                              ? client?.clientDesignation
                              : "Manager"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Client;

import React from "react";
import { Link } from "react-scroll";
const BannerContent = ({ bannerContent = {} }) => {
  return (
    <>
      <div className="relative h-[100vh]  w-full">
        <img
          src={bannerContent?.image ? bannerContent?.image : ""}
          loading="lazy"
          alt="Banner 1"
          className="h-full w-full object-center "
        />
        <div className="absolute left-0 top-0 h-full w-full bannerbg">
          <div className="flex h-full flex-col items-center justify-center gap-y-4">
            <h1
              className="w-full text-center font-sans_serif text-[25px] text-primary_font_color sm:text-[40px] md:w-full md:text-[42px] xl:w-[50%] xl:text-[64px] capitalize"
              style={{ fontWeight: 800 }}
            >
              {bannerContent?.headLine
                ? bannerContent?.headLine
                : "Banner Title Missing !!"}
            </h1>
            <p
              className="w-full px-5 text-justify font-ruda text-primary_font_color capitalize md:text-para_font_size xl:w-[60%] xl:px-0"
              style={{ textAlignLast: "center", fontWeight: 500 }}
            >
              {bannerContent.details
                ? bannerContent.details
                : `A mustard oil extraction machine, or mustard oil mill, is a device
              used to extract oil from mustard seeds. It crushes the seeds to
              separate the oil from the seed pulp. Various models of mustard oil
              extraction machines are available in the market, with different
              capacities and efficiencies.`}
            </p>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              // className="animate-bounce"
            >
              {" "}
              {/* Use Link component */}
              <button className=" signUp rounded-full border-2 font-sans_serif bg-orange-500 mt-10 px-10 py-2  text-primary_font_color ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
